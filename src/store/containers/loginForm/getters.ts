import store from '@/store/root'
import {ScreenState} from './index'

function _state() {
  return store.state.containers.loginForm
}

function isSending() {
  return _state().screenState === ScreenState.SENDING
}

function isFailed() {
  return _state().screenState === ScreenState.LOGIN_FAILED
}

export default {
  isSending,
  isFailed,
}
