import { IAuthApplicationService } from '@/boundary/authApplicationService/IAuthApplicationService'
import { IBookApplicationService } from '@/boundary/bookApplicationService/IBookApplicationService'
import { IUserApplicationService } from '@/boundary/userApplicationService/IUserApplicationService'
import { AuthApplicationService } from '@/domain/application/authApplicationService/AuthApplicationService'
import { BookApplicationService } from '@/domain/application/bookApplicationService/BookApplicationService'
import { UserApplicationService } from '@/domain/application/userApplicationService/UserApplicationService'
import { IAuthDomainService } from '@/domain/model/auth/IAuthDomainService'
import { IAuthRepository } from '@/domain/model/auth/IAuthRepository'
import IBookFactory from '@/domain/model/book/IBookFactory'
import { IBookRepository } from '@/domain/model/book/IBookRepository'
import { IUserRepository } from '@/domain/model/user/IUserRepository'
import { ILogger } from '@/drivers/ILogger'
import { ConsoleLogger } from '@/drivers/logger/ConsoleLogger'
import { FirebaseAuthDomainService } from '@/firebaseImpl/domain/auth/FirebaseAuthDomainService'
import { FirebaseAuthRepository } from '@/firebaseImpl/domain/auth/FirebaseAuthRepository'
import BookFactory from '@/firebaseImpl/domain/book/BookFactory'
import { FirebaseBookRepository } from '@/firebaseImpl/domain/book/FirebaseBookRepository'
import { FirebaseUserRepository } from '@/firebaseImpl/domain/user/FirebaseUserRepository'
import { BookObservableRepository } from '@/firebaseImpl/query/observableRepository/BookObservableRepository'
import { UserObservableRepository } from '@/firebaseImpl/query/observableRepository/UserObservableRepository'
import { BookBLoC } from '@/query/bloc/book/BookListBLoC'
import { UserBLoC } from '@/query/bloc/user/UserBLoC'
import { IBookObservableRepository } from '@/query/observableRepository/book/IBookObservableRepository'
import { IUserObservableRepository } from '@/query/observableRepository/user/IUserObservableRepository'
import { Logger } from '@/serviceLocator/Logger'
import { Container } from 'inversify'

export function firebaseProviders(container: Container): void {
  // core
  container.bind(ILogger).to(ConsoleLogger)
  Logger.initialize(container.get(ILogger))

  // query
  container.bind(UserBLoC).to(UserBLoC)
  container.bind(BookBLoC).to(BookBLoC)
  container.bind(IBookObservableRepository).to(BookObservableRepository)
  container.bind(IUserObservableRepository).to(UserObservableRepository)

  // application
  container.bind(IUserApplicationService).to(UserApplicationService)
  container.bind(IAuthApplicationService).to(AuthApplicationService)
  container.bind(IBookApplicationService).to(BookApplicationService)

  // domain
  container.bind(IUserRepository).to(FirebaseUserRepository)
  container.bind(IAuthDomainService).to(FirebaseAuthDomainService)
  container.bind(IAuthRepository).to(FirebaseAuthRepository)
  container.bind(IBookRepository).to(FirebaseBookRepository)
  container.bind(IBookFactory).to(BookFactory)
}
