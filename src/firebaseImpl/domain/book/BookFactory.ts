import {
  IBook,
  IRegistrationParams,
} from '@/boundary/bookApplicationService/InOutType'
import IBookFactory from '@/domain/model/book/IBookFactory'
import { Book } from '@/models/book'

export default class BookFactory implements IBookFactory {
  public create(params: IRegistrationParams): IBook {
    const date = new Date()
    return {
      id: Book.getReference().doc().id,
      ...params,
      createdAt: date,
      updatedAt: date,
    }
  }
}
