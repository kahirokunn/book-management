import authSelector from '@/store/middleware/auth/selector'
import { Store } from '@/store/root'
import { pathFormatter } from '@/submodules/url'
import Router from 'vue-router'

const blackList = [
  '/user/login',
  '/user/registration',
].map((path) => pathFormatter(path))

export const redirectPath = '/'

export function isNeedRedirect(path: string, state: Store['state']) {
  if (!authSelector.isInitialized(state) || !authSelector.isLoggedIn(state)) {
    return false
  }

  return blackList.includes(pathFormatter(path))
}

export function loggedInMiddleware(router: Router, state: Store['state']) {
  router.beforeEach((to, _, next) => {
    // 認証されてる場合ブラックリストに行かせないように制限
    if (isNeedRedirect(to.path, state)) {
      return next(redirectPath)
    }
    return next()
  })
}
