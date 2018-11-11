import {injectable} from 'inversify'
import IAuthApplicationService from '@/boundary/authApplicationService/IAuthApplicationService'
import {
  IRegistrationParams,
  IAuthInfo,
} from '@/boundary/authApplicationService/InOutType'

@injectable()
export default class RejectService implements IAuthApplicationService {
  public async registration(params: IRegistrationParams): Promise<IAuthInfo> {
    const code = 'auth/email-already-in-use'
    throw { code }
  }

  public async login(): Promise<IAuthInfo> {
    throw Error()
  }

  public async loginWithEmailAndPassword(email: string, password: string): Promise<IAuthInfo> {
    throw Error()
  }
}
