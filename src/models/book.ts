import {
  Book as BookType,
} from '@/boundary/bookApplicationService/InOutType'
import firebase from 'firebase/app'
import * as Pring from 'pring'

const modelName = 'book'

export class Book extends Pring.Base {
  public static getModelName() {
    return modelName
  }

  @Pring.property public userId!: BookType['userId']
  @Pring.property public title!: BookType['title']
  @Pring.property public purchasedLocation!: BookType['purchasedLocation']
  @Pring.property public purchasedDatetime!: firebase.firestore.Timestamp
  @Pring.property public description!: string
  @Pring.property public type!: BookType['type']
  @Pring.property public price!: BookType['price']
  @Pring.property public owner!: BookType['owner']

  // 任意
  @Pring.property public coverImageFilePath!: BookType['coverImageFilePath']
  @Pring.property public purchasedUrl!: BookType['purchasedUrl']
  @Pring.property public evaluation!: BookType['evaluation']
  @Pring.property public receiptImageFilePath!: BookType['receiptImageFilePath']

  public getModelName() {
    return modelName
  }
}
