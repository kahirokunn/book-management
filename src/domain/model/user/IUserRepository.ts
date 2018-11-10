import {IUser, IUserRegistration} from '@/boundary/userApplicationService/IUser';

export interface ISaveParams extends IUser {}

export interface ICreateParams extends IUserRegistration {}

export default interface IUserRepository {
  create(params: ICreateParams): Promise<IUser>;
  save(params: ISaveParams): Promise<IUser>;
  findById(id: Identifier): Promise<IUser>;
}
