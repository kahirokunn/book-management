import { IBook } from '@/boundary/bookApplicationService/InOutType'
import { BookBLoC } from '@/query/bloc/book/BookListBLoC'
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
  see,
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
  books: IBook[],
}

const initialState = (): State => ({
  screenState: ScreenState.INITIAL_FETCHING,
  subscriptions: [],
  books: [],
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
        state.books = [
          ...state.books,
          ...action.payload.books,
        ]
      }),
      mutation(depose, (state) => {
        state.subscriptions.map((subscription) => subscription.unsubscribe())
      }),
    )
  }

  get actions() {
    return combineAction<State, any>(
      action(see, ({commit}, action) => {
        const subscription = this
          .bookBLoC
          .books$
          .subscribe((books) => commit(receivedBooks({ books })))
        this.bookBLoC.fetchBook(action.payload.startAfter)
        commit(setSubscription({ subscription }))
      }),
      actionsToMutations(depose),
    )
  }
}
