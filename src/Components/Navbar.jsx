import React from 'react'
import './style.css'
export const Navbar = () => {
  return (
    <>
    <div>
    <header>
        <nav className='navbar'>
            <div className="container">
                <div className="navbar-wrapper">
            <div className="Logo">Jainam's Portfolio</div>
            <div className="nav-menu">
                <ul className='navlinks-wrapper'>
                    <li className='navlinks'><a href="">Services</a></li>
                    <li className='navlinks'><a href="">About</a></li>
                    <li className='navlinks'><a href="">Projects</a></li>
                    <li className='navlinks'><a href="">Lets Connect</a></li>
                </ul>
            </div>
            </div>
            </div>
        </nav>
    </header>
    </div>
    </>
  )
}
