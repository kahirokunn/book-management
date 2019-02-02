import '@/rejectTestConfiguration'
import { createStore } from '@/store/root'
import { bookFactory } from '@/stub/domain/factory/IBook'
import flushPromises from 'flush-promises'
import { createBook } from './action'
import selector from './selector'


test('本の登録に失敗する', async () => {
  const store = createStore()
  expect(selector.isSendFailed(store.state)).toBe(false)
  expect(selector.isSending(store.state)).toBe(false)
  expect(selector.isSendSuccess(store.state)).toBe(false)
  store.dispatch(createBook({params: bookFactory()}))
  await flushPromises()
  expect(selector.isSending(store.state)).toBe(false)
  expect(selector.isSendFailed(store.state)).toBe(true)
  expect(selector.isSendSuccess(store.state)).toBe(false)
})
