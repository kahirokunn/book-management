// 今年から100年前まで選択可能
const thisYear = (new Date()).getFullYear()
export const years = [...Array(100)].map((d, i) => thisYear - i).reverse()
export const months = [...Array(12)].map((d, i) => i + 1)
export const days = [...Array(31)].map((d, i) => i + 1)
