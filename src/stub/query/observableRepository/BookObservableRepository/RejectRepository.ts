import { IBookObservableRepository } from '@/query/observableRepository/book/IBookObservableRepository'
import { injectable } from 'inversify'
import { Observable } from 'rxjs'

@injectable()
export class BookObservableRepository implements IBookObservableRepository {
  public getBooks() {
    return Observable.throw(new Error())
  }
}
