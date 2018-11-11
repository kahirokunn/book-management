export function isProd() {
  return process.env.NODE_ENV === 'production'
}

export function isTest() {
  return process.env.NODE_ENV === 'test'
}
