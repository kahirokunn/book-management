import authGetters from '@/store/middleware/auth/getters'
import Router from 'vue-router'
import {pathFormatter} from '@/submodules/url'

const whiteList = [
  '/user/login',
  '/user/registration',
].map((path) => pathFormatter(path))



export const redirectPath = whiteList[0]

export function isNeedRedirect(path: string) {
  // ホワイトリストへのアクセスは許可する
  if (whiteList.includes(pathFormatter((path)))) {
    return false
  }

  // 初期化前又はログイン済みの場合はホワイトリスト以外も許可する
  if (!authGetters.isInitialized() || authGetters.isLoggedIn()) {
    return false
  }

  return true
}

export default function requiredVerifyEmail(router: Router) {
  router.beforeEach((to, from, next) => {
    if (isNeedRedirect(to.path)) {
      return next(redirectPath)
    }
    return next()
  })
}
