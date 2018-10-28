import Vue from 'vue';
import './configuration';
import store from './store/root';
import router from './router/index';
// import './plugins/element.js';
import './stylesheets/main.scss';


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h('router-view'),
}).$mount('#app');
