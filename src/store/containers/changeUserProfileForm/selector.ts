import {Store} from '@/store/root'
import {ScreenState} from './index'

function _stateScope(state: Store['state']) {
  return state.containers.changeUserProfileForm
}

function isSending(state: Store['state']) {
  return _stateScope(state).screenState === ScreenState.SENDING
}

function isSendFailed(state: Store['state']) {
  return _stateScope(state).screenState === ScreenState.SEND_FAILED
}

function isSendSuccess(state: Store['state']) {
  return _stateScope(state).screenState === ScreenState.SEND_SUCCESS
}

function isOpen(state: Store['state']) {
  return _stateScope(state).isOpen
}

export default {
  isSending,
  isSendSuccess,
  isSendFailed,
  isOpen,
}
