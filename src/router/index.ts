import Main from '@/main.vue'
import PageNotFound from '@/pages/page_not_found/index.vue'
import { isTest } from '@/submodules/env'
import Vue from 'vue'
import Router from 'vue-router'

export default new Router({
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
