import {injectable} from 'inversify'
import {IUser} from '@/boundary/userApplicationService/InOutType'
import IUserApplicationService from '@/boundary/userApplicationService/IUserApplicationService'

@injectable()
export default class RejectService implements IUserApplicationService {

  public async update(): Promise<IUser> {
    throw Error()
  }
}
