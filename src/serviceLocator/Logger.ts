import ILogger from '@/drivers/ILogger'
import { serviceContainer } from '@/inversify/config'

export default class Logger {
  public static getInstance(): ILogger {
    return serviceContainer.get(ILogger)
  }
}
