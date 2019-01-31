import { IUser } from '@/boundary/userApplicationService/InOutType'
import uuid from 'uuid'

interface IUserFactoryInputPort {
  id?: Identifier
  displayName?: string
  iconFilepath?: string
  emailAddress?: string
  firstName?: string
  familyName?: string
  firstNameKana?: string
  familyNameKana?: string
  birthday?: Date
  hireDate?: Date
  gender?: Gender
}

export function userFactory(params?: IUserFactoryInputPort): IUser {
  return {
    id: uuid(),
    iconFilepath: '',
    displayName: 't-tanaka',
    emailAddress: 'tanaka@gmail.com',
    firstName: '田中',
    familyName: '太郎',
    firstNameKana: 'タナカ',
    familyNameKana: 'タロウ',
    birthday: new Date(),
    hireDate: new Date(),
    gender: '男',
    ...params,
  }
}
