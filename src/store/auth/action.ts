import {IUser} from '@/boundaryInterface/userApplicationService/IUser';

export interface User extends IUser {}

const namespace = 'auth/';
const LOGIN = namespace + 'LOGIN';
const AUTHENTICATION_FAILED = namespace + 'AUTHENTICATION_FAILED';
const CHANGE_PROFILE_ACTION = namespace + 'CHANGE_PROFILE_ACTION';

export class LoginAction {
  public static type = LOGIN;
  public readonly type = LOGIN;

  constructor(readonly user: User) {}
}

export class AuthFailed {
  public static readonly type = AUTHENTICATION_FAILED;
  public readonly type = AUTHENTICATION_FAILED;
}

export class ChangeProfileAction {
  public static type = CHANGE_PROFILE_ACTION;
  public readonly type = CHANGE_PROFILE_ACTION;

  constructor(readonly user: User) {}
}
