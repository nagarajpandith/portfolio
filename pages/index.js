import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Stack from '@/components/Stack';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Navbar from '@/components/Navbar';

export default function Index() {
  return (
    <>
      <Navbar />
      <div className="p-6 lg:p-20 max-w-4xl m-auto w-full">
        <Hero />
        <div className="p-0 space-y-10">
          <About />
          <Experience />
          <Stack />
          <Contact />
        </div>
      </div>
    </>
  );
}
