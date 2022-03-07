import { about } from '@/data/config';

export default function Hero() {
  return (
    <div id="about" className="mb-20">
    <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-purple-400 dark:to-pink-600 dark:text-transparent">
          {about.title}
        </h2>
    </div>
    {about.desc}
    </div>
  );
}