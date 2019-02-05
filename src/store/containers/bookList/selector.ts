import { Store } from '@/store/root'
import { ScreenState } from './index'

function _stateScope(state: Store['state']) {
  return state.containers.bookList
}

function isInitialized(state: Store['state']) {
  return _stateScope(state).screenState !== ScreenState.INITIAL_FETCHING
}

function books(state: Store['state']) {
  return Object
    .values(_stateScope(state).books)
    .sort((a, b) => a.updatedAt > b.updatedAt ? -1 : 1)
}

export default {
  isInitialized,
  books,
}
