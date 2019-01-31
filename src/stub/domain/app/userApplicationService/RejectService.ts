import { IUser } from '@/boundary/userApplicationService/InOutType'
import IUserApplicationService from '@/boundary/userApplicationService/IUserApplicationService'
import { injectable } from 'inversify'

@injectable()
export default class RejectService implements IUserApplicationService {

  public async update(): Promise<IUser> {
    throw Error()
  }
}
