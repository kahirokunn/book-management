import {
  combineMutation,
  mutation,
  combineAction,
  actionsToMutations,
  action,
  actionCreatorFactory,
} from 'typescript-fsa-vuex'
import AuthApplicationService from '@/serviceLocator/AuthApplicationService'
import {
  successUserLogin,
} from '@/store/middleware/auth/action'
import router from '@/router'
import Logger from '@/serviceLocator/Logger'
import {loginByEmailAndPassword, toStandby} from './action'
import namespace from './namespace'

const actionCreator = actionCreatorFactory(namespace)
const startLogin = actionCreator('START_LOGIN')
const failureLogin = actionCreator('FAILURE_LOGIN')


export enum ScreenState {
  STANDBY,
  SENDING,
  LOGIN_FAILED,
}

type State = {
  screenState: ScreenState,
}

const initialState = (): State => ({
  screenState: ScreenState.STANDBY,
})

const mutations = combineMutation<State>(
  mutation(startLogin, (state) => {
    state.screenState = ScreenState.SENDING
  }),
  mutation(failureLogin, (state) => {
    state.screenState = ScreenState.LOGIN_FAILED
  }),
  mutation(toStandby, (state) => {
    state.screenState = ScreenState.STANDBY
  }),
)

const actions = combineAction<State, any>(
  action(loginByEmailAndPassword, async ({commit}, action) => {
    commit(startLogin())
    try {
      const authInfo = await AuthApplicationService.getInstance().loginWithEmailAndPassword(
        action.payload.email,
        action.payload.password,
      )
      commit(successUserLogin({authInfo}))
      router.push('/')
    } catch (e) {
      Logger.getInstance().error(e)
      commit(failureLogin())
    }
  }),
  actionsToMutations(toStandby),
)

export default {
  state: initialState,
  mutations,
  actions,
}
