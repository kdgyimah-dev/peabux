import { AppProps } from 'next/app';
import Head from "next/head";
import "./globals.css";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Peabux - Pay with Ease, Pay with Peabux</title>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="description" content="Pay with Ease, Pay with Peabux" />
        <meta name="keywords" content="Pay with Ease, Pay with Peabux" />
        {/* <!-- SITE ICON --> */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          href="/favicon/android-chrome-192x192.png"
          sizes="192x192"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta
          name="msapplication-TileImage"
          content="/favicon/android-chrome-192x192.png"
        />
      </Head>

      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}
export default CustomApp;
