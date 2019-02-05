import { IBook } from '@/boundary/bookApplicationService/InOutType'
import { Observable } from 'rxjs'

export abstract class IBookObservableRepository {
  public abstract getBooks(startedAt?: Date): Observable<IBook[]>
}
