import { navbar } from '@/data/config';
import Link from 'next/link';

export default function Navbar() {
  return (
        <div className="pt-6 flex justify-center items-center max-w-4xl m-auto w-full cursor-pointer flex-wrap flex-col md:flex-row">
            <nav>
            <Link href={navbar.flink}><a className="mr-5 hover:text-gray-900 dark:hover:text-gray-100"><span className="link link-underline link-underline-black">{navbar.first}</span></a></Link>
            <Link href={navbar.slink}><a className="mr-5 hover:text-gray-900 dark:hover:text-gray-100"><span className="link link-underline link-underline-black">{navbar.second}</span></a></Link>
            <Link href={navbar.tlink}><a className="mr-5 hover:text-gray-900 dark:hover:text-gray-100"><span className="link link-underline link-underline-black">{navbar.third}</span></a></Link>
            <Link href={navbar.folink}><a className="lg:mr-56 hover:text-gray-900 dark:hover:text-gray-100"><span className="link link-underline link-underline-black">{navbar.fourth}</span></a></Link>
            </nav>    
            <a href={navbar.filink} className="block gradient-border transition transition-300 rounded-md px-4 py-2 headline hover:gradient-bg hover:text-off-white group flex gap-2 whitespace-nowrap" download="">
            <div className="block headline group-hover:text-off-white">{navbar.fifth}</div>
            </a>    
        </div>
  );
}
