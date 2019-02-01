import {
  IAuthInfo,
  IRegistrationParams,
} from './InOutType'

export abstract class IAuthApplicationService {
  public abstract login(): Promise<IAuthInfo>
  public abstract loginWithEmailAndPassword(email: string, password: string): Promise<IAuthInfo>
  public abstract registration(params: IRegistrationParams): Promise<IAuthInfo>
}
