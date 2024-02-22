import React from 'react'
export const Navbar = () => {
  return (
    <>
    <div>
    <header>
        <nav className='flex items-center content-center bg-transparent w-full fixed z-50'>
            <div className="container max-w-7xl mx-auto">
                <div className="flex items-center">
            <div className="flex flex-col text-2xl mr-auto p-4 cursor-pointer">Jainam's Portfolio</div>
            <div className='flex gap-6'>
                <li className='navlinks'><a href="">About</a></li>
                <li className='navlinks'><a href="">Projects</a></li>
                <li className='navlinks'><a href="">Lets Connect</a></li>
            </div>
            </div>
            </div>
        </nav>
    </header>
    </div>
    </>
  )
}
