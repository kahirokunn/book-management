import {Container} from 'inversify';
import IUserApplicationService from '@/boundary/userApplicationService/IUserApplicationService';
import IAuthApplicationService from '@/boundary/authApplicationService/IAuthApplicationService';
import UserApplicationRejectService from '@/stub/domain/app/userApplicationService/RejectService';
import AuthApplicationRejectService from '@/stub/domain/app/authApplicationService/RejectService';

export function stubProviders(container: Container): void {
  container.bind<IUserApplicationService>(IUserApplicationService).to(UserApplicationRejectService);
  container.bind<IAuthApplicationService>(IAuthApplicationService).to(AuthApplicationRejectService);
}
