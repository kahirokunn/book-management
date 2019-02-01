import { IUser } from '@/boundary/userApplicationService/InOutType'

export abstract class IUserRepository {
  public abstract create(params: IUser): Promise<void>
  public abstract update(params: IUser): Promise<void>
}
