// tslint:disable ordered-imports
import '@/testConfiguration'
import { resolveStubProviders } from '@/provider/resolveStubProviders'
import { createStore, Store } from '@/store/root'
import { shallowMount } from '@vue/test-utils'
import { mapComputed } from './index'
import { Container } from 'inversify'

test('success', async () => {
  const container = new Container()
  resolveStubProviders(container)
  const store = createStore(container)
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
