import '@/store/resolveTestConfiguration'
import flushPromises from 'flush-promises'

import {updateProfile} from './action'
import {userFactory} from '@/stub/domain/factory/IUser'
import selector from './selector'
import {createStore} from '@/store/root'

test('ユーザープロフィールの更新に成功する', async () => {
  const store = createStore()
  expect(selector.isSendFailed(store.state)).toBe(false)
  expect(selector.isSending(store.state)).toBe(false)
  expect(selector.isSendSuccess(store.state)).toBe(false)
  store.dispatch(updateProfile({user: userFactory()}))
  expect(selector.isSending(store.state)).toBe(true)
  await flushPromises()
  expect(selector.isSending(store.state)).toBe(false)
  expect(selector.isSendFailed(store.state)).toBe(false)
  expect(selector.isSendSuccess(store.state)).toBe(true)
})
