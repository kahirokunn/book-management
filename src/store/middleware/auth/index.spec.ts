// tslint:disable ordered-imports
import '@/testConfiguration'
import { rejectStubProviders } from '@/provider/rejectStubProviders'
import { resolveStubProviders } from '@/provider/resolveStubProviders'
import { createStore, ClassBasedStoreOption } from '@/store/root'
import { Container } from 'inversify'
import { userLogin } from './action'
import selector from './selector'
import { storeModuleProvider } from '@/provider/storeModuleProvider'

test('ユーザーログインできる', async () => {
  const container = new Container()
  resolveStubProviders(container)
  storeModuleProvider(container)
  const store = createStore(container.get(ClassBasedStoreOption))
  expect(selector.user(store.state)).toBeNull()
  expect(selector.isInitialized(store.state)).toBe(false)
  expect(selector.isLoggedIn(store.state)).toBe(false)
  await store.dispatch(userLogin())
  expect(selector.user(store.state)).not.toBeNull()
  expect(selector.isInitialized(store.state)).toBe(true)
  expect(selector.isLoggedIn(store.state)).toBe(true)
})

test('ユーザーログインできない', async () => {
  const container = new Container()
  rejectStubProviders(container)
  storeModuleProvider(container)
  const store = createStore(container.get(ClassBasedStoreOption))
  expect(selector.user(store.state)).toBeNull()
  expect(selector.isInitialized(store.state)).toBe(false)
  expect(selector.isLoggedIn(store.state)).toBe(false)
  await store.dispatch(userLogin())
  expect(selector.user(store.state)).toBeNull()
  expect(selector.isInitialized(store.state)).toBe(true)
  expect(selector.isLoggedIn(store.state)).toBe(false)
})
