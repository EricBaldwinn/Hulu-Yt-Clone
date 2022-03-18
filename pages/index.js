import Head from 'next/head'
import { Header } from '../components/Header'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <h1>Lets build hulu 2.0</h1>

    {/* Header component */}
    <Header />

    {/* Nav */}
    </div>
  )
}
