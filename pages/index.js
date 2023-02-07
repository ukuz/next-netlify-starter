import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>弓枚</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="碎叶集" />
        <p className="description">
          of song & culture.
        </p>
      </main>

      <Footer />
    </div>
  )
}
