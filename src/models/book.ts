import firebase from 'firebase/app'
import * as Pring from 'pring'

const modelName = 'book'

enum Owner {
  SELF = 'SELF',
  COMPANY = 'COMPANY',
  OTHER = 'OTHER',
}

type BookType = 'Ebook' | 'PhysicalBook'
type Evaluation = 1 | 2 | 3 | 4 | 5 | null

export default class Book extends Pring.Base {
  public static getModelName() {
    return modelName
  }

  @Pring.property public userId!: Identifier
  @Pring.property public title!: string
  @Pring.property public coverImageFilePath!: string
  @Pring.property public purchasedUrl!: string
  @Pring.property public purchasedDatetime!: firebase.firestore.Timestamp
  @Pring.property public description!: string
  @Pring.property public evaluation!: Evaluation
  @Pring.property public type!: BookType
  @Pring.property public price!: number
  @Pring.property public owner!: Owner
  @Pring.property public receiptImageFilePath!: string

  public getModelName() {
    return modelName
  }
}
