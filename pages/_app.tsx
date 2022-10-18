import type { AppProps } from 'next/app'

function YoutubeApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default YoutubeApp
