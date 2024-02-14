import Image from 'next/image'
import Balancer from 'react-wrap-balancer'

import { RichLink } from '~/components/links/RichLink'
import { Container } from '~/components/ui/Container'

import AlipayQR from './alipay-qr.jpg'
import ThankYouLetterScreenshot1 from './Arc aagD26w9@2x.png'
import ThankYouLetterScreenshot2 from './Arc ynleUdHy@2x.png'

const title = 'AMA / Ask Me Anything'
const description =
  'Kaoyen offers one-on-one consultation (Ask Me Anything). I have extensive experience in the fields of tourism, study abroad consulting, international trade, rationalist thinking, and engineering background. If you have questions related to travel, study abroad, foreign trade, rational thinking or engineering skills, please consult. Both Chinese and English are available, and we look forward to sharing our experiences and insights with you.'

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
}

export default function AskMeAnythingPage() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Ask Me Anything / Ask Me Anything
        </h1>
        <p className="my-6 text-base text-zinc-600 dark:text-zinc-400">
          <Balancer>{description}</Balancer>
        </p>
      </header>

      <article className="prose dark:prose-invert">
        <h2>Contents of Cosultant and service</h2>
        <p>I can answer the following questions for you:</p>
        <ul>
          <li>
            <b>Travel Tips</b>
            ：First time to travel abroad inexperienced? Language barrier can't communicate? Is it inconvenient to call a car in the hotel? Not easy to exchange foreign currency?
          </li>
          <li>
            <b>Study abroad application Advice</b>：Choosing a country is difficult? Having trouble choosing a school? Don't understand the process of applying to study abroad? Incomplete preparation of materials? Don't know how to pay tuition in foreign currency?
          </li>
          <li>
            <b>International Trade Related</b>
            ：Choosing a country is difficult? Having trouble choosing a school? Don't understand the process of applying to study abroad? Incomplete preparation of materials? Don't know how to pay tuition in foreign currency?
          </li>
          <li>
            <b>International Trade Related</b>：Foreign trade transport problems? Having trouble clearing customs?
          </li>
        </ul>

        <h2>定价</h2>
        <p>我的一对一咨询的价格为：</p>
        <ul>
          <li>
            <strong>¥150 - 30分钟</strong>
          </li>
          <li>
            <strong>¥300 - 60分钟</strong>
          </li>
        </ul>

        <p className="flex justify-center md:block md:justify-start">
          <span className="inline-flex flex-col items-center">
            <Image src={AlipayQR} alt="" className="w-44 dark:brightness-90" />
            <span className="mt-1 text-sm font-medium">Wechat QRCode</span>
          </span>
        </p>
        

        {/* <h2>感谢信</h2>
        <p>
          下面两个截图摘选自两名 Twitter
          朋友的私信，能够帮助到更多的人一直是我的使命：
        </p>
        <p className="grid items-center gap-4 lg:grid-cols-2">
          <Image
            src={ThankYouLetterScreenshot1}
            alt=""
            className="max-w-full"
          />
          <Image
            src={ThankYouLetterScreenshot2}
            alt=""
            className="max-w-full"
          />
        </p> */}
      </article>
    </Container>
  )
}
