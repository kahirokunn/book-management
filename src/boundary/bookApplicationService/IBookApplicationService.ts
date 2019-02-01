import {
  IBook,
  IRegistrationBook,
} from './InOutType'

export abstract class IBookApplicationService {
  public abstract create(params: IRegistrationBook): Promise<void>
  public abstract update(book: IBook): Promise<void>
  public abstract delete(id: Identifier): Promise<void>
}
