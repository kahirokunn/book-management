import '@/configuration'
import router from '@/router/index'
import loggedIn from '@/router/middlewares/guards/loggedIn'
import unLoggedIn from '@/router/middlewares/guards/unLoggedIn'
import requiredVerifyEmail from '@/router/middlewares/requiredVerifyEmail'
import '@/stylesheets/main.scss'
import Vue from 'vue'
import { createStore } from './store/root'

const store = createStore()

requiredVerifyEmail(router, store.state)
unLoggedIn(router, store.state)
loggedIn(router, store.state)

Vue.config.productionTip = true

new Vue({
  router,
  store,
  render: (h) => h('router-view'),
}).$mount('#app')
