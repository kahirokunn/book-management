// tslint:disable ordered-imports
import '@/testConfiguration'
import { rejectStubProviders } from '@/provider/rejectStubProviders'
import { resolveStubProviders } from '@/provider/resolveStubProviders'
import { createStore } from '@/store/root'
import flushPromises from 'flush-promises'
import { Container } from 'inversify'
import { userLogin } from './action'
import selector from './selector'

test('ユーザーログインできる', async () => {
  const container = new Container()
  resolveStubProviders(container)
  const store = createStore(container)
  expect(selector.user(store.state)).toBeNull()
  expect(selector.isInitialized(store.state)).toBe(false)
  expect(selector.isLoggedIn(store.state)).toBe(false)
  store.dispatch(userLogin())
  await flushPromises()
  expect(selector.user(store.state)).not.toBeNull()
  expect(selector.isInitialized(store.state)).toBe(true)
  expect(selector.isLoggedIn(store.state)).toBe(true)
})

test('ユーザーログインできない', async () => {
  const container = new Container()
  rejectStubProviders(container)
  const store = createStore(container)
  expect(selector.user(store.state)).toBeNull()
  expect(selector.isInitialized(store.state)).toBe(false)
  expect(selector.isLoggedIn(store.state)).toBe(false)
  store.dispatch(userLogin())
  await flushPromises()
  expect(selector.user(store.state)).toBeNull()
  expect(selector.isInitialized(store.state)).toBe(true)
  expect(selector.isLoggedIn(store.state)).toBe(false)
})
