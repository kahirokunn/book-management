// tslint:disable ordered-imports
import '@/testConfiguration'
import { resolveStubProviders } from '@/provider/resolveStubProviders'
import { createStore, Store, ClassBasedStoreOption } from '@/store/root'
import { shallowMount } from '@vue/test-utils'
import { mapComputed } from './index'
import { Container } from 'inversify'
import { storeModuleProvider } from '@/provider/storeModuleProvider'

test('success', async () => {
  const container = new Container()
  resolveStubProviders(container)
  storeModuleProvider(container)
  const store = createStore(container.get(ClassBasedStoreOption))
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
