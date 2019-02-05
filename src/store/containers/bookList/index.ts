import { IBook } from '@/boundary/bookApplicationService/InOutType'
import { BookBLoC } from '@/query/bloc/book/BookListBLoC'
import { Logger } from '@/serviceLocator/Logger'
import { inject, injectable } from 'inversify'
import { Subscription } from 'rxjs'
import {
  action,
  actionsToMutations,
  combineAction,
  combineMutation,
  mutation,
} from 'typescript-fsa-vuex'
import {
  actionCreator,
  depose,
  initialize,
  seeMore,
} from './action'

const receivedBooks = actionCreator<{ books: IBook[] }>('RECEIVED_BOOKS')
const setSubscription = actionCreator<{subscription: Subscription}>('SET_SUBSCRIPTION')

export enum ScreenState {
  INITIAL_FETCHING,
  STANDBY,
}

type State = {
  screenState: ScreenState,
  subscriptions: Subscription[],
  books: {[id: string]: IBook},
}

const initialState = (): State => ({
  screenState: ScreenState.INITIAL_FETCHING,
  subscriptions: [],
  books: {},
})

@injectable()
export class BookListModule {
  constructor(
    @inject(BookBLoC)
    private readonly bookBLoC: BookBLoC,
  ) {}

  public state() {
    return initialState()
  }

  get mutations() {
    return combineMutation<State>(
      mutation(setSubscription, (state, action) => {
        state.subscriptions.push(action.payload.subscription)
      }),
      mutation(receivedBooks, (state, action) => {
        if (state.screenState === ScreenState.INITIAL_FETCHING) {
          state.screenState = ScreenState.STANDBY
        }
        const reveivedBooksDict = action
          .payload
          .books
          .reduce((prev, book) => Object.assign(prev, {[book.id]: book}), {})
        state.books = Object.assign({}, state.books, reveivedBooksDict)
      }),
      mutation(depose, (state) => {
        state.subscriptions.map((subscription) => subscription.unsubscribe())
      }),
    )
  }

  get actions() {
    return combineAction<State, any>(
      action(initialize, ({commit}) => {
        const subscription = this
          .bookBLoC
          .books$
          .subscribe((books) => {
            Logger.getInstance().info('receivedBooks', books)
            commit(receivedBooks({ books }))
          })
        this.bookBLoC.fetchBook()
        commit(setSubscription({ subscription }))
      }),
      action(seeMore, ({state}) => {
        const lastBook = Object.values(state.books).reduce((a, b) => a.updatedAt > b.updatedAt ? a : b)
        this.bookBLoC.fetchBook(lastBook.updatedAt)
      }),
      actionsToMutations(depose),
    )
  }
}
