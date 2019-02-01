import { IUser } from '@/boundary/userApplicationService/InOutType'
import {
  IUserApplicationService,
} from '@/boundary/userApplicationService/IUserApplicationService'
import { injectable } from 'inversify'

@injectable()
export class UserApplicationService implements IUserApplicationService {

  public async update(): Promise<IUser> {
    throw Error()
  }
}
