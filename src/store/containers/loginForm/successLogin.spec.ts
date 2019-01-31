import '@/resolveTestConfiguration'
import authSelector from '@/store/middleware/auth/selector'
import { createStore } from '@/store/root'
import flushPromises from 'flush-promises'
import { loginByEmailAndPassword } from './action'
import selector from './selector'

test('ログインできる', async () => {
  const store = createStore()
  expect(selector.isFailed(store.state)).toBe(false)
  expect(selector.isSending(store.state)).toBe(false)
  store.dispatch(loginByEmailAndPassword({
    email: 'tanaka@gmail.com',
    password: 'tanakatarou',
  }))
  expect(selector.isSending(store.state)).toBe(true)
  expect(authSelector.user(store.state)).toBeNull()
  await flushPromises()
  expect(authSelector.user(store.state)).not.toBeNull()
  expect(selector.isFailed(store.state)).toBe(false)
})
