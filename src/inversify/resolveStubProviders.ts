import {Container} from 'inversify';
import IUserApplicationService from '@/boundary/userApplicationService/IUserApplicationService';
import IAuthApplicationService from '@/boundary/authApplicationService/IAuthApplicationService';
import UserApplicationResolveService from '@/stub/domain/app/userApplicationService/ResolveService';
import AuthApplicationResolveService from '@/stub/domain/app/authApplicationService/ResolveService';

export function stubProviders(container: Container): void {
  container.bind<IUserApplicationService>(IUserApplicationService).to(UserApplicationResolveService);
  container.bind<IAuthApplicationService>(IAuthApplicationService).to(AuthApplicationResolveService);
}
