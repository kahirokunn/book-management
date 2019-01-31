import { notVerifyEmailRedirectPath } from '@/config/auth'
import selector from '@/store/middleware/auth/selector'
import { Store } from '@/store/root'
import Router from 'vue-router'

export function isNeedRedirect(path: string, state: Store['state']) {
  return path !== notVerifyEmailRedirectPath && selector.isLoggedIn(state) && !selector.isEmailVerified(state)
}

export default function requiredVerifyEmail(router: Router, state: Store['state']) {
  router.beforeEach((to, _, next) => {
    // メールアドレス認証されていない場合はメールアドレス認証をさせる
    if ((isNeedRedirect(to.path, state))) {
      return next(notVerifyEmailRedirectPath)
    }
    return next()
  })
}
