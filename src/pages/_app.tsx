import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
