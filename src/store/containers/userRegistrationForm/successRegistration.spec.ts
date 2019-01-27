import '@/store/resolveTestConfiguration'
import flushPromises from 'flush-promises'
import authGetters from '@/store/middleware/auth/getters'
import {userRegistration} from './boundaryAction'
import getters from './getters'
import store from '@/store/root'

test('ユーザー登録できる', async () => {
  expect(getters.isSending()).toBe(false)
  store.commit(userRegistration({
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
  expect(authGetters.user()).not.toBeUndefined()
  expect(getters.isSendFailed()).toBe(false)
})
