import '@/store/resolveTestConfiguration'

import {PageNotFound} from './boundaryAction'
import getters from './getters'
import store from '@/store/root'

test('ユーザーログインできる', async () => {
  expect(getters.isPageNotFound()).toBe(false)
  store.commit(new PageNotFound())
  expect(getters.isPageNotFound()).toBe(true)
})
