// tslint:disable ordered-imports
import '@/testConfiguration'
import { rejectStubProviders } from '@/provider/rejectStubProviders'
import { resolveStubProviders } from '@/provider/resolveStubProviders'
import { createStore, ClassBasedStoreOption } from '@/store/root'
import { userFactory } from '@/stub/domain/factory/IUser'
import flushPromises from 'flush-promises'
import { Container } from 'inversify'
import { updateProfile } from './action'
import selector from './selector'
import { storeModuleProvider } from '@/provider/storeModuleProvider'


test('ユーザープロフィールの更新に成功する', async () => {
  const container = new Container()
  resolveStubProviders(container)
  storeModuleProvider(container)
  const store = createStore(container.get(ClassBasedStoreOption))
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

test('ユーザープロフィールの更新に失敗する', async () => {
  const container = new Container()
  rejectStubProviders(container)
  storeModuleProvider(container)
  const store = createStore(container.get(ClassBasedStoreOption))
  expect(selector.isSendFailed(store.state)).toBe(false)
  expect(selector.isSending(store.state)).toBe(false)
  expect(selector.isSendSuccess(store.state)).toBe(false)

  store.dispatch(updateProfile({user: userFactory()}))
  expect(selector.isSending(store.state)).toBe(true)
  await flushPromises()

  expect(selector.isSending(store.state)).toBe(false)
  expect(selector.isSendFailed(store.state)).toBe(true)
  expect(selector.isSendSuccess(store.state)).toBe(false)
})
