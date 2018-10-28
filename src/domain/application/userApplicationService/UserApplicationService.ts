import {injectable, inject} from 'inversify';
import TYPES from '@/inversify/types';
import {IUser, IUserRegistration} from '@/boundaryInterface/userApplicationService/IUser';
import IUserApplicationService from '@/boundaryInterface/userApplicationService/IUserApplicationService';
import IAuthDomainService from '@/domain/model/auth/IAuthDomainService';
import IUserRepository from '../../model/user/IUserRepository';

@injectable()
export default class UserApplicationService extends IUserApplicationService {
  constructor(
    @inject(TYPES.IUserRepository) userRepository: IUserRepository,
    @inject(TYPES.IAuthDomainService) authDomainService: IAuthDomainService,
  ) {
    super(userRepository, authDomainService);
  }

  public async register(params: IUserRegistration): Promise<IUser> {
    const user = await this.userRepository.create(params);
    await this.authDomainService.loginWithEmailAndPassword(params.emailAddress, params.password);
    return user;
  }

  public async save(params: IUser): Promise<IUser> {
    const user = this.userRepository.save(params);
    return user;
  }
}
