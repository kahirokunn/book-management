import { inject, injectable } from 'inversify'
import { AuthModule } from './auth'
import { PageNotFoundModule } from './pageNotFound'

export type MiddlewareState = {
  auth: ReturnType<AuthModule['state']>
  pageNotFound: ReturnType<PageNotFoundModule['state']>,
}

@injectable()
export class MiddlewareModule {
  constructor(
    @inject(AuthModule)
    public readonly auth: AuthModule,
    @inject(PageNotFoundModule)
    public readonly pageNotFound: PageNotFoundModule,
  ) {}
}
