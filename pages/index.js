import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='text-center text-5xl mt-80'>Portfolio</div>
      </div>
  )
}
