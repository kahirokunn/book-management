import '@/store/resolveTestConfiguration'
import {
  toggleDrawer,
  closeDrawer,
} from './boundaryAction'
import getters from './getters'
import store from '@/store/root'

test('ナビゲーションバーの開閉操作に成功', async () => {
  expect(getters.isOpen()).toBe(false)
  store.commit(closeDrawer())
  expect(getters.isOpen()).toBe(false)
  store.commit(toggleDrawer())
  expect(getters.isOpen()).toBe(true)
  store.commit(toggleDrawer())
  expect(getters.isOpen()).toBe(false)
  store.commit(toggleDrawer())
  expect(getters.isOpen()).toBe(true)
  store.commit(closeDrawer())
  expect(getters.isOpen()).toBe(false)
})
