import {combineMutation, mutation} from 'typescript-fsa-vuex'
import AuthApplicationService from '@/serviceLocator/AuthApplicationService'
import {
  successUserLogin,
} from '@/store/middleware/auth/action'
import {
  loginByEmailAndPassword,
  toStandby,
  failureLogin,
} from './action'
import router from '@/router'
import store from '@/store/root'
import Logger from '@/serviceLocator/Logger'

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
  mutation(loginByEmailAndPassword, (state, action) => {
    state.screenState = ScreenState.SENDING

    AuthApplicationService.getInstance().loginWithEmailAndPassword(
      action.payload.email,
      action.payload.password,
    ).then((user) => {
      store.commit(successUserLogin({authInfo: user}))
      router.push('/')
    })
    .catch((e) => {
      Logger.getInstance().error(e)
      store.commit(failureLogin())
    })
  }),
  mutation(failureLogin, (state) => {
    state.screenState = ScreenState.LOGIN_FAILED
  }),
  mutation(toStandby, (state) => {
    state.screenState = ScreenState.STANDBY
  }),
)

export default {
  state: initialState,
  mutations,
}
