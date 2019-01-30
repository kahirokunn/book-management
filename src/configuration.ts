import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'

Vue.use(Router)
Vue.use(Vuex)

import {setting} from 'typescript-fsa-vuex'

import {auth} from '@/firebase/index'

import '@/firebase/index'
import '@/plugins/vuetify'
import {serviceContainer} from '@/inversify/config'
import {firebaseProviders} from '@/inversify/firebaseProviders'
import {isProd} from './submodules/env'

auth().setPersistence(auth.Auth.Persistence.LOCAL)
firebaseProviders(serviceContainer)

if (isProd()) {
  setting({
    addIdToSuffix: true,
  })
} else {
  setting({
    doNotCreateSameFluxType: true,
    addIdToSuffix: true,
  })
}
