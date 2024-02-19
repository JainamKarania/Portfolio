import React from 'react'
import './style.css'
import Profile from '../assets/Profile.png'
export const Banner = () => {
  return (
    <div>
         <section className='section'>
            <div class="container">
                <div className="grid">
                    <div className="hero-wrapper">
                <h1>Hello, My Name is <span>Jainam Karania</span></h1> 
                <div>
                 <h3>I'm <span id="element">Frontend Developer</span></h3></div>
                </div>
            
            <div class="hero-image-wrapper">
                <img src={Profile} alt="" />
            </div>
            </div>
            </div>
        </section>
    </div>
    
  )
}
