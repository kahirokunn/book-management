import authGetters from '@/store/middleware/auth/getters'
import Router from 'vue-router'

const blackList = [
  '/user/login',
  '/user/registration',
]

export const redirectPath = '/'

export function isNeedRedirect(path: string) {
  if (!authGetters.isInitialized() || !authGetters.isLoggedIn()) {
    return false
  }

  return blackList.includes(path)
}

export default function requiredVerifyEmail(router: Router) {
  router.beforeEach((to, from, next) => {
    // 認証されてる場合ブラックリストに行かせないように制限
    if (isNeedRedirect(to.path)) {
      return next(redirectPath)
    }
    return next()
  })
}
