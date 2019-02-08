import { createStore } from '@/store/root'
import Vue from 'vue'

type Store = ReturnType<typeof createStore>
type UD = {[key: string]: (state: Store['state']) => any}
type R<T extends UD> = {[P in keyof T]: () => ReturnType<T[P]>}

export function mapComputed<T extends UD>(ud1: T): R<T>
export function mapComputed<T extends UD, U extends UD>(ud1: T, ud2: U): R<T> & R<U>
export function mapComputed<T extends UD, U extends UD, V extends UD>(ud1: T, ud2: U, ud3: V): R<T> & R<U> & R<V>

/**
 * inject root state to mapped functions
 */
export function mapComputed<T extends UD>(...unresolvedDictArray: T[]): {[P in keyof T]: () => ReturnType<T[P]>} {
  const dict: any = unresolvedDictArray.reduce((prev, unresolvedDict) => Object.assign(prev, unresolvedDict) , {})
  return Object
    .keys(dict)
    .reduce((prev, key) => Object.assign(prev, {
      [key](this: Vue) {
        return dict[key](this.$store.state)
      },
    }), {}) as any
}
