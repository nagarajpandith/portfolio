import Contact from '@/components/Contact';
import Projects from '@/components/Projects';
import Blogs from '@/components/Blogs';
import Videos from '@/components/Videos';
import Navbar from '@/components/Navbar';
import Warning from '@/components/Warning';
import { useState } from 'react';

export default function Works() {
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
        <div className="p-0 space-y-10">
          <Projects />
          <Blogs />
          <Videos />
          <Contact />
        </div>
      </div>
        </>
      )}
    </>
  );
}