import IAuthDomainService from '@/domain/model/auth/IAuthDomainService'
import { auth } from '@/firebase/index'
import Logger from '@/serviceLocator/Logger'
import { injectable } from 'inversify'

@injectable()
export default class UserDomainService implements IAuthDomainService {
  public async sendEmailVerification(): Promise<void> {
    const currentUser = auth().currentUser
    if (currentUser !== null) {
      Logger.getInstance().info('確認メールを送信しました')
      await currentUser.sendEmailVerification()
    } else {
      Logger.getInstance().error('ユーザー登録したけど自動ログインされませんでした')
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
