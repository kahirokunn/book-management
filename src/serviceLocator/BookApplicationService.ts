import { IBookApplicationService } from '@/boundary/bookApplicationService/IBookApplicationService'
import { serviceContainer } from '@/inversify/config'

export class BookApplicationService {
  public static getInstance(): IBookApplicationService {
    return serviceContainer.get(IBookApplicationService)
  }
}
