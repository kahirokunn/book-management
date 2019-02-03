import { ILogger } from '@/drivers/ILogger'

export class Logger {
  public static initialize(logger: ILogger) {
    this.logger = logger
  }

  public static getInstance(): ILogger {
    if (this.logger) {
      return this.logger
    }
    throw Error('Not register Logger')
  }

  private static logger: ILogger | null = null
}
