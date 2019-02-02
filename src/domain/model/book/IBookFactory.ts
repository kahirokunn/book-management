import {
  IBook,
  IRegistrationParams,
} from '@/boundary/bookApplicationService/InOutType'

export default abstract class IBookFactory {
  public abstract create(params: IRegistrationParams): IBook
}
