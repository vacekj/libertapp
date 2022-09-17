import { Layout } from '@components/Layout'
import { cache } from '@emotion/css'
import { CacheProvider } from '@emotion/react'
import GlobalStyles from '@styles/GlobalStyles'
import '@styles/tailwind.css'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'

// Router Loading Animation with @tanem/react-nprogress
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <ChakraProvider> */}
      <CacheProvider value={cache}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CacheProvider>
      {/* </ChakraProvider> */}
    </>
  )
}
