// tslint:disable ordered-imports
import 'reflect-metadata'
import { serviceContainer } from '@/inversify/config'
import { stubProviders } from '@/inversify/rejectStubProviders'
import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'

Vue.use(Router)
Vue.use(Vuex)

stubProviders(serviceContainer)
