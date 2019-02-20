import { IAuthApplicationService } from '@/boundary/authApplicationService/IAuthApplicationService'
import { ILogger } from '@/drivers/ILogger'
import {
  successUserLogin,
} from '@/store/middleware/auth/action'
import { RootState } from '@/store/root'
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
  loginByEmailAndPassword,
  toStandby,
} from './action'

const startLogin = actionCreator('START_LOGIN')
const failureLogin = actionCreator('FAILURE_LOGIN')

export enum ScreenState {
  STANDBY,
  SENDING,
  LOGIN_FAILED,
}

type State = {
  screenState: ScreenState,
}

const initialState = (): State => ({
  screenState: ScreenState.STANDBY,
})

@injectable()
export class LoginFormModule {
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
      mutation(startLogin, (state) => {
        state.screenState = ScreenState.SENDING
      }),
      mutation(failureLogin, (state) => {
        state.screenState = ScreenState.LOGIN_FAILED
      }),
      mutation(toStandby, (state) => {
        state.screenState = ScreenState.STANDBY
      }),
    )
  }

  get actions() {
    return combineAction<State, RootState>(
      action(loginByEmailAndPassword, async ({commit, dispatch}, action) => {
        commit(startLogin())
        try {
          const authInfo = await this.authApp.loginWithEmailAndPassword(
            action.payload.email,
            action.payload.password,
          )
          dispatch(successUserLogin({authInfo}))
        } catch (e) {
          this.logger.error(e)
          commit(failureLogin())
        }
      }),
      actionsToMutations(toStandby),
    )
  }
}
