import PageNotFound from '@/pages/page_not_found/index.vue'
import { isTest } from '@/submodules/env'
import { RouterOptions } from 'vue-router'

export default {
  mode: 'history',
  routes: isTest() ? [] : [
    ...require('vue-auto-routing').default,
    {
      path: '*',
      component: PageNotFound,
    },
  ],
} as RouterOptions
