import {
  BookType,
  Evaluation,
  Owner,
  PurchasedLocation,
} from '@/boundary/bookApplicationService/InOutType'
import firebase from 'firebase/app'
import * as Pring from 'pring'

const modelName = 'book'

export class Book extends Pring.Base {
  public static getModelName() {
    return modelName
  }

  @Pring.property public userId!: Identifier
  @Pring.property public title!: string
  @Pring.property public purchasedLocation!: PurchasedLocation
  @Pring.property public purchasedDatetime!: firebase.firestore.Timestamp
  @Pring.property public description!: string
  @Pring.property public type!: BookType
  @Pring.property public price!: number
  @Pring.property public owner!: Owner
  @Pring.property public purchasedUrl!: string
  @Pring.property public downloadUrl!: string

  // 任意
  @Pring.property public coverImageFilePath!: string | null
  @Pring.property public evaluation!: Evaluation | null
  @Pring.property public receiptImageFilePath!: string | null

  public getModelName() {
    return modelName
  }
}
