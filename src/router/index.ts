import Router from 'vue-router'
import { createRouterLayout } from 'vue-router-layout'
import requiredVerifyEmail from './middlewares/requiredVerifyEmail'
import {isTest} from '@/submodules/env'

const RouterLayout = createRouterLayout((layout) => {
  return import('@/layouts/' + layout + '.vue')
})

const router =  new Router({
  mode: 'history',
  routes: isTest() ? [] : [
    {
      path: '/',
      component: RouterLayout,
      children: require('vue-auto-routing').default,
    },
  ],
})

requiredVerifyEmail(router)

export default router
