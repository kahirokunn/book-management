import '@/store/resolveTestConfiguration'
import { shallowMount } from '@vue/test-utils'
import index from './index.vue'

test('login form container', () => {
  const wrapper = shallowMount(index)
  expect(wrapper.html()).toMatchSnapshot()
})
