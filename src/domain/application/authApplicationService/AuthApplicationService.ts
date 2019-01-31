import IAuthApplicationService from '@/boundary/authApplicationService/IAuthApplicationService'
import {
  IAuthInfo,
  IRegistrationParams,
} from '@/boundary/authApplicationService/InOutType'
import IAuthDomainService from '@/domain/model/auth/IAuthDomainService'
import IAuthRepository from '@/domain/model/auth/IAuthRepository'
import IUserRepository from '@/domain/model/user/IUserRepository'
import {
  inject,
  injectable,
} from 'inversify'

@injectable()
export default class AuthApplicationService extends IAuthApplicationService {
  constructor(
    @inject(IUserRepository)
    private readonly userRepository: IUserRepository,
    @inject(IAuthDomainService)
    private readonly authDomainService: IAuthDomainService,
    @inject(IAuthRepository)
    private readonly authRepository: IAuthRepository,
  ) { super() }

  public async registration(params: IRegistrationParams): Promise<IAuthInfo> {
    const userId = await this.authRepository.createAuthInfoWithEmailAndPassword(params.emailAddress, params.password)
    const userParams = {
      id: userId,
      displayName: params.displayName,
      iconFilepath: params.iconFilepath,
      emailAddress: params.emailAddress,
      firstName: params.firstName,
      familyName: params.familyName,
      firstNameKana: params.firstNameKana,
      familyNameKana: params.familyNameKana,
      birthday: params.birthday,
      hireDate: params.hireDate,
      gender: params.gender,
    }
    const result = await Promise.all([
      this.userRepository.create(userParams),
      this.authDomainService.sendEmailVerification(),
    ])

    const user = result[0]
    return {
      ...user,
      isEmailVerified: this.authDomainService.isEmailVerified(),
    }
  }

  public async login(): Promise<IAuthInfo> {
    const userId = await this.authRepository.login()
    const user = await this.userRepository.findById(userId)
    const isEmailVerified = this.authDomainService.isEmailVerified()

    return {
      ...user,
      isEmailVerified,
    }
  }

  public async loginWithEmailAndPassword(email: string, password: string): Promise<IAuthInfo> {
    const id = await this.authRepository.loginWithEmailAndPassword(email, password)
    const user =  await this.userRepository.findById(id)
    const isEmailVerified = this.authDomainService.isEmailVerified()

    return {
      ...user,
      isEmailVerified,
    }
  }
}
