import Contact from '@/components/Contact';
import Head from 'next/head'
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Stack from '@/components/Stack';
import Blogs from '@/components/Blogs';
import Videos from '@/components/Videos';
import About from '@/components/About';
import { meta } from '@/data/config';

export default function Index() {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <div className="p-6 lg:p-20 max-w-4xl m-auto w-full">
        <Hero />
        <div className="p-0 space-y-10">
          <About />
          <Projects />
          <Blogs />
          <Videos />
          <Stack />
          <Contact />
        </div>
      </div>
    </>
  );
}
