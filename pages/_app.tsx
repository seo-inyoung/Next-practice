import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
        <header>nextjs project</header>
        <Component {...pageProps} />
    </div>
    );
}