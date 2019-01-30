import '@/store/resolveTestConfiguration'

import {pageNotFound} from './action'
import getters from './getters'
import store from '@/store/root'
import flushPromises from 'flush-promises'

test('pageNotFound状態がtrueになる', async () => {
  expect(getters.isPageNotFound()).toBe(false)
  store.dispatch(pageNotFound())
  await flushPromises()
  expect(getters.isPageNotFound()).toBe(true)
})
