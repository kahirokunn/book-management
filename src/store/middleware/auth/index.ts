import { IUser } from '@/boundary/userApplicationService/InOutType'
import AuthApplicationService from '@/serviceLocator/AuthApplicationService'
import Logger from '@/serviceLocator/Logger'
import UserStream from '@/serviceLocator/UserStream'
import { updatedUserProfileEvent } from '@/store/eventHub/eventCreators'
import {
  action,
  actionCreatorFactory,
  actionsToMutations,
  combineAction,
  combineMutation,
  mutation,
} from 'typescript-fsa-vuex'
import {
  successUserLogin,
  unsubscribeUserData,
  userLogin,
} from './action'
import namespace from './namespace'

const actionCreator = actionCreatorFactory(namespace)
const startSubscribe = actionCreator<{unsubscribe: unsubscribe}>('START_SUBSCRIBE')
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

const mutations = combineMutation<State>(
  mutation(updatedUserProfileEvent, (state, action) => {
    state.user = action.payload.user
  }),
  mutation(successUserLogin, (state, action) => {
    state.isInitialized = true
    state.isLoggedIn = true
    const {authInfo} = action.payload
    state.isEmailVerified = authInfo.isEmailVerified
    delete authInfo.isEmailVerified
    state.user = authInfo
  }),
  mutation(startSubscribe, (state, action) => {
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
    state.user = action.payload.user
  }),
)

const actions = combineAction<State, any>(
  actionsToMutations(
    updatedUserProfileEvent,
    successUserLogin,
  ),
  action(userLogin, async ({commit}) => {
    try {
      const authInfo = await AuthApplicationService.getInstance().login()
      commit(successUserLogin({authInfo}))
      Logger.getInstance().info('ログイン成功', authInfo)
      const unsubscribe = UserStream.getInstance().subscribe({
        payload: { userId: authInfo.id },
        subscriber: (user) => commit(receiveUserFromStream({user})),
      })
      commit(startSubscribe({unsubscribe}))
    } catch (e) {
      Logger.getInstance().info('ログイン失敗', e)
      commit(failureLogin())
    }
  }),
)

export default {
  state: initialState,
  mutations,
  actions,
}
