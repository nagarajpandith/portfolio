import { about } from '@/data/config';
import Link from 'next/link';

export default function Hero() {
  return (
    <div id="about" className="mb-10">
      <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-purple-400 dark:to-pink-600 dark:text-transparent">
          {about.title}
        </h2>
      </div>
      Enthusiastic and self-driven Full Stack Web developer proficient in
      building responsive and scalable web applications using modern tools and
      frameworks. Thrives on challenging projects that drive professional and
      intellectual growth. I am pursuing Final year of B.E. in Computer Science
      & Engineering from N.M.A.M.I.T. Ocassionally, I also write tech articles
      on
      <Link
        href="https://medium.com/@nagarajpandith"
        className="dark:text-gray-300 text-gray-800 cursor-pointer link link-underline link-underline-black"
      >
        {' '}
        Medium
      </Link>{' '}
      and also create videos on my
      <Link
        href="https://www.youtube.com/c/TheMaterrwelonn"
        className="dark:text-gray-300 text-gray-800 cursor-pointer link link-underline link-underline-black"
      >
        {' '}
        YouTube{' '}
      </Link>
      channel. While not working on a project, you&apos;ll find me watching a
      Crime thriller or jamming to some EDM banger.
      <div>
        <Link
          href="/projects"
          className="text-white text-sm link link-underline link-underline-black"
        >
          View my Projects &gt;&gt;
        </Link>
      </div>
    </div>
  );
}
