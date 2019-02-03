import '@/configuration'
import { firebaseProviders } from '@/provider/firebaseProviders'
import router from '@/router/index'
import { loggedInMiddleware } from '@/router/middlewares/guards/loggedIn'
import { unLoggedInMiddleware } from '@/router/middlewares/guards/unLoggedIn'
import { requiredVerifyEmailMiddleware } from '@/router/middlewares/requiredVerifyEmail'
import '@/stylesheets/main.scss'
import Vue from 'vue'
import { ClassBasedStoreOption, createStore } from './store/root'
import { isProd } from './submodules/env'

import { Container } from 'inversify'
import { storeModuleProvider } from './provider/storeModuleProvider'

const container = new Container()
firebaseProviders(container)
storeModuleProvider(container)

const store = createStore(container.get(ClassBasedStoreOption))

loggedInMiddleware(router, store.state)
unLoggedInMiddleware(router, store.state)
requiredVerifyEmailMiddleware(router, store.state)

Vue.config.productionTip = !isProd()

new Vue({
  router,
  store,
  render: (h) => h('router-view'),
}).$mount('#app')
