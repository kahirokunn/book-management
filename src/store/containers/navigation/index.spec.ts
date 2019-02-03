// tslint:disable ordered-imports
import '@/testConfiguration'
import { resolveStubProviders } from '@/provider/resolveStubProviders'
import { createStore, ClassBasedStoreOption } from '@/store/root'
import { Container } from 'inversify'
import {
  closeDrawer,
  toggleDrawer,
} from './action'
import selector from './selector'
import { storeModuleProvider } from '@/provider/storeModuleProvider'

test('ナビゲーションバーの開閉操作に成功', async () => {
  const container = new Container()
  resolveStubProviders(container)
  storeModuleProvider(container)
  const store = createStore(container.get(ClassBasedStoreOption))
  expect(selector.isOpen(store.state)).toBe(false)
  store.dispatch(closeDrawer())
  expect(selector.isOpen(store.state)).toBe(false)
  store.dispatch(toggleDrawer())
  expect(selector.isOpen(store.state)).toBe(true)
  store.dispatch(toggleDrawer())
  expect(selector.isOpen(store.state)).toBe(false)
  store.dispatch(toggleDrawer())
  expect(selector.isOpen(store.state)).toBe(true)
  store.dispatch(closeDrawer())
  expect(selector.isOpen(store.state)).toBe(false)
})
