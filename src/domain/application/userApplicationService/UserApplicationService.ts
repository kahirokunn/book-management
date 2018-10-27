import {injectable, inject} from 'inversify';
import TYPES from '@/inversify/types';
import {IUser, IUserRegistration} from '@/boundaryInterface/userApplicationService/IUser';
import IUserApplicationService from '@/boundaryInterface/userApplicationService/IUserApplicationService';
import UserDomainService from '@/domain/model/user/UserDomainService';
import IUserRepository from './IUserRepository';

@injectable()
export default class UserApplicationService extends IUserApplicationService {
  constructor(
    @inject(TYPES.IUserRepository) userRepository: IUserRepository,
    @inject(TYPES.UserDomainService) private readonly userDomainService: UserDomainService,
  ) {
    super(userRepository);
  }

  public async register(params: IUserRegistration): Promise<IUser> {
    await this.userRepository.create(params);
    const user = await this.loginWithEmailAndPassword(params.emailAddress, params.password);
    return user;
  }

  public async save(params: IUser): Promise<IUser> {
    const user = this.userRepository.save(params);
    return user;
  }

  public async login(): Promise<IUser> {
    return await this.userDomainService.login();
  }

  public async loginWithEmailAndPassword(email: string, password: string): Promise<IUser> {
    const id = await this.userDomainService.loginWithEmailAndPassword(email, password);
    return await this.userRepository.findById(id);
  }
}
