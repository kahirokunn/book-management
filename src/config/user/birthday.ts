// 今年から100年前まで選択可能
const thisYear = (new Date()).getFullYear()
export const years = [...Array(100)].map((_, i) => thisYear - i)
export const months = [...Array(12)].map((_, i) => i + 1)
export const days = [...Array(31)].map((_, i) => i + 1)
