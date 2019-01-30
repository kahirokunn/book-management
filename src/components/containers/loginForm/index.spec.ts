import '@/store/resolveTestConfiguration'
import flushPromises from 'flush-promises'
import authGetters from '@/store/middleware/auth/getters'
import { shallowMount } from '@vue/test-utils'
import getters from '@/store/containers/loginForm/getters'
import store from '@/store/root'
import index from './index.vue'

test('login form container', async () => {
  const wrapper = shallowMount(index, { store })
  expect(wrapper.html()).toMatchSnapshot()
  expect(getters.isFailed()).toBe(false)
  expect(getters.isSending()).toBe(false)
  const vm = wrapper.vm as any
  vm.login({
    email: 'tanaka@gmail.com',
    password: 'tanakatarou',
  })
  expect(getters.isSending()).toBe(true)
  expect(authGetters.user()).toBeUndefined()
  await flushPromises()
  expect(authGetters.user()).not.toBeUndefined()
  expect(getters.isFailed()).toBe(false)
})
