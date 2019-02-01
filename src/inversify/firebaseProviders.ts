import {
  IAuthApplicationService,
} from '@/boundary/authApplicationService/IAuthApplicationService'
import {
  IUserApplicationService,
} from '@/boundary/userApplicationService/IUserApplicationService'
import { AuthApplicationService } from '@/domain/application/authApplicationService/AuthApplicationService'
import { UserApplicationService } from '@/domain/application/userApplicationService/UserApplicationService'
import { IAuthDomainService } from '@/domain/model/auth/IAuthDomainService'
import { IAuthRepository } from '@/domain/model/auth/IAuthRepository'
import { IUserRepository } from '@/domain/model/user/IUserRepository'
import { ILogger } from '@/drivers/ILogger'
import { ConsoleLogger } from '@/drivers/logger/ConsoleLogger'
import { AuthDomainService } from '@/firebaseImpl/domain/auth/AuthDomainService'
import { AuthRepository } from '@/firebaseImpl/domain/auth/AuthRepository'
import { FirebaseUserRepository } from '@/firebaseImpl/domain/user/FirebaseUserRepository'
import { UserBLoC } from '@/firebaseImpl/query/UserBLoC'
import { IUserBLoC } from '@/query/user/IUserBLoC'
import { Container } from 'inversify'

export function firebaseProviders(container: Container): void {
  // core
  container.bind(ILogger).to(ConsoleLogger).inSingletonScope()

  // query
  container.bind(IUserBLoC).to(UserBLoC).inSingletonScope()

  // application
  container.bind(IUserApplicationService).to(UserApplicationService).inSingletonScope()
  container.bind(IAuthApplicationService).to(AuthApplicationService).inSingletonScope()

  // domain
  container.bind(IUserRepository).to(FirebaseUserRepository).inSingletonScope()
  container.bind(IAuthDomainService).to(AuthDomainService).inSingletonScope()
  container.bind(IAuthRepository).to(AuthRepository).inSingletonScope()
}
