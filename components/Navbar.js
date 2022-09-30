import { navbar } from '@/data/config';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const check = theme === 'light'? "moon" : "sun"
  const [ham,setHam]=useState(()=>0)
  return (
        <div className={`pt-6 flex justify-center items-center max-w-4xl m-auto w-full cursor-pointer flex-wrap ${ham?"flex-col":""} md:flex-row` }>
             <div className="p-3 flex justify-center items-center md:hidden">
              <Image
              src={`/static/icons/${theme}ham.svg`}
              width={30}
              height={30}
              alt="Hamburger icon"
              onClick={()=>setHam((prev)=>!prev)}
            />  

             </div>
            <nav className={ham?"flex flex-col justify-center items-center md:block":"hidden md:block"}>
            <Link href={navbar.flink}><a className="p-3 text-gray-700 hover:text-gray-900 dark:hover:text-gray-100 dark:text-gray-400"><span className="link link-underline link-underline-black">{navbar.first}</span></a></Link>
            <Link href={navbar.slink}><a className="p-3 text-gray-700 hover:text-gray-900 dark:hover:text-gray-100 dark:text-gray-400"><span className="link link-underline link-underline-black">{navbar.second}</span></a></Link>
            <Link href={navbar.tlink}><a className="p-3 text-gray-700 hover:text-gray-900 dark:hover:text-gray-100 dark:text-gray-400"><span className="link link-underline link-underline-black">{navbar.third}</span></a></Link>
            <Link href={navbar.folink}><a className="p-3 lg:mr-44 text-gray-700 hover:text-gray-900 dark:hover:text-gray-100 dark:text-gray-400"><span className="link link-underline link-underline-black">{navbar.fourth}</span></a></Link>
            </nav>   
            <a href={navbar.filink} className="lg:mr-5 gradient-border transition transition-300 rounded-md px-4 py-2 headline hover:gradient-bg hover:text-off-white group flex gap-2 whitespace-nowrap" download="">
            <div className="block headline group-hover:text-off-white">{navbar.fifth}</div>
            </a>  
            <Image
              src={`/static/icons/${check}.svg`}
              width={30}
              height={30}
              alt="Toggle theme"
              className="cursor-pointer toggleTheme"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            />   
        </div>
  );
}
