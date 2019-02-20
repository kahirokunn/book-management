import { IAuthDomainService } from '@/domain/model/auth/IAuthDomainService'
import { ILogger } from '@/drivers/ILogger'
import { auth } from '@/firebase/index'
import { inject, injectable } from 'inversify'

@injectable()
export class FirebaseAuthDomainService implements IAuthDomainService {
  constructor(
    @inject(ILogger)
    private readonly logger: ILogger,
  ) {}

  public async sendEmailVerification(): Promise<void> {
    const currentUser = auth().currentUser
    if (currentUser !== null) {
      this.logger.info('確認メールを送信しました')
      await currentUser.sendEmailVerification()
    } else {
      this.logger.error('ユーザー登録したけど自動ログインされませんでした')
    }
  }

  public isEmailVerified(): boolean {
    const currentUser = auth().currentUser
    if (currentUser) {
      return currentUser.emailVerified
    }
    return false
  }
}
