import { IAuthApplicationService } from '@/boundary/authApplicationService/IAuthApplicationService'
import { IBookApplicationService } from '@/boundary/bookApplicationService/IBookApplicationService'
import { IUserApplicationService } from '@/boundary/userApplicationService/IUserApplicationService'
import { Container } from 'inversify'
import { changeUserProfileFormModuleCreator } from './changeUserProfileForm'
import { createBookFormCreator } from './createBookForm'
import { loginFormModuleCreator } from './loginForm'
import { navigationCreator } from './navigation'
import { userRegistrationFormCreator } from './userRegistrationForm'

export type ContainersState = {
  changeUserProfileForm: ReturnType<ReturnType<typeof changeUserProfileFormModuleCreator>['state']>,
  createBookForm: ReturnType<ReturnType<typeof createBookFormCreator>['state']>,
  loginForm: ReturnType<ReturnType<typeof loginFormModuleCreator>['state']>,
  navigation: ReturnType<ReturnType<typeof navigationCreator>['state']>,
  userRegistrationForm: ReturnType<ReturnType<typeof userRegistrationFormCreator>['state']>,
}

export function containerModuleCreator(context: Container) {
  return {
    changeUserProfileForm: changeUserProfileFormModuleCreator(context.get(IUserApplicationService)),
    createBookForm: createBookFormCreator(context.get(IBookApplicationService)),
    loginForm: loginFormModuleCreator(context.get(IAuthApplicationService)),
    navigation: navigationCreator(),
    userRegistrationForm: userRegistrationFormCreator(context.get(IAuthApplicationService)),
  }
}
