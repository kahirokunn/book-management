import {actionCreatorFactory} from 'typescript-fsa-vuex'
import {IUser} from '@/boundary/userApplicationService/InOutType'

const actionCreator = actionCreatorFactory('containers/eventHub')

export const updatedUserProfileEvent = actionCreator<{readonly user: IUser}>('UPDATED_USER_PROFILE')
