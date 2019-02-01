import {
  IAuthApplicationService,
} from '@/boundary/authApplicationService/IAuthApplicationService'
import { serviceContainer } from '@/inversify/config'

export class AuthApplicationService {
  public static getInstance(): IAuthApplicationService {
    return serviceContainer.get(IAuthApplicationService)
  }
}
