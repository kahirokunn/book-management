import '@/store/resolveTestConfiguration'
import flushPromises from 'flush-promises'
import authGetters from '@/store/middleware/auth/getters'

import {LoginByEmailAndPasswordAction} from './boundaryAction'
import getters from './getters'
import store from '@/store/root'

test('ログインできる', async () => {
  expect(getters.isFailed()).toBe(false)
  expect(getters.isSending()).toBe(false)
  store.commit(new LoginByEmailAndPasswordAction({
    email: 'tanaka@gmail.com',
    password: 'tanakatarou',
  }))
  expect(getters.isSending()).toBe(true)
  expect(authGetters.user()).toBeUndefined()
  await flushPromises()
  expect(authGetters.user()).not.toBeUndefined()
  expect(getters.isFailed()).toBe(false)
})
