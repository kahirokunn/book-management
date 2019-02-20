import { IAuthApplicationService } from '@/boundary/authApplicationService/IAuthApplicationService'
import { ILogger } from '@/drivers/ILogger'
import router from '@/router'
import { successUserLogin } from '@/store/middleware/auth/action'
import { inject, injectable } from 'inversify'
import {
  action,
  actionsToMutations,
  combineAction,
  combineMutation,
  mutation,
} from 'typescript-fsa-vuex'
import {
  actionCreator,
  toStandby,
  userRegistration,
} from './action'

const startRegistration = actionCreator('START_REGISTRATION')
// https://firebase.google.com/docs/reference/js/firebase.auth.Auth#createUserWithEmailAndPassword
type ErrorCode =
  'auth/email-already-in-use' | 'auth/invalid-email' |
  'auth/operation-not-allowed' | 'auth/weak-password'

const failureRegistration = actionCreator<{readonly code: ErrorCode}>('FAILURE_REGISTRATION')

export enum ScreenState {
  STANDBY,
  SENDING,
  SEND_FAILED,
}

type State = {
  screenState: ScreenState,
  errorCode: ErrorCode | '',
}

const initialState = (): State => ({
  screenState: ScreenState.STANDBY,
  errorCode: '',
})

@injectable()
export class UserRegistrationFormModule {
  constructor(
    @inject(ILogger)
    private readonly logger: ILogger,
    @inject(IAuthApplicationService)
    private readonly authApp: IAuthApplicationService,
  ) {}

  public state() {
    return initialState()
  }

  get mutations() {
    return combineMutation<State>(
      mutation(startRegistration, (state) => {
        state.screenState = ScreenState.SENDING
      }),
      mutation(toStandby, (state) => {
        state.screenState = ScreenState.STANDBY
      }),
      mutation(failureRegistration, (state, action) => {
        state.errorCode = action.payload.code
        state.screenState = ScreenState.SEND_FAILED
      }),
    )
  }

  get actions() {
    return combineAction<State, any>(
      actionsToMutations(toStandby),
      action(userRegistration, async ({commit, dispatch}, action) => {
        commit(startRegistration())
        try {
          const authInfo = await this.authApp.registration(action.payload)
          this.logger.info('ユーザー登録成功', authInfo)
          dispatch(successUserLogin({authInfo}))
          router.push('/')
        } catch (e) {
          commit(failureRegistration(e))
          this.logger.info('ユーザー登録失敗')
        }
      }),
    )
  }
}
