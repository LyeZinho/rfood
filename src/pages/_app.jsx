import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>rfood</title>
        <meta name="description" content="Random food recipe every time you refresh!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="flex flex-col items-center justify-center min-h-screen p-20"
      >
        <Component {...pageProps} />
      </div>
    </>
  )
}


export default MyApp
