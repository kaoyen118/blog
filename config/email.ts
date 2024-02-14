export const emailConfig = {
  from: 'hi@cali.so',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://blog-xi-lovat-96.vercel.app/`
      : 'http://localhost:3000',
}
