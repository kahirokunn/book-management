import {IUser} from '@/boundaryInterface/userApplicationService/IUser';
import IAuthApplicationService from '@/boundaryInterface/authApplicationService/IAuthApplicationService';
import IUserRepository from '@/domain/model/user/IUserRepository';
import IAuthDomainService from '@/domain/model/auth/IAuthDomainService';

export default class AuthApplicationService extends IAuthApplicationService {
  constructor(
    protected readonly userRepository: IUserRepository,
    protected readonly authDomainService: IAuthDomainService,
  ) {
    super(userRepository, authDomainService);
  }

  public async login(): Promise<IUser> {
    const userId = await this.authDomainService.login();
    return await this.userRepository.findById(userId);
  }

  public async loginWithEmailAndPassword(email: string, password: string): Promise<IUser> {
    const id = await this.authDomainService.loginWithEmailAndPassword(email, password);
    return await this.userRepository.findById(id);
  }
}
