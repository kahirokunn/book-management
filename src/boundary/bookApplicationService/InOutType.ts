export enum Owner {
  SELF = 'SELF',
  COMPANY = 'COMPANY',
  OTHER = 'OTHER',
}

export enum BookType {
  PHYSICAL_BOOK = 'PhysicalBook',
  E_BOOK = 'Ebook',
}
export type Evaluation = 1 | 2 | 3 | 4 | 5
export enum PurchasedLocation {
  ONLINE = 'ONLcINE',
  OFFLINE = 'OFFLINE',
}

export type IBook = {
  id: Identifier,
  userId: Identifier,
  title: string,
  purchasedLocation: PurchasedLocation,
  purchasedDatetime: Date,
  description: string,
  type: BookType,
  price: number,
  owner: Owner,

  // 任意
  coverImageFilePath: string | null,
  purchasedUrl: string | null,
  evaluation: Evaluation | null,
  receiptImageFilePath: string | null,
  createdAt: Date,
  updatedAt: Date,
}

export type IRegistrationParams = {
  userId: Identifier,
  title: string,
  purchasedLocation: PurchasedLocation,
  purchasedDatetime: Date,
  description: string,
  type: BookType,
  price: number,
  owner: Owner,

  // 任意
  coverImageFilePath: string | null,
  purchasedUrl: string | null,
  evaluation: Evaluation | null,
  receiptImageFilePath: string | null,
}
