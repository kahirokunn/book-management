import {
  IUserApplicationService,
} from '@/boundary/userApplicationService/IUserApplicationService'
import { injectable } from 'inversify'

@injectable()
export class UserApplicationService implements IUserApplicationService {

  public async update(): Promise<void> {
    // pass
  }
}
