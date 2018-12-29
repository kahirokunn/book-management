import AuthApplicationService from '@/serviceLocator/AuthApplicationService'
import {
  SuccessUserLoginAction,
} from '@/store/middleware/auth/insideAction'
import {FailureLoginAction} from './insideAction'
import {
  LoginByEmailAndPasswordAction,
  ToStandbyAction,
} from './boundaryAction'
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

const mutations = {
  [LoginByEmailAndPasswordAction.type](state: State, action: LoginByEmailAndPasswordAction) {
    AuthApplicationService.getInstance().loginWithEmailAndPassword(
      action.info.email,
      action.info.password,
    ).then((user) => {
      store.commit(new SuccessUserLoginAction(user))
      router.push('/')
    })
    .catch((e) => {
      Logger.getInstance().error(e)
      store.commit(new FailureLoginAction())
    })
    state.screenState = ScreenState.SENDING
  },
  [FailureLoginAction.type](state: State) {
    state.screenState = ScreenState.LOGIN_FAILED
  },
  [ToStandbyAction.type](state: State, action: ToStandbyAction) {
    state.screenState = ScreenState.STANDBY
  },
}

export default {
  state: initialState,
  mutations,
}
