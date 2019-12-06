import { inject, injectable } from 'inversify'
import { Route } from 'vue-router'
import Vuex, { Module, StoreOptions } from 'vuex'
import { ContainerModule, ContainersState } from './containers'
import { MiddlewareModule, MiddlewareState } from './middleware'

export interface RootState {
  middleware: MiddlewareState
  containers: ContainersState
  route: Route
}

@injectable()
export class ClassBasedStoreOption {
  constructor(
    @inject(ContainerModule)
    private readonly containerModule: ContainerModule,
    @inject(MiddlewareModule)
    private readonly middlewareModule: MiddlewareModule,
  ) { }

  get modules() {
    return {
      middleware: {
        modules: this.middlewareModule,
      } as object as Module<any, RootState>,
      containers: {
        modules: this.containerModule,
      } as object as Module<any, RootState>,
    }
  }
}

export function createStore(options: StoreOptions<RootState>) {
  return new Vuex.Store<RootState>(options)
}

export type Store = ReturnType<typeof createStore>
