import '@/store/resolveTestConfiguration'
import flushPromises from 'flush-promises'

import {updateProfile} from './action'
import {userFactory} from '@/stub/domain/factory/IUser'
import getters from './getters'
import store from '@/store/root'

test('ユーザープロフィールの更新に成功する', async () => {
  expect(getters.isSendFailed()).toBe(false)
  expect(getters.isSending()).toBe(false)
  expect(getters.isSendSuccess()).toBe(false)
  store.dispatch(updateProfile({user: userFactory()}))
  expect(getters.isSending()).toBe(true)
  await flushPromises()
  expect(getters.isSending()).toBe(false)
  expect(getters.isSendFailed()).toBe(false)
  expect(getters.isSendSuccess()).toBe(true)
})
