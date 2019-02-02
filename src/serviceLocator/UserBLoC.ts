import { serviceContainer } from '@/inversify/config'
import { UserBLoC as UserBLoCImpl } from '@/query/bloc/user/UserBLoC'

export class UserBLoC {
  public static getInstance(): UserBLoCImpl {
    return serviceContainer.get(UserBLoCImpl)
  }
}
