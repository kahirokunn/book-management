import { Store } from '@/store/root'

function _stateScope(state: Store['state']) {
  return state.middleware.pageNotFound
}

function isPageNotFound(state: Store['state']) {
  return _stateScope(state).isPageNotFound
}

export default {
  isPageNotFound,
}
