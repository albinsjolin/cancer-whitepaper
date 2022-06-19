import { appWithTranslation } from 'next-i18next'
import Script from 'next/script'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_TRACKING_ID}`} />
      <Script id="my-script">{`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "${process.env.NEXT_PUBLIC_TRACKING_ID}");`}</Script>
      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(MyApp)
