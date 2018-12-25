import 'reflect-metadata'
import '@/inversify/config'
import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import {serviceContainer} from '@/inversify/config'
import {stubProviders} from '@/inversify/rejectStubProviders'

stubProviders(serviceContainer)

Vue.use(Router)
Vue.use(Vuex)
