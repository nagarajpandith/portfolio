import Image from 'next/image';
import { contact } from '@/data/config';

export default function Stack() {
  return (
    <div id="contact">
 
      <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-purple-400 dark:to-pink-600 dark:text-transparent">
          {contact.title}
        </h2>
      </div>
        <form className='p-2 my-2 mb-6 flex flex-col border items-center border-gray-200 dark:border-gray-600 '
            action="https://formspree.io/f/xzbwgbnk" method="POST">
          <label className='p-2 flex flex-wrap items-start justify-between w-5/6 max-w-lg'>
            Name:<input className='block w-full p-1 bg-white border border-lightText rounded' 
            type="text" name="name" placeholder='John wick' required/>
          </label>
          <label className='p-2 flex flex-wrap items-start justify-between w-5/6 max-w-lg'>
            Email:<input className='block w-full p-1 bg-white border border-lightText rounded'
             type="email" name="email" placeholder="error404@gmail.com" required/>
          </label>
          <label className='p-2 flex flex-wrap items-start justify-between w-5/6 max-w-lg'>
            Message:<textarea className='block w-full p-1 bg-white border border-lightText rounded'
            name="message" placeholder="Tell me what's in your mind" required></textarea>
          </label>
          <button type="submit" className='m-4 mt-6 px-3 py-2 border border-lightText rounded-lg hover:rounded 
          hover:scale-105 hover:bg-gradient-to-r hover:dark:text-black hover:text-white from-cyan-500 to-blue-500 dark:from-purple-400
           dark:to-pink-600'>Send</button>
        </form>
            <p>
              Email: {' '}
              <a
                className="dark:text-white text-black transition-colors duration-500"
                href={`mailto:${contact.mail}`}
              >
                {contact.mail}
              </a>
            </p>
      <div className="flex space-x-5 mt-5 text-lightText transition-colors duration-500">
        {contact.github && (
          <a
            href={`https://github.com/${contact.github}`}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/static/icons/github.svg"
              width={20}
              height={20}
              className="hover:scale-105"
              alt="Github icon"
            />
          </a>
        )}
        {contact.instagram && (
          <a
            href={`https://www.instagram.com/${contact.instagram}`}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/static/icons/instagram.svg"
              width={20}
              height={20}
              className="hover:scale-105"
              alt="instagram icon"
            />
          </a>
        )}
        {contact.linkedin && (
          <a
            href={`https://linkedin.com/in/${contact.linkedin}`}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/static/icons/linkedin.svg"
              width={20}
              height={20}
              className="hover:scale-105"
              alt="LinkedIn icon"
            />
          </a>
        )}
        {contact.youtube && (
          <a
            href={`https://www.youtube.com/c/${contact.youtube}`}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/static/icons/youtube.svg"
              width={20}
              height={20}
              className="hover:scale-105"
              alt="youtube icon"
            />
          </a>
        )}
      </div>
      <div className="mt-6 text-center text-1xl dark:text-white">Developed & Designed with ❤️ by <a href="https://github.com/nagarajpandith" className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-purple-400 dark:to-pink-600 dark:text-transparent'>Nagaraj Pandith</a></div>
    </div>
  );
}
