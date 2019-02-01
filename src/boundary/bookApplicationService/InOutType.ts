enum Owner {
  SELF = 'SELF',
  COMPANY = 'COMPANY',
  OTHER = 'OTHER',
}

type BookType = 'Ebook' | 'PhysicalBook'
type Evaluation = 1 | 2 | 3 | 4 | 5
enum PurchasedLocation {
  ONLINE = 'ONLINE',
  OFFLINE = 'OFFLINE',
}

export type Book = {
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
}

export type RegistrationBook = Book & {id?: Identifier}
