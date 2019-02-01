import { injectable } from 'inversify'
import { ILogger } from '../ILogger'

@injectable()
export class BlankLogger implements ILogger {
  public info(): void {
    // pass
  }
  public error(): void {
    // pass
  }
}
