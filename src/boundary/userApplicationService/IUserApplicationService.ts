import {IUser} from './InOutType';

export default abstract class IUserApplicationService {
  public abstract update(params: IUser): Promise<IUser>;
}
