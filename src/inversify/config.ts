import {Container} from 'inversify';
import IUserApplicationService from '@/boundaryInterface/userApplicationService/IUserApplicationService';
import IUserRepository from '@/domain/application/userApplicationService/IUserRepository';
import UserApplicationService from '@/domain/application/userApplicationService/UserApplicationService';
import UserRepository from '@/domain/model/user/UserRepository';
import UserDomainService from '@/domain/model/user/UserDomainService';
import TYPES from './types';

const diContainer = new Container();
diContainer.bind<IUserApplicationService>(TYPES.IUserApplicationService).to(UserApplicationService);
diContainer.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository);
diContainer.bind<UserDomainService>(TYPES.UserDomainService).to(UserDomainService);

export { diContainer };
