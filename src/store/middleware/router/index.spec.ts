// tslint:disable ordered-imports
import '@/testConfiguration'
import { resolveStubProviders } from '@/provider/resolveStubProviders'
import { createStore, ClassBasedStoreOption } from '@/store/root'
import { Container } from 'inversify'
import { changeRoute } from './action'
import selector from './selector'
import { storeModuleProvider } from '@/provider/storeModuleProvider'

test('change routeできる', async () => {
  const container = new Container()
  resolveStubProviders(container)
  storeModuleProvider(container)
  const store = createStore(container.get(ClassBasedStoreOption))
  expect(selector.location(store.state)).toBe(null)
  await store.dispatch(changeRoute('/'))
  expect(selector.location(store.state)).toBe('/')
})
