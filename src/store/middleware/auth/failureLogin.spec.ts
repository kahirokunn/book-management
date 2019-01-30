import '@/store/rejectTestConfiguration'
import flushPromises from 'flush-promises'

import {userLogin} from './action'
import selector from './selector'
import {createStore} from '@/store/root'

test('ユーザーログインできない', async () => {
  const store = createStore()
  expect(selector.user(store.state)).toBeUndefined()
  expect(selector.isInitialized(store.state)).toBe(false)
  expect(selector.isLoggedIn(store.state)).toBe(false)
  store.dispatch(userLogin())
  await flushPromises()
  expect(selector.user(store.state)).toBeUndefined()
  expect(selector.isInitialized(store.state)).toBe(true)
  expect(selector.isLoggedIn(store.state)).toBe(false)
})
