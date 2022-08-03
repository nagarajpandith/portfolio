import Image from 'next/image';
import { hero } from '@/data/config';

export default function Hero() {
  return (
    <div className="mb-14">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="w-20 h-20 rounded-full relative overflow-hidden">
          <Image
            src="/static/profile.png"
            layout="fill"
            objectFit="contain"
            alt="Nagaraj"
          />
        </div>
      </div>
      <h1 className="mt-5 mb-4">{hero.title}<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-purple-400 dark:to-pink-600 dark:text-transparent"> {hero.name}</span></h1>
      <p className="text-lg">{hero.desc}</p>
    </div>
  );
}