import 'tailwindcss/tailwind.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="//rsms.me/inter/inter.css" />
        <link rel="icon" href="/favicon.ico" />
        <title>Nextjs Tailwind Scoped Styles</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
