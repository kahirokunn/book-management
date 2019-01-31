import '@/rejectTestConfiguration'
import authSelector from '@/store/middleware/auth/selector'
import { createStore } from '@/store/root'
import flushPromises from 'flush-promises'
import {
  toStandby,
  userRegistration,
} from './action'
import selector from './selector'

test('そのメールアドレスは既に登録されています', async () => {
  const store = createStore()
  expect(selector.isSending(store.state)).toBe(false)
  store.dispatch(userRegistration({
    password: 'hello',
    iconFilepath: '',
    displayName: 't-tanaka',
    emailAddress: 'tanaka@gmail.com',
    firstName: '田中',
    familyName: '太郎',
    firstNameKana: 'タナカ',
    familyNameKana: 'タロウ',
    birthday: new Date(),
    hireDate: new Date(),
    gender: '男',
  }))
  expect(selector.isSending(store.state)).toBe(true)
  expect(authSelector.user(store.state)).toBeNull()
  await flushPromises()
  expect(authSelector.user(store.state)).toBeNull()
  expect(selector.isSendFailed(store.state)).toBe(true)
  expect(selector.errorMessage(store.state)).toBe('そのメールアドレスは既に登録されています')
  store.dispatch(toStandby())
  expect(selector.isSendFailed(store.state)).toBe(false)
})
