import '@/store/resolveTestConfiguration'

import {pageNotFound} from './action'
import getters from './getters'
import store from '@/store/root'

test('pageNotFound状態がtrueになる', () => {
  expect(getters.isPageNotFound()).toBe(false)
  store.commit(pageNotFound())
  expect(getters.isPageNotFound()).toBe(true)
})
