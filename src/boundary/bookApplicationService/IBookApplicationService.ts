import {
  Book,
  RegistrationBook,
} from './InOutType'

export abstract class IBookApplicationService {
  public abstract create(params: RegistrationBook): Promise<Book>
  public abstract update(book: Book): Promise<Book>
  public abstract delete(id: Identifier): Promise<void>
}
