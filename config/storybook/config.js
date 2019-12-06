/* eslint-disable import/no-extraneous-dependencies */
import {
  addDecorator
} from '@storybook/vue'
import {
  configure
} from '@storybook/vue'
import '@/testConfiguration'
import "vuetify/dist/vuetify.css"
import Router from 'vue-router'
import {
  storeModuleProvider
} from '@/provider/storeModuleProvider'
import {
  resolveStubProviders
} from '@/provider/resolveStubProviders'

import {
  Container
} from 'inversify'
import {
  createStore,
  ClassBasedStoreOption
} from '@/store/root'
import {
  userLogin,
} from '@/store/middleware/auth/action'
import {
  createVueProvider
} from '@/provider/createVueProvider'
import {
  Upload
} from 'element-ui'
import ProxyComponent from 'vue-proxy-component'
import Vue from 'vue'

Vue.use(ProxyComponent)
Vue.use(Upload)

addDecorator(() => {
  const container = new Container()
  resolveStubProviders(container)
  storeModuleProvider(container)
  const store = createStore(container.get(ClassBasedStoreOption))
  store.dispatch(userLogin())

  return {
    template: "<v-app><story/></v-app>",
    provide: createVueProvider(container),
    store,
    router: new Router()
  }
})

const req = require.context('../../src/stories', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
