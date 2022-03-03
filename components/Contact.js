import Image from 'next/image';
import { contact } from '@/data/config';

export default function Stack() {
  return (
    <div>
      <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max ">
          {contact.title}
        </h2>
      </div>
      {contact.mail.map((item, index) => {
          return (
            <div key={index}>
            <p>
              {item.info}:{' '}
              <a
                className="dark:text-white text-black transition-colors duration-500"
                href={`mailto:${item.email}`}
              >
                {item.email}
              </a>
            </p>
            </div>
          );
        })}

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
              alt="youtube icon"
            />
          </a>
        )}
      </div>
      <div className="mt-4 text-center text-1xl">Developed & Designed with ❤️ by <a href="https://github.com/nagarajpandith">Nagaraj Pandith</a></div>
    </div>
  );
}
