import {
  IBook,
  IRegistrationParams,
} from '@/boundary/bookApplicationService/InOutType'

export default abstract class IBookFactory {
  public abstract create<T extends IRegistrationParams>(params: T): IBook
}
