import {
  SuccessUpdateAction,
  FailureSendAction,
} from './insideAction'
import {
  UpdateProfileAction,
  ToStandbyAction,
  OpenDialog,
  CloseDialog,
} from './boundaryAction'
import {updatedUserProfileEvent} from '@/store/eventHub/eventCreators'
import store from '@/store/root'
import UserApp from '@/serviceLocator/UserApplicationService'
import Logger from '@/serviceLocator/Logger'

export enum ScreenState {
  STANDBY,
  SENDING,
  SEND_FAILED,
  SEND_SUCCESS,
}

type State = {
  isOpen: boolean,
  screenState: ScreenState,
}

const initialState = (): State => ({
  isOpen: false,
  screenState: ScreenState.STANDBY,
})

const mutations = {
  [UpdateProfileAction.type](state: State, action: UpdateProfileAction) {
    UserApp.getInstance().update(action.user)
      .then((user) => {
        Logger.getInstance().info('ユーザー情報の更新に成功', user)
        store.commit(new SuccessUpdateAction())
        store.commit(updatedUserProfileEvent({user}))
      })
      .catch((e) => {
        Logger.getInstance().error(e)
        store.commit(new FailureSendAction())
      })
    state.screenState = ScreenState.SENDING
  },
  [SuccessUpdateAction.type](state: State, action: SuccessUpdateAction) {
    state.screenState = ScreenState.SEND_SUCCESS
  },
  [FailureSendAction.type](state: State, action: FailureSendAction) {
    state.screenState = ScreenState.SEND_FAILED
  },
  [ToStandbyAction.type](state: State, action: ToStandbyAction) {
    state.screenState = ScreenState.STANDBY
  },
  [OpenDialog.type](state: State, action: OpenDialog) {
    state.isOpen = true
  },
  [CloseDialog.type](state: State, action: CloseDialog) {
    state.isOpen = false
  },
}

export default {
  state: initialState,
  mutations,
}
