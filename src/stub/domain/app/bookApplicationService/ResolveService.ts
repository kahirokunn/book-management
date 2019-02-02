import { IBookApplicationService } from '@/boundary/bookApplicationService/IBookApplicationService'
import { injectable } from 'inversify'

@injectable()
export class BookApplicationService implements IBookApplicationService {

  public async create(): Promise<void> {
    // pass
  }
  public async update(): Promise<void> {
    // pass
  }
  public async delete(): Promise<void> {
    // pass
  }
}
