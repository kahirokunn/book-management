import {IUser} from '../userApplicationService/InOutType'

export interface IAuthInfo extends IUser {
  isEmailVerified: boolean
}

export interface IRegistrationParams {
  password: string
  displayName: string
  iconFilepath: string
  emailAddress: string
  firstName: string
  familyName: string
  firstNameKana: string
  familyNameKana: string
  birthday: Date
  hireDate: Date
  gender: Gender
}
