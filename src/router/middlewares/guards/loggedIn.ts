import authGetters from '@/store/middleware/auth/getters'
import Router from 'vue-router'
import {pathFormatter} from '@/submodules/url'

const blackList = [
  '/user/login',
  '/user/registration',
].map((path) => pathFormatter(path))

export const redirectPath = '/'

export function isNeedRedirect(path: string) {
  if (!authGetters.isInitialized() || !authGetters.isLoggedIn()) {
    return false
  }

  return blackList.includes(pathFormatter(path))
}

export default function requiredVerifyEmail(router: Router) {
  router.beforeEach((to, _, next) => {
    // 認証されてる場合ブラックリストに行かせないように制限
    if (isNeedRedirect(to.path)) {
      return next(redirectPath)
    }
    return next()
  })
}
