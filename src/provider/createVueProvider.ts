import { ILogger } from '@/drivers/ILogger'
import { Container } from 'inversify'

export function createVueProvider(container: Container): object {
  // core
  return {
    [ILogger.toString()]: container.get(ILogger),
  }
}
