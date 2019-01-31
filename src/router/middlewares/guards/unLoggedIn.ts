import authSelector from '@/store/middleware/auth/selector'
import { Store } from '@/store/root'
import { pathFormatter } from '@/submodules/url'
import Router from 'vue-router'

const whiteList = [
  '/user/login',
  '/user/registration',
].map((path) => pathFormatter(path))

export const redirectPath = whiteList[0]

export function isNeedRedirect(path: string, state: Store['state']) {
  // ホワイトリストへのアクセスは許可する
  if (whiteList.includes(pathFormatter((path)))) {
    return false
  }

  // 初期化前又はログイン済みの場合はホワイトリスト以外も許可する
  if (!authSelector.isInitialized(state) || authSelector.isLoggedIn(state)) {
    return false
  }

  return true
}

export default function requiredVerifyEmail(router: Router, state: Store['state']) {
  router.beforeEach((to, _, next) => {
    if (isNeedRedirect(to.path, state)) {
      return next(redirectPath)
    }
    return next()
  })
}
