import {injectable, inject} from 'inversify';
import TYPES from '@/inversify/types';
import IAuthDomainService from '@/domain/model/auth/IAuthDomainService';
import IUserRepository from '@/domain/model/user/IUserRepository';
import {IUser} from './IUser';

@injectable()
export default abstract class IAuthApplicationService {
  constructor(
    @inject(TYPES.IUserRepository) protected readonly userRepository: IUserRepository,
    @inject(TYPES.IAuthDomainService) protected readonly authDomainService: IAuthDomainService,
  ) {}

  public abstract login(): Promise<IUser>;
  public abstract loginWithEmailAndPassword(email: string, password: string): Promise<IUser>;
}
