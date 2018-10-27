import '@babel/polyfill';
import Vue from 'vue';
import Vuex from 'vuex';
import Router from 'vue-router';

import {auth} from '@/firebase/index';

import './firebase/index';
import './plugins/vuetify';

Vue.use(Router);
Vue.use(Vuex);

auth().setPersistence(auth.Auth.Persistence.LOCAL);
