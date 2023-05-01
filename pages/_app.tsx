import '@/styles/globals.css'
import '../src/base.css'
import '../src/sandbox.css'
import '../src/embla.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

