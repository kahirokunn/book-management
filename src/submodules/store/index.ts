import { createStore } from '@/store/root'
import Vue from 'vue'

type Store = ReturnType<typeof createStore>
type UD = {[key: string]: (state: Store['state']) => any}
type R<T extends UD> = {[P in keyof T]: () => ReturnType<T[P]>}

/**
 * inject root state to mapped functions
 */
// tslint:disable-next-line max-line-length
export function mapComputed<T extends UD[]>(...sources: T): T extends Array<infer I> ? (I extends UD ? (a: R<I>) => void : never) extends (a: infer U) => void ? U : never : never {
  const dict: any = sources.reduce((prev, source) => Object.assign(prev, source) , {})
  return Object
    .keys(dict)
    .reduce((prev, key) => Object.assign(prev, {
      [key](this: Vue) {
        return dict[key](this.$store.state)
      },
    }), {}) as any
}
