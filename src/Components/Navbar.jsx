import React from 'react'
import {Link} from 'react-scroll'
export const Navbar = () => {
  return (
    <>
    <div>
    <header>
    <nav className="bg-transparent py-4 fixed w-full">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="home" spy={true} smooth={true} offset={-70} duration={500} className="text-xl font-bold text-white cursor-pointer">Jainam's Portfolio</Link>
          </div>
          <div className="hidden md:block">
            <div className="flex space-x-4">
              <Link to="aboutme" spy={true} smooth={true} offset={-70} duration={500} className="navlinks"><a href="">About Me</a></Link>
              <Link to="projects" spy={true} smooth={true} offset={-70} duration={500} className="navlinks"><a href="">Projects</a></Link>
              <Link to="skills" spy={true} smooth={true} offset={-70} duration={500} className="navlinks"><a href="">Skills</a></Link>
              <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className="navlinks"><a href="">Contact Me</a></Link>
            </div>
          </div>
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
    </header>
    </div>
    </>
  )
}
