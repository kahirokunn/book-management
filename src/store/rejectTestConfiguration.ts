import 'reflect-metadata'
import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import {serviceContainer} from '@/inversify/config'
import {stubProviders} from '@/inversify/rejectStubProviders'

Vue.use(Router)
Vue.use(Vuex)

stubProviders(serviceContainer)
