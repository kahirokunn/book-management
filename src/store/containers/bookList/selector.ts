import { Store } from '@/store/root'
import { ScreenState } from './index'

function _stateScope(state: Store['state']) {
  return state.containers.bookList
}

function isInitialized(state: Store['state']) {
  return _stateScope(state).screenState !== ScreenState.INITIAL_FETCHING
}

function books(state: Store['state']) {
  return _stateScope(state).books
}

export default {
  isInitialized,
  books,
}
