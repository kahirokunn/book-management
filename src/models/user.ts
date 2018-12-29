import firebase from 'firebase/app'
import * as Pring from 'pring'

const modelName = 'user'

export default class User extends Pring.Base {
  public static getModelName() {
    return modelName
  }

  @Pring.property public displayName!: string
  @Pring.property public iconFilepath!: string
  @Pring.property public emailAddress!: string
  @Pring.property public firstName!: string
  @Pring.property public familyName!: string
  @Pring.property public firstNameKana!: string
  @Pring.property public familyNameKana!: string
  @Pring.property public birthday!: firebase.firestore.Timestamp
  @Pring.property public hireDate!: firebase.firestore.Timestamp
  @Pring.property public gender!: Gender

  public getModelName() {
    return modelName
  }
}
