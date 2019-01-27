import {Container} from 'inversify'
import IUserApplicationService from '@/boundary/userApplicationService/IUserApplicationService'
import IAuthApplicationService from '@/boundary/authApplicationService/IAuthApplicationService'
import UserApplicationRejectService from '@/stub/domain/app/userApplicationService/RejectService'
import AuthApplicationRejectService from '@/stub/domain/app/authApplicationService/RejectService'
import IUserStream from '@/query/user/IUserStream'
import UserStream from '@/stub/query/UserStream/RejectStream'
import ILogger from '@/drivers/ILogger'
import BlankLogger from '@/drivers/logger/BlankLogger'

export function stubProviders(container: Container): void {
  // core
  container.bind(ILogger).to(BlankLogger).inSingletonScope()

  // query
  container.bind(IUserStream).to(UserStream).inSingletonScope()

  // application
  container.bind(IUserApplicationService).to(UserApplicationRejectService).inSingletonScope()
  container.bind(IAuthApplicationService).to(AuthApplicationRejectService).inSingletonScope()
}
