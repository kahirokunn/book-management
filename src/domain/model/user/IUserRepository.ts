import { IUser } from '@/boundary/userApplicationService/InOutType'

export abstract class IUserRepository {
  public abstract create(params: IUser): Promise<IUser>
  public abstract update(params: IUser): Promise<IUser>
}
