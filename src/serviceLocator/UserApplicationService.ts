import IUserApplicationService from '@/boundary/userApplicationService/IUserApplicationService'
import { serviceContainer } from '@/inversify/config'

export default class UserApplicationService {
  public static getInstance(): IUserApplicationService {
    return serviceContainer.get(IUserApplicationService)
  }
}
