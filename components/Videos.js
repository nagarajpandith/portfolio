import Image from 'next/image';
import { videos } from '@/data/config';

export default function Videos() {
  return (
    <div className="">
      <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max ">
          {videos.title}
        </h2>
      </div>
      <p className="text-lg">{videos.desc}</p>
      <div className=" mt-8">
        {videos.videos.map((item, index) => {
          return (
            <div
              key={index}
              className="p-6 border border-lightText rounded-xl mb-4"
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="flex items-center flex-wrap -m-3 pt-5">
                {item.link && (
                  <a
                    href={`${item.link}`}
                    className="flex items-center  py-1 px-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/static/icons/link.svg"
                      width={18}
                      height={18}
                      alt="Link icon"
                    />
                    <span className="ml-2  text-lightText  transition-colors duration-500">
                      {item.info}
                    </span>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <a className="hover:text-sky-400 text-lg" href="https://www.youtube.com/c/TheMaterrwelonn">Watch more videos here.</a>
    </div>
  );
}