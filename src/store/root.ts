import Vuex from 'vuex'
import middleware, {MiddlewareState} from './middleware'
import containers, {ContainersState} from './containers'

interface RootState {
  middleware: MiddlewareState
  containers: ContainersState
}

export function createStore() {
  return new Vuex.Store<RootState>({
    modules: {
      middleware,
      containers,
    },
  })
}

export default createStore()
