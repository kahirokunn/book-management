import {
  injectable,
} from 'inversify'
import {
  IAuthInfo,
  IUserRegistration,
} from './InOutType'

@injectable()
export default abstract class IAuthApplicationService {
  public abstract login(): Promise<IAuthInfo>
  public abstract loginWithEmailAndPassword(email: string, password: string): Promise<IAuthInfo>
  public abstract registration(params: IUserRegistration): Promise<IAuthInfo>
}
