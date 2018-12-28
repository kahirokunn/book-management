import authGetters from '@/store/middleware/auth/getters'
import Router from 'vue-router'

const whiteList = [
  '/user/login',
  '/user/registration',
]

export const redirectPath = whiteList[0]

export function isNeedRedirect(path: string) {
  if (!authGetters.isInitialized() || authGetters.isLoggedIn()) {
    return false
  }

  return !whiteList.includes(path)
}

export default function requiredVerifyEmail(router: Router) {
  router.beforeEach((to, from, next) => {
    // 認証されてない場合ホワイトリスト以外に行かせないように制限
    if (isNeedRedirect(to.path)) {
      return next(redirectPath)
    }
    return next()
  })
}
