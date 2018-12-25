import {Container} from 'inversify'
import IUserApplicationService from '@/boundary/userApplicationService/IUserApplicationService'
import IAuthApplicationService from '@/boundary/authApplicationService/IAuthApplicationService'
import IUserRepository from '@/domain/model/user/IUserRepository'
import UserApplicationService from '@/domain/application/userApplicationService/UserApplicationService'
import AuthApplicationService from '@/domain/application/authApplicationService/AuthApplicationService'
import FirebaseUserRepository from '@/domain/model/user/FirebaseUserRepository'
import IAuthDomainService from '@/domain/model/auth/IAuthDomainService'
import AuthDomainService from '@/domain/model/auth/AuthDomainService'
import ILogger from '@/drivers/ILogger'
import ConsoleLogger from '@/drivers/logger/ConsoleLogger'

export function firebaseProviders(container: Container): void {
  container.bind<IUserApplicationService>(IUserApplicationService).to(UserApplicationService)
  container.bind<IUserRepository>(IUserRepository).to(FirebaseUserRepository)
  container.bind<IAuthDomainService>(IAuthDomainService).to(AuthDomainService)
  container.bind<IAuthApplicationService>(IAuthApplicationService).to(AuthApplicationService)

  container.bind<ILogger>(ILogger).to(ConsoleLogger)
}
