import User from './User';

export class IUserFields {
  public id?: string;
  public displayName?: string;
  public iconFilepath?: string;
  public emailAddress?: string;
  public firstName?: string;
  public familyName?: string;
  public firstNameKana?: string;
  public familyNameKana?: string;
  public birthday?: Date;
  public hireDate?: Date;
  public gender?: Gender;
}


const UserFactory = (fields?: IUserFields): User => {
  if (fields === undefined) {
    return new User();
  }
  const user = new User();
  Object.assign(user, fields);
  return user;
};

export default UserFactory;
