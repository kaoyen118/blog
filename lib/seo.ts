export const seo = {
  title: 'KaoYen Blog |  Tourism expert, overseas study consultant, international trade manager, rationalist, engineer',
  description:
    "Hi, I'm kaoyen, a Traveler, Study Abroad Consultant and International Trade Manager. I focus on rational thinking and am good at analyzing and executing. My background as an engineer allows me to find innovative solutions in various situations and put them into practice.",
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://blog-xi-lovat-96.vercel.app'
      : 'http://localhost:3000'
  ),
} as const
