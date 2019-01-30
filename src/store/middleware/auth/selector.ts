import {Store} from '@/store/root'

function _stateScope(state: Store['state']) {
  return state.middleware.auth
}

function isInitialized(state: Store['state']) {
  return _stateScope(state).isInitialized
}

function isLoggedIn(state: Store['state']) {
  return _stateScope(state).isLoggedIn
}

function user(state: Store['state']) {
  return _stateScope(state).user
}

function isEmailVerified(state: Store['state']) {
  return _stateScope(state).isEmailVerified
}

export default {
  isInitialized,
  isLoggedIn,
  user,
  isEmailVerified,
}
