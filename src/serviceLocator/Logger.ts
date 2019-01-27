import {serviceContainer} from '@/inversify/config'
import ILogger from '@/drivers/ILogger'

export default class Logger {
  public static getInstance(): ILogger {
    return serviceContainer.get(ILogger)
  }
}
