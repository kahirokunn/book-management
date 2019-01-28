import {actionCreatorFactory} from 'typescript-fsa-vuex'
import {IAuthInfo} from '@/boundary/authApplicationService/InOutType'
import {IUser} from '@/boundary/userApplicationService/InOutType'

const actionCreator = actionCreatorFactory('middleware/auth')

// boundary action
export const userLogin = actionCreator('USER_LOGIN')
export const unsubscribeUserData = actionCreator('UNSUBSCRIBE_USER')

export const successUserLogin = actionCreator<{readonly authInfo: IAuthInfo}>('SUCCESS_USER_LOGIN')
export const failureLogin = actionCreator('FAILURE_LOGIN')
export const subscribeUserData = actionCreator<{readonly authInfo: IAuthInfo}>('SUBSCRIBE_USER')
export const receiveUserFromStream = actionCreator<{readonly user: IUser}>('RECEIVE_USER_FROM_STREAM')
