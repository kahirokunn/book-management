import Vue from 'vue'
import Router from 'vue-router'
import requiredVerifyEmail from './middlewares/requiredVerifyEmail'
import unLoggedIn from './middlewares/guards/unLoggedIn'
import loggedIn from './middlewares/guards/loggedIn'
import {isTest} from '@/submodules/env'
import Main from '@/main.vue'
import PageNotFound from '@/pages/page_not_found/index.vue'

const router =  new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Vue.extend({
        render: (h) => h(Main, [h('router-view')]),
      }),
      children: isTest() ? [] : [
        ...require('vue-auto-routing').default,
        {
          path: '*',
          component: PageNotFound,
        },
      ],
    },
  ],
})

requiredVerifyEmail(router)
unLoggedIn(router)
loggedIn(router)

export default router
