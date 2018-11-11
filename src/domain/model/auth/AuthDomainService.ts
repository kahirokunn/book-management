import IAuthDomainService from './IAuthDomainService'
import {injectable} from 'inversify'
import {auth} from '@/firebase/index'
import * as rules from '@/config/user/rules'
import {isValid} from '@/submodules/validate'

@injectable()
export default class UserDomainService implements IAuthDomainService {
  public async createUserWithEmailAndPassword(emailAddress: string, password: string): Promise<Identifier> {
    const response = await auth().createUserWithEmailAndPassword(emailAddress, password)
    if (response.user === null) {
      throw Error('userを作成しましたが、なぜか取れませんでした')
    }
    return response.user.uid
  }

  public async loginWithEmailAndPassword(email: string, password: string): Promise<Identifier> {
    isValid(rules.emailRules, email)
    const userCredential = await auth().signInWithEmailAndPassword(email, password)
    if (userCredential.user === null) {
      throw Error('自動loginに失敗しました')
    }
    return userCredential.user.uid
  }

  public async sendEmailVerification(): Promise<void> {
    const currentUser = auth().currentUser
    if (currentUser !== null) {
      console.log('確認メールを送信しました')
      await currentUser.sendEmailVerification()
    } else {
      console.log('ユーザー登録したけど自動ログインされませんでした')
    }
  }

  public login(): Promise<Identifier> {
    return new Promise((resolve, reject) => {
      auth().onAuthStateChanged((authUser) => {
        if (authUser) {
          resolve(authUser.uid)
        } else {
          reject('認証に失敗')
        }
      })
    })
  }

  public isEmailVerified(): boolean {
    const currentUser = auth().currentUser
    if (currentUser) {
      return currentUser.emailVerified
    }
    return false
  }
}
