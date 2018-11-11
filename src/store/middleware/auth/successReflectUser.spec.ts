import '@/store/resolveTestConfiguration'
import flushPromises from 'flush-promises'

import {ReflectUserAction} from './boundaryAction'
import getters from './getters'
import store from '@/store/root'
import {userFactory} from '@/stub/domain/factory/IUser'

test('ログインできる', async () => {
  expect(getters.user()).toBeUndefined()
  expect(getters.isInitialized()).toBe(false)
  expect(getters.isLoggedIn()).toBe(false)
  store.commit(new ReflectUserAction(userFactory()))
  await flushPromises()
  expect(getters.user()).not.toBeUndefined()
  expect(getters.isInitialized()).toBe(false)
  expect(getters.isLoggedIn()).toBe(false)
})
