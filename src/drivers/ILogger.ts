import { injectable } from 'inversify'

@injectable()
export default abstract class ILogger {
  public abstract info(message?: any, ...optionalParams: any[]): void
  public abstract error(message?: any, ...optionalParams: any[]): void
}
