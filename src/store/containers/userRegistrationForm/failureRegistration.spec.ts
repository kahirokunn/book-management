import '@/store/rejectTestConfiguration'
import flushPromises from 'flush-promises'
import authGetters from '@/store/middleware/auth/getters'
import {
  UserRegistrationAction,
  ToStandbyAction,
} from './boundaryAction'
import getters from './getters'
import store from '@/store/root'

test('そのメールアドレスは既に登録されています', async () => {
  expect(getters.isSending()).toBe(false)
  store.commit(new UserRegistrationAction({
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
  expect(getters.isSending()).toBe(true)
  expect(authGetters.user()).toBeUndefined()
  await flushPromises()
  expect(authGetters.user()).toBeUndefined()
  expect(getters.isSendFailed()).toBe(true)
  expect(getters.errorMessage()).toBe('そのメールアドレスは既に登録されています')
  store.commit(new ToStandbyAction())
  expect(getters.isSendFailed()).toBe(false)
})
