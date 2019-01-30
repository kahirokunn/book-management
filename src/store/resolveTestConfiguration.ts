import 'reflect-metadata'
import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import Vuetify from 'vuetify'
import {serviceContainer} from '@/inversify/config'
import {stubProviders} from '@/inversify/resolveStubProviders'

Vue.use(Router)
Vue.use(Vuex)

stubProviders(serviceContainer)

Vue.use(Vuetify, {
  theme: {
    primary: '#424242',
    secondary: '#FF8A80',
    accent: '#BA68C8',
    error: '#f44336',
    warning: '#ffeb3b',
    info: '#2196f3',
    success: '#4caf50',
  },
})
