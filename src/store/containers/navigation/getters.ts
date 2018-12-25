import store from '@/store/root'

function _state() {
  return store.state.containers.navigation
}

function isOpen() {
  return _state().isOpen
}

export default {
  isOpen,
}
