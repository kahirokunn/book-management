import {IUser} from '@/boundary/userApplicationService/InOutType';

export default abstract class IUserRepository {
  public abstract save(params: IUser): Promise<IUser>;
  public abstract findById(id: Identifier): Promise<IUser>;
}
