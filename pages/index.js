import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="I, Jack Reis, am a for-hire Product Design Scientist"/>
        <p className="description">
          Over the last 12 years, I’ve also held roles as a Design Technologist, System Educator, and Data Visualization Lead.<br />
          I blend practical considerations with a natural inclination toward beauty and simplicity to create valuable, intuitive, and enjoyable products.<br />
          My most scaled project was at Google on the Nest smart home interfaces; Google holds more than 20% of the global smart speaker market and sold 50 million Google Home devices worldwide in 2021.<br />
          While digital craft holds the majority of my attention, I am also a committed husband, trained yoga instructor, and lifelong learner.<br />
          What fulfills me most is finding new, better ways to be and do things.<br />
        </p>
      </main>

      <Footer />
    </div>
  )
}
