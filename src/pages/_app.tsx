import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Boilerplate - NextJs</title>
        <link rel="shortcut icon" href="" />
        <link rel="apple-touch-icon" href="" />
        <meta
          name="description"
          content="A simple project starter to worck with NextJs"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
