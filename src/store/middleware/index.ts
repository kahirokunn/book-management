import auth from './auth'
import pageNotFound from './pageNotFound'

export type MiddlewareState = {
  auth: ReturnType<typeof auth.state>,
  pageNotFound: ReturnType<typeof pageNotFound.state>,
}

export default {
  modules: {
    auth,
    pageNotFound,
  },
}
