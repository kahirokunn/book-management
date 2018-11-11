import {injectable, inject} from 'inversify'
import {IUser} from '@/boundary/userApplicationService/InOutType'
import IUserApplicationService from '@/boundary/userApplicationService/IUserApplicationService'
import IUserRepository from '../../model/user/IUserRepository'

@injectable()
export default class UserApplicationService extends IUserApplicationService {
  constructor(
    @inject(IUserRepository)
    private readonly userRepository: IUserRepository,
  ) {
    super()
  }

  public async update(params: IUser): Promise<IUser> {
    const user = this.userRepository.save(params)
    return user
  }
}
