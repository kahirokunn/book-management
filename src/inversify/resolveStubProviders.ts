import {Container} from 'inversify'
import IUserApplicationService from '@/boundary/userApplicationService/IUserApplicationService'
import IAuthApplicationService from '@/boundary/authApplicationService/IAuthApplicationService'
import UserApplicationResolveService from '@/stub/domain/app/userApplicationService/ResolveService'
import AuthApplicationResolveService from '@/stub/domain/app/authApplicationService/ResolveService'
import ILogger from '@/drivers/ILogger'
import BlankLogger from '@/drivers/logger/BlankLogger'

export function stubProviders(container: Container): void {
  container.bind(ILogger).to(BlankLogger).inSingletonScope()

  container.bind(IUserApplicationService).to(UserApplicationResolveService).inSingletonScope()
  container.bind(IAuthApplicationService).to(AuthApplicationResolveService).inSingletonScope()
}
