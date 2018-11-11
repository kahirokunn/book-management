import 'reflect-metadata'
import '@/inversify/config'
import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import {diContainer} from '@/inversify/config'
import {stubProviders} from '@/inversify/resolveStubProviders'

stubProviders(diContainer)

Vue.use(Router)
Vue.use(Vuex)
