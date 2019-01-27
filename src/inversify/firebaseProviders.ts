import {Container} from 'inversify'
import IUserApplicationService from '@/boundary/userApplicationService/IUserApplicationService'
import IAuthApplicationService from '@/boundary/authApplicationService/IAuthApplicationService'
import IUserRepository from '@/domain/model/user/IUserRepository'
import UserApplicationService from '@/domain/application/userApplicationService/UserApplicationService'
import AuthApplicationService from '@/domain/application/authApplicationService/AuthApplicationService'
import FirebaseUserRepository from '@/firebaseDomainImpl/user/FirebaseUserRepository'
import IAuthDomainService from '@/domain/model/auth/IAuthDomainService'
import AuthDomainService from '@/firebaseDomainImpl/auth/AuthDomainService'
import ILogger from '@/drivers/ILogger'
import ConsoleLogger from '@/drivers/logger/ConsoleLogger'

export function firebaseProviders(container: Container): void {
  container.bind<ILogger>(ILogger).to(ConsoleLogger).inSingletonScope()

  container.bind<IUserApplicationService>(IUserApplicationService).to(UserApplicationService).inSingletonScope()
  container.bind<IUserRepository>(IUserRepository).to(FirebaseUserRepository).inSingletonScope()
  container.bind<IAuthDomainService>(IAuthDomainService).to(AuthDomainService).inSingletonScope()
  container.bind<IAuthApplicationService>(IAuthApplicationService).to(AuthApplicationService).inSingletonScope()
}
