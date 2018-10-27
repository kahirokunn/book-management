declare type Unsubscribe = () => void;
declare type Subscriber<T> = (items: T[]) => void;

declare interface IBaseRepository<T> {
  save?: (entity: any) => Promise<T>;
  delete?: (entity: T) => Promise<void>;
  findById?: (id: string) => Promise<T>;
  findByQuery?: (query: any) => Promise<T[]>;
  subscribe?: (subscriber: Subscriber<T>) => Unsubscribe;
}

declare type Identifier = string;
declare type Url = string;
declare type EmailAddress = string;
declare enum Gender {
  MAN = 'MAN',
  WOMAN = 'WOMAN',
}
