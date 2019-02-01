import { injectable } from 'inversify'
import { ILogger } from '../ILogger'

@injectable()
export class ConsoleLogger implements ILogger {
  public info(message?: any, ...optionalParams: any[]): void {
    // tslint:disable-next-line no-console
    console.info(message, ...optionalParams)
  }
  public error(message?: any, ...optionalParams: any[]): void {
    // tslint:disable-next-line no-console
    console.error(message, ...optionalParams)
  }
}
