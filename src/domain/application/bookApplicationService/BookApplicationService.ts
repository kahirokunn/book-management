import { IBookApplicationService } from '@/boundary/bookApplicationService/IBookApplicationService'
import {
  IBook,
  IRegistrationParams,
} from '@/boundary/bookApplicationService/InOutType'
import IBookFactory from '@/domain/model/book/IBookFactory'
import { IBookRepository } from '@/domain/model/book/IBookRepository'
import { inject, injectable } from 'inversify'

@injectable()
export class BookApplicationService implements IBookApplicationService {
  constructor(
    @inject(IBookRepository)
    private readonly bookRepository: IBookRepository,

    @inject(IBookFactory)
    private readonly bookFactory: IBookFactory,
  ) {}

  public create(params: IRegistrationParams): Promise<void> {
    const book = this.bookFactory.create(params)
    return this.bookRepository.create(book)
  }
  public update(book: IBook): Promise<void> {
    return this.bookRepository.update(book)
  }
  public delete(id: Identifier): Promise<void> {
    return this.bookRepository.delete(id)
  }
}
