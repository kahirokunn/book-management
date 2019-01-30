import ILogger from '../ILogger'

export default class BlankLogger extends ILogger {
  public info(): void {
    // pass
  }
  public error(): void {
    // pass
  }
}
