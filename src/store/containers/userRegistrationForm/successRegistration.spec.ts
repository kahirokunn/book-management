import '@/store/resolveTestConfiguration'
import flushPromises from 'flush-promises'
import authSelector from '@/store/middleware/auth/selector'
import {userRegistration} from './action'
import selector from './selector'
import {createStore} from '@/store/root'

test('ユーザー登録できる', async () => {
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
  expect(authSelector.user(store.state)).toBeUndefined()
  await flushPromises()
  expect(authSelector.user(store.state)).not.toBeUndefined()
  expect(selector.isSendFailed(store.state)).toBe(false)
})
