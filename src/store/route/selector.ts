import { Store } from '@/store/root'

function route(state: Store['state']) {
  return state.route
}

export default {
  route,
}
