import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import {debugSetting} from 'typescript-fsa-vuex'

import {auth} from '@/firebase/index'

import '@/firebase/index'
import '@/plugins/vuetify'
import {serviceContainer} from '@/inversify/config'
import {firebaseProviders} from '@/inversify/firebaseProviders'
import {isProd} from './submodules/env'

Vue.use(Router)
Vue.use(Vuex)

auth().setPersistence(auth.Auth.Persistence.LOCAL)
firebaseProviders(serviceContainer)

if (!isProd()) {
  debugSetting({
    doNotUseSamePrefix: true,
    doNotCreateSameFluxType: true,
  })
}
