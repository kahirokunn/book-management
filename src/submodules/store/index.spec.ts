import '@/resolveTestConfiguration'
import { createStore, Store } from '@/store/root'
import { shallowMount } from '@vue/test-utils'
import { mapComputed } from './index'

test('success', async () => {
  const store = createStore()
  const wrapper = shallowMount({
    template: '<div></div>',
    computed: mapComputed({
      test(state: Store['state']) {
        return state
      },
    }),
  }, { store })
  const {vm}: any = wrapper
  expect(vm.test).toBe(store.state)
})
