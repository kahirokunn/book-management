import { serviceContainer } from '@/inversify/config'
import IUserStream from '@/query/user/IUserStream'

export default class UserStream {
  public static getInstance(): IUserStream {
    return serviceContainer.get(IUserStream)
  }
}
