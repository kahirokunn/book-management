import ILogger from '../ILogger'

export default class ConsoleLogger extends ILogger {
  public info(message?: any, ...optionalParams: any[]): void {
    console.info(message, ...optionalParams)
  }
  public error(message?: any, ...optionalParams: any[]): void {
    console.error(message, ...optionalParams)
  }
}
