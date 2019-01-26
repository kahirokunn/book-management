import {combineMutation, mutation} from 'vuex-typescript-fsa'
import {
  successUpdate,
  failureSend,
} from './insideAction'
import {
  updateProfile,
  toStandby,
  openDialog,
  closeDialog,
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

const mutations = combineMutation<State>(
  mutation(updateProfile, (state, action) => {
    UserApp.getInstance().update(action.payload.user)
      .then((user) => {
        Logger.getInstance().info('ユーザー情報の更新に成功', user)
        store.commit(successUpdate())
        store.commit(updatedUserProfileEvent({user}))
      })
      .catch((e) => {
        Logger.getInstance().error(e)
        store.commit(failureSend())
      })
    state.screenState = ScreenState.SENDING
  }),
  mutation(successUpdate, (state) => {
    state.screenState = ScreenState.SEND_SUCCESS
  }),
  mutation(failureSend, (state) => {
    state.screenState = ScreenState.SEND_FAILED
  }),
  mutation(openDialog, (state) => {
    state.isOpen = true
  }),
  mutation(closeDialog, (state) => {
    state.isOpen = false
  }),
  mutation(toStandby, (state) => {
    state.screenState = ScreenState.STANDBY
  }),
)

export default {
  state: initialState,
  mutations,
}
