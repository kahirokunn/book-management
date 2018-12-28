import {generate} from '@/submodules/store/UniqueActionTypeGenerator'

const namespace = 'containers/eventHub'

export const UPDATED_USER_PROFILE = generate('UPDATED_USER_PROFILE', namespace)
