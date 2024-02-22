import './style.css'
import '../assets/herobanner.jpg'
import { TypeAnimation } from 'react-type-animation';
export const Banner = () => {
  return (
    <div>
         <section className='py-40 bg-no-repeat bg-cover border-b border-b-gray-700 bg-overlay'>
            <div class="container max-w-7xl mx-auto px-4">
                <div className="flex flex-col items-center justify-center"> 
                    <div className="flex mx-auto flex-col items-center justify-center gap-4">
                <h1 className='text-2xl'>Hello & Welcome</h1>
                <div>
                 <h3 className='text-2xl'>I'm a <span className='text-7xl color-seablue'>
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
                 /></span></h3></div>
                </div>
            </div>
          </div>
        </section>
    </div>
    
  )
}
export default Banner