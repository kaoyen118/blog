export function url(path = '') {
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://blog-xi-lovat-96.vercel.app/'
      : 'http://localhost:3000'

  return new URL(path, baseUrl)
}
