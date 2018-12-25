import {generate} from '@/submodules/store/UniqueActionTypeGenerator'

const namespace = 'containers/navigation'

export const TOGGLE_DRAWER = generate('TOGGLE_DRAWER', namespace)
export const CLOSE_DRAWER = generate('CLOSE_DRAWER', namespace)
