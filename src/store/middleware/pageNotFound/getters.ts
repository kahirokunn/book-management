import store from '@/store/root'

function _state() {
  return store.state.middleware.pageNotFound
}

function isPageNotFound() {
  return _state().isPageNotFound
}

export default {
  isPageNotFound,
}
