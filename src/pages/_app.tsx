import { Layout } from '@components/Layout'
import { cache } from '@emotion/css'
import { CacheProvider } from '@emotion/react'
import GlobalStyles from '@styles/GlobalStyles'
import '@styles/tailwind.css'
import type { AppProps } from 'next/app'

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
