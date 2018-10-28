import IAuthDomainService from './IAuthDomainService';
import {injectable} from 'inversify';
import {auth} from '@/firebase/index';
import * as rules from '@/config/user/rules';
import {isValid} from '@/submodules/validate';

@injectable()
export default class UserDomainService implements IAuthDomainService {
  public async loginWithEmailAndPassword(email: string, password: string): Promise<Identifier> {
    isValid(rules.emailRules, email);
    const userCredential = await auth().signInWithEmailAndPassword(email, password);
    if (userCredential.user === null) {
      throw Error('自動loginに失敗しました');
    }
    return userCredential.user.uid;
  }

  public login(): Promise<Identifier> {
    return new Promise((resolve, reject) => {
      auth().onAuthStateChanged((authUser) => {
        if (authUser) {
          resolve(authUser.uid);
        } else {
          reject('認証に失敗');
        }
      });
    });
  }
}
