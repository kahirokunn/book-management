// tslint:disable ordered-imports
import '@/testConfiguration'
import Vue from 'vue'
import { resolveStubProviders } from '@/provider/resolveStubProviders'
import { createStore, ClassBasedStoreOption } from '@/store/root'
import { shallowMount } from '@vue/test-utils'
import { mapComputed } from './index'
import { Container } from 'inversify'
import { storeModuleProvider } from '@/provider/storeModuleProvider'
import selector1 from '@/store/containers/bookList/selector'
import selector2 from '@/store/containers/changeUserProfileForm/selector'

test('success', async () => {
  const container = new Container()
  resolveStubProviders(container)
  storeModuleProvider(container)
  const store = createStore(container.get(ClassBasedStoreOption))

  // type safe
  const testComponent = Vue.extend({
    template: '<div></div>',
    computed: {
      ...mapComputed(selector1,
        selector2,
        {
          test0(state) {
            return state
          },
          test1(state) {
            return state.containers.bookList.books
          },
          test2(state) {
            return state.containers.bookList.books
          },
          test3() {
            return 'hello world'
          },
        },
      ),
      useMappedBooks() {
        return this.books
      },
      useMappedTest1() {
        return this.test1
      },
      useMappedTest2() {
        return this.test2
      },
      useMappedTest3() {
        return this.test3
      },
    },
  })
  const wrapper = shallowMount(testComponent, { store })
  const {vm}: any = wrapper
  expect(vm.test).toBe(store.state)
  expect(vm.books()).toBe(selector1.books(store.state))
})
