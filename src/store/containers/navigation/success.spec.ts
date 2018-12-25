import '@/store/resolveTestConfiguration'
import {ToggleDrawer, CloseDrawer} from './boundaryAction'
import getters from './getters'
import store from '@/store/root'

test('ナビゲーションバーの開閉操作に成功', async () => {
  expect(getters.isOpen()).toBe(false)
  store.commit(new CloseDrawer())
  expect(getters.isOpen()).toBe(false)
  store.commit(new ToggleDrawer())
  expect(getters.isOpen()).toBe(true)
  store.commit(new ToggleDrawer())
  expect(getters.isOpen()).toBe(false)
  store.commit(new ToggleDrawer())
  expect(getters.isOpen()).toBe(true)
  store.commit(new CloseDrawer())
  expect(getters.isOpen()).toBe(false)
})
