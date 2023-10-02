import Contact from '@/components/Contact';
import Projects from '@/components/Projects';
import Blogs from '@/components/Blogs';
import Videos from '@/components/Videos';
import Navbar from '@/components/Navbar';

export default function Works() {
  return (
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
  );
}
