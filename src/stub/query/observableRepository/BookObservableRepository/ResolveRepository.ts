import { IBookObservableRepository } from '@/query/observableRepository/book/IBookObservableRepository'
import { bookFactory } from '@/stub/domain/factory/IBook'
import { injectable } from 'inversify'
import { from } from 'rxjs'

@injectable()
export class BookObservableRepository implements IBookObservableRepository {
  public getBooks() {
    const books = [
      bookFactory(),
      bookFactory(),
      bookFactory(),
    ]
    return from([books])
  }
}
