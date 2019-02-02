import {
  BookType,
  IBook,
  Owner,
  PurchasedLocation,
} from '@/boundary/bookApplicationService/InOutType'
import uuid from 'uuid'

export function bookFactory(params?: Partial<IBook>): IBook {
  const date = new Date()
  return {
    id: uuid(),
    userId: '',
    title: '',
    purchasedLocation: PurchasedLocation.ONLINE,
    purchasedDatetime: date,
    description: '',
    type: BookType.PHYSICAL_BOOK,
    price: 1000,
    owner: Owner.COMPANY,
    purchasedUrl: '',
    downloadUrl: '',
    coverImageFilePath: '',
    evaluation: null,
    receiptImageFilePath: '',
    createdAt: date,
    updatedAt: date,
    ...params,
  }
}
