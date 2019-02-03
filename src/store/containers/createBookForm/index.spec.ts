// tslint:disable ordered-imports
import '@/testConfiguration'
import { rejectStubProviders } from '@/provider/rejectStubProviders'
import { resolveStubProviders } from '@/provider/resolveStubProviders'
import { createStore, ClassBasedStoreOption } from '@/store/root'
import { bookFactory } from '@/stub/domain/factory/IBook'
import flushPromises from 'flush-promises'
import { Container } from 'inversify'
import { createBook } from './action'
import selector from './selector'
import { storeModuleProvider } from '@/provider/storeModuleProvider'


test('本の登録に成功する', async () => {
  const container = new Container()
  resolveStubProviders(container)
  storeModuleProvider(container)
  const store = createStore(container.get(ClassBasedStoreOption))
  expect(selector.isSendFailed(store.state)).toBe(false)
  expect(selector.isSending(store.state)).toBe(false)
  expect(selector.isSendSuccess(store.state)).toBe(false)
  store.dispatch(createBook({params: bookFactory()}))
  expect(selector.isSending(store.state)).toBe(true)
  await flushPromises()
  expect(selector.isSending(store.state)).toBe(false)
  expect(selector.isSendFailed(store.state)).toBe(false)
  expect(selector.isSendSuccess(store.state)).toBe(true)
})

test('本の登録に失敗する', async () => {
  const container = new Container()
  rejectStubProviders(container)
  storeModuleProvider(container)
  const store = createStore(container.get(ClassBasedStoreOption))
  expect(selector.isSendFailed(store.state)).toBe(false)
  expect(selector.isSending(store.state)).toBe(false)
  expect(selector.isSendSuccess(store.state)).toBe(false)
  store.dispatch(createBook({params: bookFactory()}))
  await flushPromises()
  expect(selector.isSending(store.state)).toBe(false)
  expect(selector.isSendFailed(store.state)).toBe(true)
  expect(selector.isSendSuccess(store.state)).toBe(false)
})
