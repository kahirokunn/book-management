import {
  IAuthApplicationService,
} from '@/boundary/authApplicationService/IAuthApplicationService'
import {
  IUserApplicationService,
} from '@/boundary/userApplicationService/IUserApplicationService'
import { ILogger } from '@/drivers/ILogger'
import { BlankLogger } from '@/drivers/logger/BlankLogger'
import { UserBLoC } from '@/query/bloc/user/UserBLoC'
import { IUserObservableRepository } from '@/query/observableRepository/user/IUserObservableRepository'
import { AuthApplicationService } from '@/stub/domain/app/authApplicationService/ResolveService'
import { UserApplicationService } from '@/stub/domain/app/userApplicationService/ResolveService'
import { UserObservableRepository } from '@/stub/query/observableRepository/UserObservableRepository/ResolveRepository'
import { Container } from 'inversify'

export function stubProviders(container: Container): void {
  // core
  container.bind(ILogger).to(BlankLogger).inSingletonScope()

  // query
  container.bind(UserBLoC).to(UserBLoC).inSingletonScope()
  container.bind(IUserObservableRepository).to(UserObservableRepository).inSingletonScope()

  // application
  container.bind(IUserApplicationService).to(UserApplicationService).inSingletonScope()
  container.bind(IAuthApplicationService).to(AuthApplicationService).inSingletonScope()
}
