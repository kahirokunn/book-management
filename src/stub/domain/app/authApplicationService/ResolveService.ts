import {injectable} from 'inversify'
import IAuthApplicationService from '@/boundary/authApplicationService/IAuthApplicationService'
import {
  IRegistrationParams,
  IAuthInfo,
} from '@/boundary/authApplicationService/InOutType'
import {userFactory} from '@/stub/domain/factory/IUser'

@injectable()
export default class ResolveService implements IAuthApplicationService {
  public async registration(params: IRegistrationParams): Promise<IAuthInfo> {
    return {
      isEmailVerified: false,
      ...userFactory(params),
    }
  }

  public async login(): Promise<IAuthInfo> {
    return {
      isEmailVerified: true,
      ...userFactory(),
    }
  }

  public async loginWithEmailAndPassword(email: string): Promise<IAuthInfo> {
    return {
      isEmailVerified: true,
      ...userFactory({
        emailAddress: email,
      }),
    }
  }
}
