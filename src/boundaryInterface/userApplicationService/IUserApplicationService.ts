import {injectable, inject} from 'inversify';
import TYPES from '@/inversify/types';
import IUserRepository from '@/domain/application/userApplicationService/IUserRepository';
import {IUser, IUserRegistration} from './IUser';

@injectable()
export default abstract class IUserApplicationService {
  constructor(@inject(TYPES.IUserRepository) protected readonly userRepository: IUserRepository) {}

  public abstract register(params: IUserRegistration): Promise<IUser>;
  public abstract login(): Promise<IUser>;
  public abstract loginWithEmailAndPassword(email: string, password: string): Promise<IUser>;
  public abstract save(params: IUser): Promise<IUser>;
}
