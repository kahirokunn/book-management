import {IUser, IUserRegistration} from '@/boundaryInterface/userApplicationService/IUser';
import User from '@/domain/model/user/User';

export interface ISaveParams extends IUser {}

export interface ICreateParams extends IUserRegistration {}

export default interface IUserRepository {
  create(params: ICreateParams): Promise<User>;
  save(params: ISaveParams): Promise<User>;
  findById(id: Identifier): Promise<User>;
}
