// tslint:disable ordered-imports
import '@/testConfiguration'
import { rejectStubProviders } from '@/provider/rejectStubProviders'
import { resolveStubProviders } from '@/provider/resolveStubProviders'
import authSelector from '@/store/middleware/auth/selector'
import { createStore, ClassBasedStoreOption } from '@/store/root'
import flushPromises from 'flush-promises'
import { Container } from 'inversify'
import { userRegistration, toStandby } from './action'
import selector from './selector'
import { storeModuleProvider } from '@/provider/storeModuleProvider'

test('ユーザー登録できる', async () => {
  const container = new Container()
  resolveStubProviders(container)
  storeModuleProvider(container)
  const store = createStore(container.get(ClassBasedStoreOption))

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
  expect(authSelector.user(store.state)).not.toBeNull()
  expect(selector.isSendFailed(store.state)).toBe(false)
})

test('そのメールアドレスは既に登録されています', async () => {
  const container = new Container()
  rejectStubProviders(container)
  storeModuleProvider(container)
  const store = createStore(container.get(ClassBasedStoreOption))
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
