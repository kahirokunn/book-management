// tslint:disable ordered-imports
import '@/testConfiguration'
import { resolveStubProviders } from '@/provider/resolveStubProviders'
import { createStore } from '@/store/root'
import flushPromises from 'flush-promises'
import { Container } from 'inversify'
import { pageNotFound } from './action'
import selector from './selector'

test('pageNotFound状態がtrueになる', async () => {
  const container = new Container()
  resolveStubProviders(container)
  const store = createStore(container)
  expect(selector.isPageNotFound(store.state)).toBe(false)
  store.dispatch(pageNotFound())
  await flushPromises()
  expect(selector.isPageNotFound(store.state)).toBe(true)
})
