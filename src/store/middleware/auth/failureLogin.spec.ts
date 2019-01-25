import '@/store/rejectTestConfiguration'
import flushPromises from 'flush-promises'

import {userLogin} from './boundaryAction'
import getters from './getters'
import store from '@/store/root'

test('ユーザーログインできない', async () => {
  expect(getters.user()).toBeUndefined()
  expect(getters.isInitialized()).toBe(false)
  expect(getters.isLoggedIn()).toBe(false)
  store.commit(userLogin())
  await flushPromises()
  expect(getters.user()).toBeUndefined()
  expect(getters.isInitialized()).toBe(true)
  expect(getters.isLoggedIn()).toBe(false)
})
