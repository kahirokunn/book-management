import {Store} from '@/store/root'

function _stateScope(state: Store['state']) {
  return state.containers.navigation
}

function isOpen(state: Store['state']) {
  return _stateScope(state).isOpen
}

export default {
  isOpen,
}
