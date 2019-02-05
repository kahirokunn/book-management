import { IBook } from '@/boundary/bookApplicationService/InOutType'
import { IBookObservableRepository } from '@/query/observableRepository/book/IBookObservableRepository'
import { inject, injectable } from 'inversify'
import { Subject, Subscription } from 'rxjs'

@injectable()
export class BookBLoC {
  private readonly _books: Subject<IBook[]> = new Subject<IBook[]>()
  private _subscriptions: Subscription[] = []

  get books$() {
    return this._books
  }

  constructor(
    @inject(IBookObservableRepository)
    private readonly bookRepository: IBookObservableRepository,
  ) {}

  public fetchBook(startAfter?: Date) {
    const subscription = this.bookRepository
      .getBooks(startAfter)
      .subscribe(this._books)
    this._subscriptions.push(subscription)
  }

  public depose() {
    this._subscriptions
      .map((subscription) => subscription.unsubscribe())
  }
}
