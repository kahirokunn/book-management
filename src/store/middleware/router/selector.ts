import { Store } from '@/store/root'

function _stateScope(state: Store['state']) {
  return state.middleware.router
}

function location(state: Store['state']) {
  return _stateScope(state).location
}


export default {
  location,
}
