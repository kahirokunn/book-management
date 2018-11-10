import {injectable, inject} from 'inversify';
import TYPES from '@/inversify/types';
import IAuthDomainService from '@/domain/model/auth/IAuthDomainService';
import IUserRepository from '@/domain/model/user/IUserRepository';
import {IUser, IUserRegistration} from './IUser';

@injectable()
export default abstract class IUserApplicationService {
  constructor(
    @inject(TYPES.IUserRepository) protected readonly userRepository: IUserRepository,
    @inject(TYPES.IAuthDomainService) protected readonly authDomainService: IAuthDomainService,
  ) {}

  public abstract register(params: IUserRegistration): Promise<IUser>;
  public abstract save(params: IUser): Promise<IUser>;
}
