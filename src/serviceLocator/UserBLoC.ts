import { serviceContainer } from '@/inversify/config'
import {
  IUserBLoC,
} from '@/query/user/IUserBLoC'

export class UserBLoC {
  public static getInstance(): IUserBLoC {
    return serviceContainer.get(IUserBLoC)
  }
}
