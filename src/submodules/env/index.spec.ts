import {isTest, isProd} from './index'

test('test modeの検知がちゃんとできている', () => {
  expect(isTest()).toBe(true)
})

test('test時はprodじゃないのが判定できている', () => {
  expect(isProd()).toBe(false)
})
