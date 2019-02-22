import { inject, injectable } from 'inversify'
import { AuthModule } from './auth'
import { PageNotFoundModule } from './pageNotFound'
import { RouterModule } from './router'

export type MiddlewareState = {
  auth: ReturnType<AuthModule['state']>
  pageNotFound: ReturnType<PageNotFoundModule['state']>,
  router: ReturnType<RouterModule['state']>,
}

@injectable()
export class MiddlewareModule {
  constructor(
    @inject(AuthModule)
    public readonly auth: AuthModule,
    @inject(PageNotFoundModule)
    public readonly pageNotFound: PageNotFoundModule,
    @inject(RouterModule)
    public readonly router: RouterModule,
  ) {}
}
