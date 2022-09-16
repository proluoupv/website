import Head from 'next/head';
import '../styles/globals.scss';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Proluo</title>
        <meta property="og:title" content="Downtube" key="title" />
        <meta property="og:description" content="Back to blue" key="description" />
        {/* <meta property="og:image" content="./images/metaimage.png" key="image" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
