// tslint:disable ordered-imports
import '@/testConfiguration'
import { resolveStubProviders } from '@/provider/resolveStubProviders'
import { createStore, ClassBasedStoreOption } from '@/store/root'
import { Container } from 'inversify'
import { pageNotFound } from './action'
import selector from './selector'
import { storeModuleProvider } from '@/provider/storeModuleProvider'

test('pageNotFound状態がtrueになる', async () => {
  const container = new Container()
  resolveStubProviders(container)
  storeModuleProvider(container)
  const store = createStore(container.get(ClassBasedStoreOption))
  expect(selector.isPageNotFound(store.state)).toBe(false)
  await store.dispatch(pageNotFound())
  expect(selector.isPageNotFound(store.state)).toBe(true)
})
