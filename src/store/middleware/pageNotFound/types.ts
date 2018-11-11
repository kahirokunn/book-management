import {generate} from '@/submodules/store/UniqueActionTypeGenerator'

const namespace = 'middleware/pageNotFound/'

export const PAGE_NOT_FOUND = generate('PAGE_NOT_FOUND', namespace)
