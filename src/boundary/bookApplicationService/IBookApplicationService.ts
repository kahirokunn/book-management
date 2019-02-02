import {
  IBook,
  IRegistrationParams,
} from './InOutType'

export abstract class IBookApplicationService {
  public abstract create(params: IRegistrationParams): Promise<void>
  public abstract update(book: IBook): Promise<void>
  public abstract delete(id: Identifier): Promise<void>
}
