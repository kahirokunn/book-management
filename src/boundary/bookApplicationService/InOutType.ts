export enum Owner {
  SELF = 'SELF',
  COMPANY = 'COMPANY',
  OTHER = 'OTHER',
}

export type BookType = 'Ebook' | 'PhysicalBook'
export type Evaluation = 1 | 2 | 3 | 4 | 5
export enum PurchasedLocation {
  ONLINE = 'ONLINE',
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

export type IRegistrationBook = IBook & {id?: Identifier}
