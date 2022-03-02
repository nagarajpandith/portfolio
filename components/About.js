import { about } from '@/data/config';

export default function Hero() {
  return (
    <div className="mb-20">
    <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max ">
          {about.title}
        </h2>
    </div>
    {about.desc}
    </div>
  );
}