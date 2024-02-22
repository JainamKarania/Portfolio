import './style.css'
import Logo from '../assets/Logo.png'
export const Projects = () => {
  return (
    <div>
        <section className="py-20">
            <div className="container max-w-7xl mx-auto px-4">
                
            <div className="flex items-center justify-center mb-16">
                    <h2 className="text-5xl">Projects</h2>
                </div>
                <div className="flex gap-8">
                <div className="flex justify-center gap-8">
                  <div className="flex flex-col p-4 max-w-xl gap-4 bg-neutral-950 rounded-2xl">
                    <div className="flex mb-8">
                    <div className="flex mx-auto rounded-full bg-navy">
                        <img className='w-24 h-24' src={Logo} alt="" />
                    </div>    
                    </div>
                        <div className="flex flex-col gap-4 w-full">
                            <h3 className="text-2xl text-center">TheMoviesHub - TMH</h3>
                            <p className="text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, perferendis!</p>
                            <div className="flex gap-4 p-2">
                            <h4 className='text-base flex flex-col items-center justify-center rounded-lg color-aqua p-2 bg-black opacity-70'>React</h4>
                            <h4 className='text-base flex flex-col items-center justify-center rounded-lg color-orange p-2 bg-black opacity-70'>Redux</h4>
                            <h4 className='text-base flex flex-col items-center justify-center rounded-lg color-orange p-2 bg-black opacity-70'>Firebase</h4>
                            <h4 className='text-base flex flex-col items-center justify-center rounded-lg color-seablue p-2 bg-black opacity-70'>Tailwind</h4>
                            </div>
                        </div>
                        <div className="flex gap-8">
                        <button className="text-base flex flex-col items-center justify-center rounded-lg p-2 text-white bg-color-green">Read More</button>
                        <button className="text-base flex flex-col items-center justify-center rounded-lg p-2  text-white bg-color-green">View Project</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center max-w-full gap-8">
                  <div className="flex flex-col p-4 max-w-xl gap-4 bg-neutral-950 rounded-2xl">
                    <div className="flex mb-8">
                    <div className="flex mx-auto rounded-full bg-navy">
                        <img className='w-24 h-24' src={Logo} alt="" />
                    </div>    
                    </div>
                        <div className="flex flex-col gap-4 w-full">
                            <h3 className="text-2xl text-center">TheMoviesHub - TMH</h3>
                            <p className="text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, perferendis!</p>
                            <div className="flex gap-4 p-2">
                            <h4 className='text-base flex flex-col items-center justify-center rounded-lg color-aqua p-2 bg-black opacity-70'>React</h4>
                            <h4 className='text-base flex flex-col items-center justify-center rounded-lg color-orange p-2 bg-black opacity-70'>Redux</h4>
                            <h4 className='text-base flex flex-col items-center justify-center rounded-lg color-orange p-2 bg-black opacity-70'>Firebase</h4>
                            <h4 className='text-base flex flex-col items-center justify-center rounded-lg color-seablue p-2 bg-black opacity-70'>Tailwind</h4>
                            </div>
                        </div>
                        <div className="flex gap-8">
                        <button className="text-base flex flex-col items-center justify-center rounded-lg p-2 text-white bg-color-green">Read More</button>
                        <button className="text-base flex flex-col items-center justify-center rounded-lg p-2  text-white bg-color-green">View Project</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center max-w-full gap-8">
                  <div className="flex flex-col p-4 max-w-xl gap-4 bg-neutral-950 rounded-2xl">
                    <div className="flex mb-8">
                    <div className="flex mx-auto rounded-full bg-navy">
                        <img className='w-24 h-24' src={Logo} alt="" />
                    </div>    
                    </div>
                        <div className="flex flex-col gap-4 w-full">
                            <h3 className="text-2xl text-center">TheMoviesHub - TMH</h3>
                            <p className="text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, perferendis!</p>
                            <div className="flex gap-4 p-2">
                            <h4 className='text-base flex flex-col items-center justify-center rounded-lg color-aqua p-2 bg-black opacity-70'>React</h4>
                            <h4 className='text-base flex flex-col items-center justify-center rounded-lg color-orange p-2 bg-black opacity-70'>Redux</h4>
                            <h4 className='text-base flex flex-col items-center justify-center rounded-lg color-orange p-2 bg-black opacity-70'>Firebase</h4>
                            <h4 className='text-base flex flex-col items-center justify-center rounded-lg color-seablue p-2 bg-black opacity-70'>Tailwind</h4>
                            </div>
                        </div>
                        <div className="flex gap-8">
                        <button className="text-base flex flex-col items-center justify-center rounded-lg p-2 text-white bg-color-green">Read More</button>
                        <button className="text-base flex flex-col items-center justify-center rounded-lg p-2  text-white bg-color-green">View Project</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
  )
}
