import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Stack from '@/components/Stack';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Navbar from '@/components/Navbar';
import Warning from '@/components/Warning';
import { useState } from 'react';

export default function Index() {
  const [showPage, setShowPage] = useState(false);

  const handleContinue = () => {
    setShowPage(true);
  };

  return (
    <>
    {!showPage && <Warning onContinue={handleContinue} />}
      {showPage&&(
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
      )}
    </>
  );
}
