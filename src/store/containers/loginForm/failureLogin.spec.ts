import '@/store/rejectTestConfiguration'
import flushPromises from 'flush-promises'
import authGetters from '@/store/middleware/auth/getters'

import {loginByEmailAndPassword} from './boundaryAction'
import getters from './getters'
import store from '@/store/root'

test('ログイン失敗', async () => {
  expect(getters.isFailed()).toBe(false)
  expect(getters.isSending()).toBe(false)
  store.commit(loginByEmailAndPassword({
    email: 'tanaka@gmail.com',
    password: 'tanakatarou',
  }))
  expect(getters.isSending()).toBe(true)
  expect(authGetters.user()).toBeUndefined()
  await flushPromises()
  expect(authGetters.user()).toBeUndefined()
  expect(getters.isSending()).toBe(false)
  expect(getters.isFailed()).toBe(true)
})
