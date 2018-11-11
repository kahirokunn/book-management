import getters from '@/store/middleware/auth/getters'
import Router from 'vue-router'
import {notVerifyEmailRedirectPath} from '@/config/auth'

export function isNeedRedirect(path: string) {
  return path !== notVerifyEmailRedirectPath && getters.isLoggedIn() && !getters.isEmailVerified()
}

export default function requiredVerifyEmail(router: Router) {
  router.beforeEach((to, from, next) => {
    // メールアドレス認証されていない場合はメールアドレス認証をさせる
    if ((isNeedRedirect(to.path))) {
      return next(notVerifyEmailRedirectPath)
    }
    return next()
  })
}
