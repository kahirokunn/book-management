import {
  IBook,
  IRegistrationParams,
} from '@/boundary/bookApplicationService/InOutType'
import IBookFactory from '@/domain/model/book/IBookFactory'
import { Book } from '@/models/book'
import { injectable } from 'inversify'

@injectable()
export default class BookFactory implements IBookFactory {
  public create<T extends IRegistrationParams>(params: T): IBook {
    const date = new Date()
    return {
      id: Book.getReference().doc().id,
      createdAt: date,
      updatedAt: date,
      ...params,
    }
  }
}
