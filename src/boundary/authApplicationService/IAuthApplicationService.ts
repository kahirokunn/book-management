import {
  injectable,
} from 'inversify'
import {
  IAuthInfo,
  IRegistrationParams,
} from './InOutType'

@injectable()
export default abstract class IAuthApplicationService {
  public abstract login(): Promise<IAuthInfo>
  public abstract loginWithEmailAndPassword(email: string, password: string): Promise<IAuthInfo>
  public abstract registration(params: IRegistrationParams): Promise<IAuthInfo>
}
