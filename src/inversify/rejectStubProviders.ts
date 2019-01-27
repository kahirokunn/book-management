import {Container} from 'inversify'
import IUserApplicationService from '@/boundary/userApplicationService/IUserApplicationService'
import IAuthApplicationService from '@/boundary/authApplicationService/IAuthApplicationService'
import UserApplicationRejectService from '@/stub/domain/app/userApplicationService/RejectService'
import AuthApplicationRejectService from '@/stub/domain/app/authApplicationService/RejectService'
import ILogger from '@/drivers/ILogger'
import BlankLogger from '@/drivers/logger/BlankLogger'

export function stubProviders(container: Container): void {
  container.bind(ILogger).to(BlankLogger).inSingletonScope()

  container.bind(IUserApplicationService).to(UserApplicationRejectService).inSingletonScope()
  container.bind(IAuthApplicationService).to(AuthApplicationRejectService).inSingletonScope()
}
