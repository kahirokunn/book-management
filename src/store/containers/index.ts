import { inject, injectable } from 'inversify'
import { BookListModule } from './bookList'
import { ChangeUserProfileFormModule } from './changeUserProfileForm'
import { CreateBookFormModule } from './createBookForm'
import { LoginFormModule } from './loginForm'
import { NavigationModule } from './navigation'
import { UserRegistrationFormModule } from './userRegistrationForm'

export type ContainersState = {
  changeUserProfileForm: ReturnType<ChangeUserProfileFormModule['state']>,
  createBookForm: ReturnType<CreateBookFormModule['state']>,
  loginForm: ReturnType<LoginFormModule['state']>,
  navigation: ReturnType<NavigationModule['state']>,
  userRegistrationForm: ReturnType<UserRegistrationFormModule['state']>,
  bookList: ReturnType<BookListModule['state']>,
}

@injectable()
export class ContainerModule {
  constructor(
    @inject(ChangeUserProfileFormModule)
    public readonly changeUserProfileForm: ChangeUserProfileFormModule,
    @inject(CreateBookFormModule)
    public readonly createBookForm: CreateBookFormModule,
    @inject(LoginFormModule)
    public readonly loginForm: LoginFormModule,
    @inject(NavigationModule)
    public readonly navigation: NavigationModule,
    @inject(UserRegistrationFormModule)
    public readonly userRegistrationForm: UserRegistrationFormModule,
    @inject(BookListModule)
    public readonly bookList: BookListModule,
  ) {}
}
