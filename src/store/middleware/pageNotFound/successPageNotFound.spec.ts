import '@/resolveTestConfiguration'
import { createStore } from '@/store/root'
import flushPromises from 'flush-promises'
import { pageNotFound } from './action'
import selector from './selector'

test('pageNotFound状態がtrueになる', async () => {
  const store = createStore()
  expect(selector.isPageNotFound(store.state)).toBe(false)
  store.dispatch(pageNotFound())
  await flushPromises()
  expect(selector.isPageNotFound(store.state)).toBe(true)
})
