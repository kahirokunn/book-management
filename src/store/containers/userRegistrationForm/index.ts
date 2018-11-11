import AuthApplicationService from '@/serviceLocator/AuthApplicationService'
import {SuccessUserLoginAction} from '@/store/middleware/auth/insideAction'
import {FailureRegistrationAction} from './insideAction'
import {
  UserRegistrationAction,
  ToStandbyAction,
} from './boundaryAction'
import store from '@/store/root'
import router from '@/router'

export enum ScreenState {
  STANDBY,
  SENDING,
  SEND_FAILED,
}

type State = {
  screenState: ScreenState,
  errorCode: string,
}

const initialState = (): State => ({
  screenState: ScreenState.STANDBY,
  errorCode: '',
})

const mutations = {
  [UserRegistrationAction.type](state: State, action: UserRegistrationAction) {
    AuthApplicationService.getInstance().registration(action.registrationParams)
      .then((authInfo) => {
        store.commit(new SuccessUserLoginAction(authInfo))
        router.push('/')
      })
      .catch((e) => store.commit(new FailureRegistrationAction(e)))
    state.screenState = ScreenState.SENDING
  },
  [ToStandbyAction.type](state: State, action: ToStandbyAction) {
    state.screenState = ScreenState.STANDBY
  },
  [FailureRegistrationAction.type](state: State, action: FailureRegistrationAction) {
    state.errorCode = action.error.code
    state.screenState = ScreenState.SEND_FAILED
  },
}

export default {
  state: initialState,
  mutations,
}
