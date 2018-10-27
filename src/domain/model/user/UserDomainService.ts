import {injectable, inject} from 'inversify';
import TYPES from '@/inversify/types';
import {auth} from '@/firebase/index';
import User from './User';
import IUserRepository from '@/domain/application/userApplicationService/IUserRepository';

@injectable()
export default class UserDomainService {
  constructor(@inject(TYPES.IUserRepository) private userRepository: IUserRepository) {}

  public async loginWithEmailAndPassword(email: string, password: string): Promise<Identifier> {
    const userCredential = await auth().signInWithEmailAndPassword(email, password);
    if (userCredential.user === null) {
      throw Error('自動loginに失敗しました');
    }
    return userCredential.user.uid;
  }

  public login(): Promise<User> {
    return new Promise((resolve, reject) => {
      auth().onAuthStateChanged((authUser) => {
        if (authUser) {
          resolve(this.userRepository.findById(authUser.uid));
        } else {
          reject('認証に失敗');
        }
      });
    });
  }
}
