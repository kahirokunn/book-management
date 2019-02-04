import { IAuthApplicationService } from '@/boundary/authApplicationService/IAuthApplicationService'
import { IUser } from '@/boundary/userApplicationService/InOutType'
import { UserBLoC } from '@/query/bloc/user/UserBLoC'
import router from '@/router'
import { Logger } from '@/serviceLocator/Logger'
import { inject, injectable } from 'inversify'
import { Subscription } from 'rxjs'
import {
  action,
  combineAction,
  combineMutation,
  mutation,
} from 'typescript-fsa-vuex'
import {
  actionCreator,
  deposeUser,
  successUserLogin,
  userLogin,
} from './action'

const beforeSubscribe = actionCreator<ReturnType<typeof successUserLogin>['payload']>('BEFORE_SUBSCRIBE')
const startedSubscribe = actionCreator<{subscription: Subscription}>('STARTED_SUBSCRIBE')
const failureLogin = actionCreator('FAILURE_LOGIN')
const receiveUserFromStream = actionCreator<{user: IUser}>('RECEIVE_USER_FROM_STREAM')

type State = {
  isInitialized: boolean,
  isLoggedIn: boolean,
  isEmailVerified: boolean,
  user: IUser | null,
  subscriptions: Subscription[],
}

const initialState = (): State => ({
  isInitialized: false,
  isLoggedIn: false,
  isEmailVerified: false,
  user: null,
  subscriptions: [],
})

@injectable()
export class AuthModule {
  constructor(
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
      mutation(beforeSubscribe, (state, action) => {
        state.isLoggedIn = true
        state.isEmailVerified = action.payload.authInfo.isEmailVerified
      }),
      mutation(startedSubscribe, (state, action) => {
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
        Logger.getInstance().info('receiveUserFromStream', action.payload)
        if (!state.isInitialized) {
          state.isInitialized = true
        }
        state.user = action.payload.user
      }),
    )
  }

  get actions() {
    return combineAction<State, any>(
      action(userLogin, async ({commit, dispatch}) => {
        try {
          const authInfo = await this.authApp.login()
          await dispatch(successUserLogin({authInfo}))
          router.push('/')
        } catch (e) {
          Logger.getInstance().info('ログイン失敗', e)
          commit(failureLogin())
        }
      }),
      action(successUserLogin, async ({commit}, action) => {
        const { authInfo } = action.payload
        Logger.getInstance().info('ログイン成功', authInfo)
        commit(beforeSubscribe({authInfo}))
        const subscription = this.userBloc
          .user$(authInfo.userId)
          .subscribe((user) => commit(receiveUserFromStream({user})))
        commit(startedSubscribe({subscription}))
      }),
    )
  }
}
