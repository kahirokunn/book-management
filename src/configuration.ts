import '@/firebase/index'
import { auth } from '@/firebase/index'
import { serviceContainer } from '@/inversify/config'
import { firebaseProviders } from '@/inversify/firebaseProviders'
import '@/plugins/vuetify'
import { setting } from 'typescript-fsa-vuex'
import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import { isProd } from './submodules/env'

Vue.use(Router)
Vue.use(Vuex)

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
