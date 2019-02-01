import * as rules from '@/config/user/rules'
import { IAuthRepository } from '@/domain/model/auth/IAuthRepository'
import { auth } from '@/firebase/index'
import { isValid } from '@/submodules/validate'
import { injectable } from 'inversify'

@injectable()
export class AuthRepository implements IAuthRepository {
  public async createAuthInfoWithEmailAndPassword(emailAddress: string, password: string): Promise<Identifier> {
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

  public login(): Promise<Identifier> {
    return new Promise((resolve, reject) => {
      auth().onAuthStateChanged((authUser) => {
        if (authUser) {
          resolve(authUser.uid)
        } else {
          reject('認証されていません')
        }
      }, (error) => {
        reject(error)
      })
    })
  }
}
