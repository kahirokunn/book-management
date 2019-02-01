import { IUser } from './InOutType'

export abstract class IUserApplicationService {
  public abstract update(params: IUser): Promise<void>
}
