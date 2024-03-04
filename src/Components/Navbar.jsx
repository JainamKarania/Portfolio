import React , {useState} from 'react'
import {Link} from 'react-scroll'
import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
export const Navbar = () => {
  const [isNav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!isNav);
  };
  return (
    <>
    <div>
    <header>
    <nav className="bg-transparent py-4 fixed w-full z-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex pt-3 justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="home" spy={true} smooth={true} offset={-70} duration={500} className="text-xl font-bold text-white cursor-pointer">Jainam's Portfolio</Link>
          </div>
          <div className="hidden md:block">
            <div className="flex space-x-4 gap-6">
              <Link to="aboutme" spy={true} smooth={true} offset={-70} duration={500} className="list-none text-xl"><a className='no-underline hover:text-blue-500' href="">About Me</a></Link>
              <Link to="projects" spy={true} smooth={true} offset={-70} duration={500} className="list-none text-xl"><a className='no-underline hover:text-blue-500' href="">Projects</a></Link>
              <Link to="skills" spy={true} smooth={true} offset={-70} duration={500} className="list-none text-xl"><a className='no-underline hover:text-blue-500' href="">Skills</a></Link>
              <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className="list-none text-xl"><a className='no-underline hover:text-blue-500' href="">Contact Me</a></Link>
            </div>
          </div>
          <div onClick={handleNav} className="block md:hidden">
        {!isNav ? (
          <IoCloseOutline color="white" size={25} />
        ) : (
          <HiMenuAlt3 color="white" size={25} />
        )}
      </div>
      <div
        className={
          !isNav
            ? "fixed left-0 top-0 w-3/5 h-full px-4 ease-in-out duration-500 bg-black "
            : "fixed left-[-100%]"
        }
      >
        <div className='flex flex-col'>
        <ul className="pt-20 flex flex-col gap-4 mb-8">
        <Link to="aboutme" spy={true} smooth={true} offset={-70} duration={500} className="list-none text-xl"><a className='no-underline hover:text-blue-500' href="">About Me</a></Link>
              <Link to="projects" spy={true} smooth={true} offset={-70} duration={500} className="list-none text-xl"><a className='no-underline hover:text-blue-500' href="">Projects</a></Link>
              <Link to="skills" spy={true} smooth={true} offset={-70} duration={500} className="list-none text-xl"><a className='no-underline hover:text-blue-500' href="">Skills</a></Link>
              <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className="list-none text-xl"><a className='no-underline hover:text-blue-500' href="">Contact Me</a></Link>
        </ul>
        </div>
        </div>
        </div>
      </div>
    </nav>
    </header>
    </div>
    </>
  )
}
