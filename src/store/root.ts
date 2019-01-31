import Vuex from 'vuex'
import containers, { ContainersState } from './containers'
import middleware, { MiddlewareState } from './middleware'

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

export type Store = ReturnType<typeof createStore>
