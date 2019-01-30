import {createStore} from '@/store/root'
import Vue from 'vue'

type Store = ReturnType<typeof createStore>
type ComputedList = {[key: string]: (...params: any[]) => any}
type UnresolvedDictArray = Array<{[key: string]: (state: Store['state']) => any}>

/**
 * inject root state to mapped functions
 */
export function mapComputed(...unresolvedDictArray: UnresolvedDictArray): ComputedList {
  const dict = unresolvedDictArray.reduce((prev, unresolvedDict) => Object.assign(prev, unresolvedDict) , {})
  return Object
    .keys(dict)
    .reduce((prev, key) => Object.assign(prev, {
      [key](this: Vue) {
        return dict[key](this.$store.state)
      },
    }), {})
}
