import '@/configuration'
import { prodProviders } from '@/provider/prodProviders'
import routerOptions from '@/router/index'
import { loggedInMiddleware } from '@/router/middlewares/guards/loggedIn'
import { unLoggedInMiddleware } from '@/router/middlewares/guards/unLoggedIn'
import { requiredVerifyEmailMiddleware } from '@/router/middlewares/requiredVerifyEmail'
import '@/stylesheets/main.scss'
import Vue from 'vue'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'
import { ClassBasedStoreOption, createStore } from './store/root'
import { isProd } from './submodules/env'

import { createVueProvider } from '@/provider/createVueProvider'
import { Container } from 'inversify'
import { storeModuleProvider } from './provider/storeModuleProvider'

const container = new Container()
prodProviders(container)
storeModuleProvider(container)

const router = new Router(routerOptions)
const store = createStore(container.get(ClassBasedStoreOption))
sync(store, router)

loggedInMiddleware(router, store.state)
unLoggedInMiddleware(router, store.state)
requiredVerifyEmailMiddleware(router, store.state)

Vue.config.productionTip = !isProd()

new Vue({
  provide: createVueProvider(container),
  router,
  store,
  render: (h) => h('router-view'),
}).$mount('#app')
