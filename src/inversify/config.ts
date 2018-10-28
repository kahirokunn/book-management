import {Container} from 'inversify';
import IUserApplicationService from '@/boundaryInterface/userApplicationService/IUserApplicationService';
import IAuthApplicationService from '@/boundaryInterface/authApplicationService/IAuthApplicationService';
import IUserRepository from '@/domain/model/user/IUserRepository';
import UserApplicationService from '@/domain/application/userApplicationService/UserApplicationService';
import AuthApplicationService from '@/domain/application/authApplicationService/AuthApplicationService';
import UserRepository from '@/domain/model/user/UserRepository';
import IAuthDomainService from '@/domain/model/auth/IAuthDomainService';
import AuthDomainService from '@/domain/model/auth/AuthDomainService';
import TYPES from './types';

const diContainer = new Container();
diContainer.bind<IUserApplicationService>(TYPES.IUserApplicationService).to(UserApplicationService);
diContainer.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository);
diContainer.bind<IAuthDomainService>(TYPES.IAuthDomainService).to(AuthDomainService);
diContainer.bind<IAuthApplicationService>(TYPES.IAuthApplicationService).to(AuthApplicationService);

export { diContainer };
