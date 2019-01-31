import { Store } from '@/store/root'
import { ScreenState } from './index'

function _stateScope(state: Store['state']) {
  return state.containers.loginForm
}

function isSending(state: Store['state']) {
  return _stateScope(state).screenState === ScreenState.SENDING
}

function isFailed(state: Store['state']) {
  return _stateScope(state).screenState === ScreenState.LOGIN_FAILED
}

export default {
  isSending,
  isFailed,
}
