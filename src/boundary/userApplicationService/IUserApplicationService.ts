import {
  injectable,
} from 'inversify'

import {IUser} from './InOutType'

@injectable()
export default abstract class IUserApplicationService {
  public abstract update(params: IUser): Promise<IUser>
}
