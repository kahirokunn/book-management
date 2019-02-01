import { IUser } from '@/boundary/userApplicationService/InOutType'
import {
  IUserApplicationService,
} from '@/boundary/userApplicationService/IUserApplicationService'
import { IUserRepository } from '@/domain/model/user/IUserRepository'
import { inject, injectable } from 'inversify'

@injectable()
export class UserApplicationService implements IUserApplicationService {
  constructor(
    @inject(IUserRepository)
    private readonly userRepository: IUserRepository,
  ) {}

  public update(params: IUser): Promise<void> {
    return this.userRepository.update(params)
  }
}
