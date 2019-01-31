import { IUser } from '@/boundary/userApplicationService/InOutType'
import IUserApplicationService from '@/boundary/userApplicationService/IUserApplicationService'
import { userFactory } from '@/stub/domain/factory/IUser'
import { injectable } from 'inversify'

@injectable()
export default class ResolveService implements IUserApplicationService {

  public async update(params: IUser): Promise<IUser> {
    return userFactory(params)
  }
}
