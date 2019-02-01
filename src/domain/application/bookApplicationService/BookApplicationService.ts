import { IBookApplicationService } from '@/boundary/bookApplicationService/IBookApplicationService'
import {
  IBook,
  IRegistrationBook,
} from '@/boundary/bookApplicationService/InOutType'
import { IBookRepository } from '@/domain/model/book/IBookRepository'
import { inject, injectable } from 'inversify'

@injectable()
export class BookApplicationService implements IBookApplicationService {
  constructor(
    @inject(IBookRepository)
    private readonly bookRepository: IBookRepository,
  ) {
  }

  public create(params: IRegistrationBook): Promise<void> {
    return this.bookRepository.create(params)
  }
  public update(book: IBook): Promise<void> {
    return this.bookRepository.update(book)
  }
  public delete(id: Identifier): Promise<void> {
    return this.bookRepository.delete(id)
  }
}
