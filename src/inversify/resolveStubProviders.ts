import {
  IAuthApplicationService,
} from '@/boundary/authApplicationService/IAuthApplicationService'
import {
  IUserApplicationService,
} from '@/boundary/userApplicationService/IUserApplicationService'
import { ILogger } from '@/drivers/ILogger'
import { BlankLogger } from '@/drivers/logger/BlankLogger'
import { IUserBLoC } from '@/query/user/IUserBLoC'
import { AuthApplicationService } from '@/stub/domain/app/authApplicationService/ResolveService'
import { UserApplicationService } from '@/stub/domain/app/userApplicationService/ResolveService'
import { UserBLoC } from '@/stub/query/UserBLoC/ResolveBLoC'
import { Container } from 'inversify'

export function stubProviders(container: Container): void {
  // core
  container.bind(ILogger).to(BlankLogger).inSingletonScope()

  // query
  container.bind(IUserBLoC).to(UserBLoC).inSingletonScope()

  // application
  container.bind(IUserApplicationService).to(UserApplicationService).inSingletonScope()
  container.bind(IAuthApplicationService).to(AuthApplicationService).inSingletonScope()
}
