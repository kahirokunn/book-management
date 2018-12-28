import store from '@/store/root'
import {ScreenState} from './index'

function _state() {
  return store.state.containers.changeUserProfileForm
}

function isSending() {
  return _state().screenState === ScreenState.SENDING
}

function isSendFailed() {
  return _state().screenState === ScreenState.SEND_FAILED
}

function isSendSuccess() {
  return _state().screenState === ScreenState.SEND_SUCCESS
}

function isOpen() {
  return _state().isOpen
}

export default {
  isSending,
  isSendSuccess,
  isSendFailed,
  isOpen,
}
