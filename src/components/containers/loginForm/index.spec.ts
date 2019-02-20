// tslint:disable ordered-imports
import '@/testConfiguration'
import { resolveStubProviders } from '@/provider/resolveStubProviders'
import selector from '@/store/containers/loginForm/selector'
import authSelector from '@/store/middleware/auth/selector'
import { createStore, ClassBasedStoreOption } from '@/store/root'
import { shallowMount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import { Container } from 'inversify'
import index from './index.vue'
import { createVueProvider } from '@/provider/createVueProvider'
import { storeModuleProvider } from '@/provider/storeModuleProvider'

test('login form container', async () => {
  const container = new Container()

  resolveStubProviders(container)
  storeModuleProvider(container)
  const store = createStore(container.get(ClassBasedStoreOption))

  selector.isFailed(store.state)
  selector.isSending(store.state)
  const wrapper = shallowMount(index, { store, provide: createVueProvider(container) })
  expect(wrapper.html()).toMatchSnapshot()
  expect(selector.isFailed(store.state)).toBe(false)
  expect(selector.isSending(store.state)).toBe(false)
  const vm = wrapper.vm as any
  vm.login({
    email: 'tanaka@gmail.com',
    password: 'tanakatarou',
  })
  expect(selector.isSending(store.state)).toBe(true)
  expect(authSelector.user(store.state)).toBeNull()
  await flushPromises()
  expect(authSelector.user(store.state)).not.toBeNull()
  expect(selector.isFailed(store.state)).toBe(false)
})
