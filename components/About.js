import { about } from '@/data/config';
import Link from 'next/link'

export default function Hero() {
  return (
    <div id="about" className="mb-10">
    <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-purple-400 dark:to-pink-600 dark:text-transparent">
          {about.title}
        </h2>
    </div>
    Hello there! A lil&apos; backstory of mine. Technology and Computers always fascinated me since childhood. Back in 2017, I had developed an interest in Cybersecurity and constantly explored the Security field. My curiosity in Web development grew in 2019 observing beautiful Web UIs on Personal and Business web pages. I then started my journey learning basic internet fundamentals, Javascript to Django and other tech throughout my journey. Fast forward to now, I&apos;m a proficient Full-stack web developer, with React in frontend and Django in backend. I also love creating videos on Adobe Premiere Pro and making tiny motion graphics on Adobe After effects as well. Ocassionally, I also write tech articles on 
    <Link href="https://medium.com/@nagarajpandith"><a className='dark:text-gray-300 text-gray-800 cursor-pointer link link-underline link-underline-black'>{' '} Medium</a></Link> and also create videos on my 
    <Link href="https://www.youtube.com/c/TheMaterrwelonn"><a className='dark:text-gray-300 text-gray-800 cursor-pointer link link-underline link-underline-black'>{' '} YouTube{' '} </a></Link>
    channel. While not working on a project, you&apos;ll find me watching a Crime thriller or jamming to some EDM banger.
    <div>
    <Link href="/projects"><a className="text-white text-sm link link-underline link-underline-black">View my Projects &gt;&gt;</a></Link>
    </div>
    </div>
  );
}