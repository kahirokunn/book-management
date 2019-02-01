import { IUser } from '@/boundary/userApplicationService/InOutType'
import router from '@/router'
import { AuthApplicationService } from '@/serviceLocator/AuthApplicationService'
import { Logger } from '@/serviceLocator/Logger'
import { UserStream } from '@/serviceLocator/UserStream'
import { updatedUserProfileEvent } from '@/store/eventHub/eventCreators'
import {
  action,
  actionsToMutations,
  combineAction,
  combineMutation,
  mutation,
} from 'typescript-fsa-vuex'
import {
  actionCreator,
  successUserLogin,
  unsubscribeUserData,
  userLogin,
} from './action'

const beforeSubscribe = actionCreator<ReturnType<typeof successUserLogin>['payload']>('BEFORE_SUBSCRIBE')
const startedSubscribe = actionCreator<{unsubscribe: unsubscribe}>('STARTED_SUBSCRIBE')
const failureLogin = actionCreator('FAILURE_LOGIN')
const receiveUserFromStream = actionCreator<{user: IUser}>('RECEIVE_USER_FROM_STREAM')

type State = {
  isInitialized: boolean,
  isLoggedIn: boolean,
  isEmailVerified: boolean,
  user: IUser | null,
  unsubscribe: unsubscribe[],
}

const initialState = (): State => ({
  isInitialized: false,
  isLoggedIn: false,
  isEmailVerified: false,
  user: null,
  unsubscribe: [],
})

// tslint:disable
const mutations = combineMutation<State>(
  mutation(updatedUserProfileEvent, (state, action) => {
    state.user = action.payload.user
  }),
  mutation(beforeSubscribe, (state, action) => {
    state.isLoggedIn = true
    state.isEmailVerified = action.payload.authInfo.isEmailVerified
  }),
  mutation(startedSubscribe, (state, action) => {
    state.unsubscribe.push(action.payload.unsubscribe)
  }),
  mutation(failureLogin, (state) => {
    state.isInitialized = true
    state.isLoggedIn = false
    state.user = initialState().user
  }),
  mutation(unsubscribeUserData, (state) => {
    state.unsubscribe.map((unsubscribe) => unsubscribe())
  }),
  mutation(receiveUserFromStream, (state, action) => {
    if (!state.isInitialized) {
      state.isInitialized = true
      router.push('/')
    }
    state.user = action.payload.user
  }),
)

const actions = combineAction<State, any>(
  actionsToMutations(
    updatedUserProfileEvent,
  ),
  action(userLogin, async ({commit, dispatch}) => {
    try {
      const authInfo = await AuthApplicationService.getInstance().login()
      await dispatch(successUserLogin({authInfo}))
    } catch (e) {
      Logger.getInstance().info('ログイン失敗', e)
      commit(failureLogin())
    }
  }),
  action(successUserLogin, async ({commit}, action) => {
    const { authInfo } = action.payload
    Logger.getInstance().info('ログイン成功', authInfo)
    commit(beforeSubscribe({authInfo}))
    const unsubscribe = UserStream.getInstance().subscribe({
      payload: { userId: authInfo.userId },
      subscriber: (user) => commit(receiveUserFromStream({user})),
    })
    commit(startedSubscribe({unsubscribe}))
  }),
)

export default {
  state: initialState,
  mutations,
  actions,
}
