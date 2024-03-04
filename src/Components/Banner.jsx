import './style.css'
import { FaLinkedin , FaGithub} from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";
import '../assets/herobanner.jpg'
import { TypeAnimation } from 'react-type-animation';
export const Banner = () => {
  return (
    <div>
         <section className='py-72 bg-no-repeat bg-cover bg-opacity-40 border-b border-b-gray-700 bg-overlay' id='home'>
             <div className="absolute inset-0 bg-neutral-950 bg-opacity-70"></div>
            <div class="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center justify-center"> 
                    <div className="flex mx-auto flex-col items-center justify-center gap-4">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">Welcome to my Portfolio</h1>
                <div>
                 <h3 className='text-2xl mb-4 sm:text-base'>I'm a <span className='text-7xl color-seablue'>
                  <TypeAnimation 
                    sequence={[
                      'Frontend Developer.',
                      2000, 
                      'Webflow Developer.',
                      2000, 
                      () => {
                        console.log('Sequence completed');
                      },
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '64px', display: 'inline-block' }} 
                 /></span></h3>
                 </div>
                 <div className="flex gap-4 mb-4">
                 <div className="flex space-x-4">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-3xl text-white hover:text-gray-300" /></a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaGithub className="text-3xl text-white hover:text-gray-300" /></a>
              <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer"><TbBrandLeetcode className="text-3xl text-white hover:text-gray-300" /></a>
            </div>
            </div>
                   <button className='flex p-4 bg-green-600 border-none rounded-2xl'>Download CV</button>
                </div>
              
            </div>
          </div>
        </section>
    </div>
     )
    }