export const seo = {
  title: 'KaoYen Blog | 旅游达人，留学顾问，国际贸易经理，死理性派，工程师',
  description:
    '我是kaoyen，一位旅游达人，留学顾问和国际贸易经理。我注重理性思维，善于分析和执行。我的工程师背景让我能够在各种情境下找到创新的解决方案，并且将其付诸实践。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://cali.so'
      : 'http://localhost:3000'
  ),
} as const
