import Head from 'next/head'
import '../styles/globals.scss'

function App({ Component, pageProps }) {

	return (
		<div className="text-base text-gray-700">
			<Head>
				<title>Proluo</title>
				<meta property="og:title" content="Proluo" key="title" />
			</Head>
			<Component {...pageProps} />
		</div>
	)
}

export default App
