import { notAuthRedirectPath } from '@/config/auth'
import selector from '@/store/middleware/auth/selector'
import { Store } from '@/store/root'
import Router from 'vue-router'

export function isNeedRedirect(path: string, state: Store['state']) {
  return path !== notAuthRedirectPath && selector.isLoggedIn(state) && !selector.isEmailVerified(state)
}

export function requiredVerifyEmailMiddleware(router: Router, state: Store['state']) {
  router.beforeEach((to, _, next) => {
    // メールアドレス認証されていない場合はメールアドレス認証をさせる
    if ((isNeedRedirect(to.path, state))) {
      return next(notAuthRedirectPath)
    }
    return next()
  })
}
