import { IAuthApplicationService } from '@/boundary/authApplicationService/IAuthApplicationService'
import { IBookApplicationService } from '@/boundary/bookApplicationService/IBookApplicationService'
import { IUserApplicationService } from '@/boundary/userApplicationService/IUserApplicationService'
import { ILogger } from '@/drivers/ILogger'
import { BlankLogger } from '@/drivers/logger/BlankLogger'
import { BookBLoC } from '@/query/bloc/book/BookListBLoC'
import { UserBLoC } from '@/query/bloc/user/UserBLoC'
import { IBookObservableRepository } from '@/query/observableRepository/book/IBookObservableRepository'
import { IUserObservableRepository } from '@/query/observableRepository/user/IUserObservableRepository'
import { AuthApplicationService } from '@/stub/domain/app/authApplicationService/RejectService'
import { BookApplicationService } from '@/stub/domain/app/bookApplicationService/RejectService'
import { UserApplicationService } from '@/stub/domain/app/userApplicationService/RejectService'
import { BookObservableRepository } from '@/stub/query/observableRepository/BookObservableRepository/RejectRepository'
import { UserObservableRepository } from '@/stub/query/observableRepository/UserObservableRepository/RejectRepository'
import { Container } from 'inversify'

export function rejectStubProviders(container: Container): void {
  // core
  container.bind(ILogger).to(BlankLogger)

  // query
  // bloc
  container.bind(UserBLoC).to(UserBLoC)
  container.bind(BookBLoC).to(BookBLoC)

  // observable repository
  container.bind(IUserObservableRepository).to(UserObservableRepository)
  container.bind(IBookObservableRepository).to(BookObservableRepository)


  // application
  container.bind(IUserApplicationService).to(UserApplicationService)
  container.bind(IAuthApplicationService).to(AuthApplicationService)
  container.bind(IBookApplicationService).to(BookApplicationService)
}
