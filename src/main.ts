import './configuration'
import './plugins/element'
import './stylesheets/main.scss'
import Vue from 'vue'
import store from './store/root'
import router from './router/index'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h('router-view'),
}).$mount('#app')
