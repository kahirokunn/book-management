export type IAuthInfo = {
  userId: Identifier,
  isEmailVerified: boolean,
}

export type IRegistrationParams = {
  password: string,
  displayName: string,
  iconFilepath: string,
  emailAddress: string,
  firstName: string,
  familyName: string,
  firstNameKana: string,
  familyNameKana: string,
  birthday: Date,
  hireDate: Date,
  gender: Gender,
}
