import '../styles/globals.css'
import Navigation from '../components/navigation'
import type { AppProps } from 'next/app'
import Footer from '../components/footer'
import About from '../components/about'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
