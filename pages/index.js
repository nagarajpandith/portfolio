import Head from 'next/head'
import NavBar from "../src/components/Navbar/index"
import Hero from "../src/components/Hero/index"

export default function Home() {
  return <>
      <Head>
        <title>Nagaraj Pandith - Web Developer</title>
        <link rel="icon" href="./logo-dark.png" />
        <meta name="description" content="Nagaraj Pandith - Portfolio" />
        <meta name="keywords" content="nagaraj, pandith, portfolio, web developer, ui designer, frontend web developer, django, nextjs, tailwind, react developer" />
        <meta property="og:site_name" content="nagarajpandith.live" />
        <meta property="og:title" content="Nagaraj Pandith" />
        <meta property="og:description" content="Nagaraj Pandith - Web Developer Portfolio" />
      </Head>

      <NavBar />
      <Hero />

    </>
}
