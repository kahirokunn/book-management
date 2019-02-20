import { IUserApplicationService } from '@/boundary/userApplicationService/IUserApplicationService'
import { ILogger } from '@/drivers/ILogger'
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
  closeDialog,
  openDialog,
  toStandby,
  updateProfile,
} from './action'

const startUpdate = actionCreator('START_UPDATE')
const successUpdate = actionCreator('SUCCESS_UPDATE')
const failureSend = actionCreator('FAILURE_SEND')

export enum ScreenState {
  STANDBY,
  SENDING,
  SEND_FAILED,
  SEND_SUCCESS,
}

type State = {
  isOpen: boolean,
  screenState: ScreenState,
}

const initialState = (): State => ({
  isOpen: false,
  screenState: ScreenState.STANDBY,
})

@injectable()
export class ChangeUserProfileFormModule {
  constructor(
    @inject(ILogger)
    private readonly logger: ILogger,
    @inject(IUserApplicationService)
    private readonly userApp: IUserApplicationService,
  ) {}

  public state() {
    return initialState()
  }

  get mutations() {
    return combineMutation<State>(
      mutation(startUpdate, (state) => {
        state.screenState = ScreenState.SENDING
      }),
      mutation(successUpdate, (state) => {
        state.screenState = ScreenState.SEND_SUCCESS
      }),
      mutation(failureSend, (state) => {
        state.screenState = ScreenState.SEND_FAILED
      }),
      mutation(openDialog, (state) => {
        state.isOpen = true
      }),
      mutation(closeDialog, (state) => {
        state.isOpen = false
      }),
      mutation(toStandby, (state) => {
        state.screenState = ScreenState.STANDBY
      }),
    )
  }

  get actions() {
    return combineAction<State, RootState>(
      action(updateProfile, async ({commit}, action) => {
        commit(startUpdate())

        try {
          await this.userApp.update(action.payload.user)
          this.logger.info('ユーザー情報の更新に成功')
          commit(successUpdate())
        } catch (e) {
          this.logger.error(e)
          commit(failureSend())
        }
      }),
      actionsToMutations(
        openDialog,
        closeDialog,
        toStandby,
      ),
    )
  }
}
