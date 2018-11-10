import {IUser, IUserRegistration} from '@/boundary/userApplicationService/IUser';
import IUserApplicationService from '@/boundary/userApplicationService/IUserApplicationService';
import IAuthDomainService from '@/domain/model/auth/IAuthDomainService';
import IUserRepository from '../../model/user/IUserRepository';

export default class UserApplicationService extends IUserApplicationService {
  constructor(
    userRepository: IUserRepository,
    authDomainService: IAuthDomainService,
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
