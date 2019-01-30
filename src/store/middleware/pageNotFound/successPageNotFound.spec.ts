import '@/store/resolveTestConfiguration'
import flushPromises from 'flush-promises'
import {pageNotFound} from './action'
import selector from './selector'
import {createStore} from '@/store/root'

test('pageNotFound状態がtrueになる', async () => {
  const store = createStore()
  expect(selector.isPageNotFound(store.state)).toBe(false)
  store.dispatch(pageNotFound())
  await flushPromises()
  expect(selector.isPageNotFound(store.state)).toBe(true)
})
