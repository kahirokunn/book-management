import { IAuthApplicationService } from '@/boundary/authApplicationService/IAuthApplicationService'
import { Logger } from '@/serviceLocator/Logger'
import {
  successUserLogin,
} from '@/store/middleware/auth/action'
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
    return combineAction<State, any>(
      action(loginByEmailAndPassword, async ({commit, dispatch}, action) => {
        commit(startLogin())
        try {
          const authInfo = await this.authApp.loginWithEmailAndPassword(
            action.payload.email,
            action.payload.password,
          )
          dispatch(successUserLogin({authInfo}))
        } catch (e) {
          Logger.getInstance().error(e)
          commit(failureLogin())
        }
      }),
      actionsToMutations(toStandby),
    )
  }
}
