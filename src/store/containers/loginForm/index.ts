import router from '@/router'
import { AuthApplicationService } from '@/serviceLocator/AuthApplicationService'
import { Logger } from '@/serviceLocator/Logger'
import {
  successUserLogin,
} from '@/store/middleware/auth/action'
import {
  action,
  actionsToMutations,
  combineAction,
  combineMutation,
  mutation,
} from 'typescript-fsa-vuex'
import {
  actionCreator,
  loginByEmailAndPassword,
  toStandby,
} from './action'

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
