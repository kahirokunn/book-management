import { IBook } from '@/boundary/bookApplicationService/InOutType'
import { Book } from '@/models/book'
import { injectable } from 'inversify'
import { collectionData } from 'rxfire/firestore'
import { Observable } from 'rxjs'
import { filter, map } from 'rxjs/operators'

function bookMapper(book: any): IBook {
  return {
    ...book,
    purchasedDatetime: book.purchasedDatetime.toDate(),
    createdAt: book.createdAt.toDate(),
    updatedAt: book.updatedAt && book.updatedAt.toDate() || null,
  }
}

@injectable()
export class BookBLoC {

  public latest$(): Observable<IBook[]> {
    return collectionData(Book.getReference())
      .pipe(filter((dataList) => dataList.length > 0))
      .pipe(map((dataList) => dataList.map(bookMapper)))
  }
}
