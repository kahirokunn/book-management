import { IAuthApplicationService } from '@/boundary/authApplicationService/IAuthApplicationService'
import { IUser } from '@/boundary/userApplicationService/InOutType'
import { ILogger } from '@/drivers/ILogger'
import { UserBLoC } from '@/query/bloc/user/UserBLoC'
import { RootState } from '@/store/root'
import { inject, injectable } from 'inversify'
import { Subscription } from 'rxjs'
import {
  action,
  combineAction,
  combineMutation,
  mutation,
} from 'typescript-fsa-vuex'
import { changeRoute } from '../router/action'
import {
  actionCreator,
  deposeUser,
  successUserLogin,
  userLogin,
} from './action'

const startedSubscribe = actionCreator<{
  subscription: Subscription,
  authInfo: ReturnType<typeof successUserLogin>['payload']['authInfo'],
}>('STARTED_SUBSCRIBE')
const failureLogin = actionCreator('FAILURE_LOGIN')
const receiveUserFromStream = actionCreator<{user: IUser}>('RECEIVE_USER_FROM_STREAM')

type State = {
  isInitialized: boolean,
  hasReceived: boolean,
  isLoggedIn: boolean,
  isEmailVerified: boolean,
  user: IUser | null,
  subscriptions: Subscription[],
}

const initialState = (): State => ({
  isInitialized: false,
  hasReceived: false,
  isLoggedIn: false,
  isEmailVerified: false,
  user: null,
  subscriptions: [],
})

@injectable()
export class AuthModule {
  constructor(
    @inject(ILogger)
    private readonly logger: ILogger,
    @inject(IAuthApplicationService)
    private readonly authApp: IAuthApplicationService,
    @inject(UserBLoC)
    private readonly userBloc: UserBLoC,
  ) {}

  public state() {
    return initialState()
  }

  get mutations() {
    return combineMutation<State>(
      mutation(startedSubscribe, (state, action) => {
        state.isLoggedIn = true
        state.isEmailVerified = action.payload.authInfo.isEmailVerified
        state.subscriptions.push(action.payload.subscription)
      }),
      mutation(failureLogin, (state) => {
        state.isInitialized = true
        state.isLoggedIn = false
        state.user = initialState().user
      }),
      mutation(deposeUser, (state) => {
        state.subscriptions.map((subscription) => subscription.unsubscribe())
      }),
      mutation(receiveUserFromStream, (state, action) => {
        this.logger.info('receiveUserFromStream', action.payload)
        state.isInitialized = true
        state.hasReceived = true
        state.user = action.payload.user
      }),
    )
  }

  get actions() {
    return combineAction<State, RootState>(
      action(userLogin, async ({commit, dispatch}) => {
        try {
          const authInfo = await this.authApp.login()
          await Promise.all([
            dispatch(successUserLogin({authInfo})),
            dispatch(changeRoute('/')),
          ])
        } catch (e) {
          this.logger.info('ログイン失敗', e)
          commit(failureLogin())
        }
      }),
      action(successUserLogin, async ({commit, dispatch}, action) => {
        const { authInfo } = action.payload
        this.logger.info('ログイン成功', authInfo)
        const subscription = this.userBloc
          .user$
          .subscribe((user) => {
            dispatch(receiveUserFromStream({user}))
          })
        commit(startedSubscribe({authInfo, subscription}))
        this.userBloc.fetchUserById(authInfo.userId)
      }),
      action(receiveUserFromStream, async ({state, commit, dispatch}, action) => {
        if (!state.hasReceived) {
          dispatch(changeRoute('/'))
        }
        commit(receiveUserFromStream(action.payload))
      }),
    )
  }
}
