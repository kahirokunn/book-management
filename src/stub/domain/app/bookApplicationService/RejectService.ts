import { IBookApplicationService } from '@/boundary/bookApplicationService/IBookApplicationService'
import { injectable } from 'inversify'

@injectable()
export class BookApplicationService implements IBookApplicationService {

  public create(): Promise<void> {
    throw Error()
  }
  public update(): Promise<void> {
    throw Error()
  }
  public delete(): Promise<void> {
    throw Error()
  }
}
