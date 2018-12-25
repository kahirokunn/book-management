import ILogger from '../ILogger'

export default class BlankLogger extends ILogger {
  public info(message?: any, ...optionalParams: any[]): void {
    // pass
  }
  public error(message?: any, ...optionalParams: any[]): void {
    // pass
  }
}
