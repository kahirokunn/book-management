export function pathFormatter(path: string) {
  return `/${path.split('/').filter((item) => item !== '').join('/')}`
}
