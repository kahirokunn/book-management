import {Container} from 'inversify'
import IUserApplicationService from '@/boundary/userApplicationService/IUserApplicationService'
import IAuthApplicationService from '@/boundary/authApplicationService/IAuthApplicationService'
import UserApplicationResolveService from '@/stub/domain/app/userApplicationService/ResolveService'
import AuthApplicationResolveService from '@/stub/domain/app/authApplicationService/ResolveService'
import IUserStream from '@/query/user/IUserStream'
import UserStream from '@/stub/query/UserStream/ResolveStream'
import ILogger from '@/drivers/ILogger'
import BlankLogger from '@/drivers/logger/BlankLogger'

export function stubProviders(container: Container): void {
  // core
  container.bind(ILogger).to(BlankLogger).inSingletonScope()

  // query
  container.bind(IUserStream).to(UserStream).inSingletonScope()

  // application
  container.bind(IUserApplicationService).to(UserApplicationResolveService).inSingletonScope()
  container.bind(IAuthApplicationService).to(AuthApplicationResolveService).inSingletonScope()
}
