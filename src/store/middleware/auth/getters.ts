import store from '@/store/root'

function _state() {
  return store.state.middleware.auth
}

function isInitialized() {
  return _state().isInitialized
}

function isLoggedIn() {
  return _state().isLoggedIn
}

function user() {
  return _state().user
}

function isEmailVerified() {
  return _state().isEmailVerified
}

export default {
  isInitialized,
  isLoggedIn,
  user,
  isEmailVerified,
}
