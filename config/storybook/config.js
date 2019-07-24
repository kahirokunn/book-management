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

addDecorator(() => {
  const container = new Container()
  resolveStubProviders(container)
  storeModuleProvider(container)
  const store = createStore(container.get(ClassBasedStoreOption))

  return {
    template: "<v-app><story/></v-app>",
    store,
    router: new Router()
  }
})

const req = require.context('../../src/stories', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
