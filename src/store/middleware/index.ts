import { IAuthApplicationService } from '@/boundary/authApplicationService/IAuthApplicationService'
import { UserBLoC } from '@/query/bloc/user/UserBLoC'
import { Container } from 'inversify'
import { authModuleCreator } from './auth'
import { pageNotFoundModuleCreator } from './pageNotFound'

export type MiddlewareState = {
  auth: ReturnType<ReturnType<typeof authModuleCreator>['state']>,
  pageNotFound: ReturnType<ReturnType<typeof pageNotFoundModuleCreator>['state']>,
}

export function middlewareModuleCreator(context: Container) {
  return {
    auth: authModuleCreator(
      context.get(IAuthApplicationService),
      context.get(UserBLoC),
    ),
    pageNotFound: pageNotFoundModuleCreator(),
  }
}
