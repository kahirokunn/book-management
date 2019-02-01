import {
  IAuthApplicationService,
} from '@/boundary/authApplicationService/IAuthApplicationService'
import { IBookApplicationService } from '@/boundary/bookApplicationService/IBookApplicationService'
import {
  IUserApplicationService,
} from '@/boundary/userApplicationService/IUserApplicationService'
import { AuthApplicationService } from '@/domain/application/authApplicationService/AuthApplicationService'
import { BookApplicationService } from '@/domain/application/bookApplicationService/BookApplicationService'
import { UserApplicationService } from '@/domain/application/userApplicationService/UserApplicationService'
import { IAuthDomainService } from '@/domain/model/auth/IAuthDomainService'
import { IAuthRepository } from '@/domain/model/auth/IAuthRepository'
import { IBookRepository } from '@/domain/model/book/IBookRepository'
import { IUserRepository } from '@/domain/model/user/IUserRepository'
import { ILogger } from '@/drivers/ILogger'
import { ConsoleLogger } from '@/drivers/logger/ConsoleLogger'
import { FirebaseAuthDomainService } from '@/firebaseImpl/domain/auth/FirebaseAuthDomainService'
import { FirebaseAuthRepository } from '@/firebaseImpl/domain/auth/FirebaseAuthRepository'
import { FirebaseBookRepository } from '@/firebaseImpl/domain/book/FirebaseBookRepository'
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
  container.bind(IBookApplicationService).to(BookApplicationService).inSingletonScope()

  // domain
  container.bind(IUserRepository).to(FirebaseUserRepository).inSingletonScope()
  container.bind(IAuthDomainService).to(FirebaseAuthDomainService).inSingletonScope()
  container.bind(IAuthRepository).to(FirebaseAuthRepository).inSingletonScope()
  container.bind(IBookRepository).to(FirebaseBookRepository).inSingletonScope()
}
