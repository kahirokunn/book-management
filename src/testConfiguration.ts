// tslint:disable-next-line ordered-imports
import { Upload } from 'element-ui'
import 'reflect-metadata'
import Vue from 'vue'
import ProxyComponent from 'vue-proxy-component'
import Router from 'vue-router'
import Vuetify from 'vuetify'
import Vuex from 'vuex'

Vue.use(Router)
Vue.use(Vuex)

Vue.use(Vuetify, {
  theme: {
    primary: '#42b883',
    secondary: '#secondary',
    accent: '#BA68C8',
    error: '#f44336',
    warning: '#ffeb3b',
    info: '#2196f3',
    success: '#4caf50',
  },
})
Vue.use(ProxyComponent)
Vue.use(Upload)
