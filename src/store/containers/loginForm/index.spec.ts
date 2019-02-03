// tslint:disable ordered-imports
import '@/testConfiguration'
import { rejectStubProviders } from '@/provider/rejectStubProviders'
import { resolveStubProviders } from '@/provider/resolveStubProviders'
import authSelector from '@/store/middleware/auth/selector'
import { createStore, ClassBasedStoreOption } from '@/store/root'
import flushPromises from 'flush-promises'
import { Container } from 'inversify'
import { loginByEmailAndPassword } from './action'
import selector from './selector'
import { storeModuleProvider } from '@/provider/storeModuleProvider'

test('ログインできる', async () => {
  const container = new Container()
  resolveStubProviders(container)
  storeModuleProvider(container)
  const store = createStore(container.get(ClassBasedStoreOption))
  expect(selector.isFailed(store.state)).toBe(false)
  expect(selector.isSending(store.state)).toBe(false)
  store.dispatch(loginByEmailAndPassword({
    email: 'tanaka@gmail.com',
    password: 'tanakatarou',
  }))
  expect(selector.isSending(store.state)).toBe(true)
  expect(authSelector.user(store.state)).toBeNull()
  await flushPromises()
  expect(authSelector.user(store.state)).not.toBeNull()
  expect(selector.isFailed(store.state)).toBe(false)
})

test('ログイン失敗', async () => {
  const container = new Container()
  rejectStubProviders(container)
  storeModuleProvider(container)
  const store = createStore(container.get(ClassBasedStoreOption))
  expect(selector.isFailed(store.state)).toBe(false)
  expect(selector.isSending(store.state)).toBe(false)
  store.dispatch(loginByEmailAndPassword({
    email: 'tanaka@gmail.com',
    password: 'tanakatarou',
  }))
  expect(selector.isSending(store.state)).toBe(true)
  expect(authSelector.user(store.state)).toBeNull()
  await flushPromises()
  expect(authSelector.user(store.state)).toBeNull()
  expect(selector.isSending(store.state)).toBe(false)
  expect(selector.isFailed(store.state)).toBe(true)
})
