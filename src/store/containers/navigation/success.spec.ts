import '@/store/resolveTestConfiguration'
import {
  toggleDrawer,
  closeDrawer,
} from './action'
import getters from './getters'
import store from '@/store/root'

test('ナビゲーションバーの開閉操作に成功', async () => {
  expect(getters.isOpen()).toBe(false)
  store.dispatch(closeDrawer())
  expect(getters.isOpen()).toBe(false)
  store.dispatch(toggleDrawer())
  expect(getters.isOpen()).toBe(true)
  store.dispatch(toggleDrawer())
  expect(getters.isOpen()).toBe(false)
  store.dispatch(toggleDrawer())
  expect(getters.isOpen()).toBe(true)
  store.dispatch(closeDrawer())
  expect(getters.isOpen()).toBe(false)
})
