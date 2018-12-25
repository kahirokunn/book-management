import 'reflect-metadata'
import '@/inversify/config'
import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import Vuetify from 'vuetify'
import {serviceContainer} from '@/inversify/config'
import {stubProviders} from '@/inversify/resolveStubProviders'

stubProviders(serviceContainer)

Vue.use(Router)
Vue.use(Vuex)

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
