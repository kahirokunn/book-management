import { IAuthApplicationService } from '@/boundary/authApplicationService/IAuthApplicationService'
import { IBookApplicationService } from '@/boundary/bookApplicationService/IBookApplicationService'
import {
  IUserApplicationService,
} from '@/boundary/userApplicationService/IUserApplicationService'
import { ILogger } from '@/drivers/ILogger'
import { BlankLogger } from '@/drivers/logger/BlankLogger'
import { UserBLoC } from '@/query/bloc/user/UserBLoC'
import { IUserObservableRepository } from '@/query/observableRepository/user/IUserObservableRepository'
import { Logger } from '@/serviceLocator/Logger'
import {
  AuthApplicationService,
} from '@/stub/domain/app/authApplicationService/RejectService'
import { BookApplicationService } from '@/stub/domain/app/bookApplicationService/RejectService'
import {
  UserApplicationService,
} from '@/stub/domain/app/userApplicationService/RejectService'
import { UserObservableRepository } from '@/stub/query/observableRepository/UserObservableRepository/RejectRepository'
import { Container } from 'inversify'

export function rejectStubProviders(container: Container): void {
  // core
  container.bind(ILogger).to(BlankLogger)
  Logger.initialize(container.get(ILogger))

  // query
  container.bind(UserBLoC).to(UserBLoC)
  container.bind(IUserObservableRepository).to(UserObservableRepository)

  // application
  container.bind(IUserApplicationService).to(UserApplicationService)
  container.bind(IAuthApplicationService).to(AuthApplicationService)
  container.bind(IBookApplicationService).to(BookApplicationService)
}
