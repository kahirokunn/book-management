import { Container } from 'inversify'
import Vuex from 'vuex'
import { containerModuleCreator, ContainersState } from './containers'
import { middlewareModuleCreator, MiddlewareState } from './middleware'

interface RootState {
  middleware: MiddlewareState
  containers: ContainersState
}

export function createStore(context: Container) {
  return new Vuex.Store<RootState>({
    modules: {
      middleware: {
        modules: middlewareModuleCreator(context),
      },
      containers: {
        modules: containerModuleCreator(context),
      },
    },
  })
}

export type Store = ReturnType<typeof createStore>
