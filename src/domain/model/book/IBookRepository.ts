import {
  Book,
  RegistrationBook,
} from '@/boundary/bookApplicationService/InOutType'

export abstract class IBookRepository {
  public abstract create(params: RegistrationBook): Promise<Book>
  public abstract update(book: Book): Promise<Book>
  public abstract delete(id: Identifier): Promise<void>
}
