import { IBook } from '@/boundary/bookApplicationService/InOutType'
import { IBookRepository } from '@/domain/model/book/IBookRepository'
import { Book } from '@/models/book'
import firebase from 'firebase/app'
import { injectable } from 'inversify'

function bookSetter(params: IBook, book: Book) {
  book.userId = params.userId
  book.title = params.title
  book.purchasedLocation = params.purchasedLocation
  book.purchasedDatetime = firebase.firestore.Timestamp.fromDate(params.purchasedDatetime)
  book.description = params.description
  book.type = params.type
  book.price = params.price
  book.owner = params.owner
  book.coverImageFilePath = params.coverImageFilePath
  book.purchasedUrl = params.purchasedUrl
  book.evaluation = params.evaluation
  book.receiptImageFilePath = params.receiptImageFilePath
}

@injectable()
export class FirebaseBookRepository implements IBookRepository {
  public async create(params: IBook): Promise<void> {
    const book = new Book(params.id)
    bookSetter(params, book)
    await book.save()
  }

  public async update(params: IBook): Promise<void> {
    const book = await Book.get(params.id)
    if (!book) {
      throw Error('bookが取れませんでした')
    }
    bookSetter(params, book)
    await book.update()
  }

  public async delete(id: Identifier): Promise<void> {
    const book = await Book.get(id)
    if (!book) {
      throw Error('bookが取れませんでした')
    }
    book.delete()
  }
}
