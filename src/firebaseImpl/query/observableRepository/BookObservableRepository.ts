import { IBook } from '@/boundary/bookApplicationService/InOutType'
import { Book } from '@/models/book'
import { IBookObservableRepository } from '@/query/observableRepository/book/IBookObservableRepository'
import { injectable } from 'inversify'
import { collectionData } from 'rxfire/firestore'
import { Observable } from 'rxjs'
import { filter, map } from 'rxjs/operators'

function bookMapper(book: any): IBook {
  return {
    ...book,
    // id: ,
    purchasedDatetime: book.purchasedDatetime.toDate(),
    createdAt: book.createdAt.toDate(),
    updatedAt: book.updatedAt && book.updatedAt.toDate() || null,
  }
}

@injectable()
export class BookObservableRepository implements IBookObservableRepository {
  public getBooks(startAfter?: Date): Observable<IBook[]> {
    const query = Book.getReference().orderBy('createdAt').limit(12)
    if (startAfter) {
      query.startAfter(startAfter)
    }

    return collectionData(query, 'id')
      .pipe(filter((dataList) => dataList.length > 0))
      .pipe(map((dataList) => dataList.map(bookMapper)))
  }
}
