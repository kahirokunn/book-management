import {
  IAuthApplicationService,
} from '@/boundary/authApplicationService/IAuthApplicationService'
import { IBookApplicationService } from '@/boundary/bookApplicationService/IBookApplicationService'
import {
  IUserApplicationService,
} from '@/boundary/userApplicationService/IUserApplicationService'
import { ILogger } from '@/drivers/ILogger'
import { BlankLogger } from '@/drivers/logger/BlankLogger'
import { UserBLoC } from '@/query/bloc/user/UserBLoC'
import { IUserObservableRepository } from '@/query/observableRepository/user/IUserObservableRepository'
import {
  AuthApplicationService,
} from '@/stub/domain/app/authApplicationService/RejectService'
import { BookApplicationService } from '@/stub/domain/app/bookApplicationService/RejectService'
import {
  UserApplicationService,
} from '@/stub/domain/app/userApplicationService/RejectService'
import { UserObservableRepository } from '@/stub/query/observableRepository/UserObservableRepository/RejectRepository'
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
  container.bind(IBookApplicationService).to(BookApplicationService).inSingletonScope()
}
