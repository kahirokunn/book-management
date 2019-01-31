import '@/resolveTestConfiguration'
import { createStore } from '@/store/root'
import {
  closeDrawer,
  toggleDrawer,
} from './action'
import selector from './selector'

test('ナビゲーションバーの開閉操作に成功', async () => {
  const store = createStore()
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
