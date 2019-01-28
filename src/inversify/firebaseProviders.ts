import {Container} from 'inversify'
import IUserApplicationService from '@/boundary/userApplicationService/IUserApplicationService'
import IAuthApplicationService from '@/boundary/authApplicationService/IAuthApplicationService'
import IUserRepository from '@/domain/model/user/IUserRepository'
import UserApplicationService from '@/domain/application/userApplicationService/UserApplicationService'
import AuthApplicationService from '@/domain/application/authApplicationService/AuthApplicationService'
import FirebaseUserRepository from '@/firebaseImpl/domain/user/FirebaseUserRepository'
import IAuthDomainService from '@/domain/model/auth/IAuthDomainService'
import AuthDomainService from '@/firebaseImpl/domain/auth/AuthDomainService'
import IUserStream from '@/query/user/IUserStream'
import UserStream from '@/firebaseImpl/query/UserStream'
import ILogger from '@/drivers/ILogger'
import ConsoleLogger from '@/drivers/logger/ConsoleLogger'

export function firebaseProviders(container: Container): void {
  // core
  container.bind(ILogger).to(ConsoleLogger).inSingletonScope()

  // query
  container.bind(IUserStream).to(UserStream).inSingletonScope()

  // application
  container.bind(IUserApplicationService).to(UserApplicationService).inSingletonScope()
  container.bind(IAuthApplicationService).to(AuthApplicationService).inSingletonScope()

  // domain
  container.bind(IUserRepository).to(FirebaseUserRepository).inSingletonScope()
  container.bind(IAuthDomainService).to(AuthDomainService).inSingletonScope()
}
