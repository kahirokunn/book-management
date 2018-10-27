import Vue from 'vue';
import './configuration';
import store from './store/root';
import router from './router/index';
import {boot} from './bootstrap';
import './plugins/element.js';
import './stylesheets/main.scss';


Vue.config.productionTip = false;

boot();

new Vue({
  router,
  store,
  render: (h) => h('router-view'),
}).$mount('#app');
