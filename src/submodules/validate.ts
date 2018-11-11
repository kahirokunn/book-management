type funcType = (value: any) => void

export function isValid(rule: funcType[], value: any) {
  rule.forEach((func) => {
    const result = func(value)
    if (typeof result === 'string') {
      throw Error(result)
    }
  })
}
