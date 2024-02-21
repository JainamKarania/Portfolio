import './style.css'
import Logo from '../assets/Logo.png'
export const Projects = () => {
  return (
    <div>
        <section className="section border-bottom">
            <div className="container">
            <div className="skills-heading">
                    <h2 className="heading-h2 size-big">Projects</h2>
                </div>
                <div className="slider">
                  <div className="project-card">
                    <div className="project-img-wrapper">
                    <div className="project-logo bg-navy">
                        <img className='project-img' src={Logo} alt="" />
                    </div>    
                    </div>
                        <div className="project-content">
                            <h3 className="heading-h3 text-center">TheMoviesHub - TMH</h3>
                            <p className="paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, perferendis!</p>
                            <div className="skills-wrapper">
                            <h4 className='heading-h4 color-aqua skills bg-black'>React</h4>
                            <h4 className='heading-h4 color-orange skills bg-black'>Redux</h4>
                            <h4 className='heading-h4 color-orange skills bg-black'>Firebase</h4>
                            <h4 className='heading-h4 color-seablue skills bg-black'>Tailwind</h4>
                            </div>
                        </div>
                        <div className="button-wrapper">
                        <button className="button skills text-white bg-color-green">Read More</button>
                        <button className="button skills text-white bg-color-green">View Project</button>
                        </div>
                    </div>
                    <div className="project-card">
                    <div className="project-img-wrapper">
                    <div className="project-logo bg-black">
                        <img className='project-img' src={Logo} alt="" />
                    </div>    
                    </div>   
                        <div className="project-content">
                            <h3 className="heading-h3 text-center">TheMoviesHub - TMH</h3>
                            <p className="paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, perferendis!</p>
                            <div className="skills-wrapper">
                            <h4 className='heading-h4 color-aqua skills bg-black'>React</h4>
                            <h4 className='heading-h4 color-orange skills bg-black'>Redux</h4>
                            <h4 className='heading-h4 color-orange skills bg-black'>Firebase</h4>
                            <h4 className='heading-h4 color-seablue skills bg-black'>Tailwind</h4>
                            </div>
                        </div>
                        <div className="button-wrapper">
                        <button className="button skills text-white bg-color-green">Read More</button>
                        <button className="button skills text-white bg-color-green">View Project</button>
                        </div>
                    </div>
                    <div className="project-card">
                    <div className="project-img-wrapper">
                    <div className="project-logo bg-black">
                        <img className='project-img' src={Logo} alt="" />
                    </div>    
                    </div>  
                        <div className="project-content">
                            <h3 className="heading-h3 text-center">TheMoviesHub - TMH</h3>
                            <p className="paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, perferendis!</p>
                            <div className="skills-wrapper">
                            <h4 className='heading-h4 color-aqua skills bg-black'>React</h4>
                            <h4 className='heading-h4 color-orange skills bg-black'>Redux</h4>
                            <h4 className='heading-h4 color-orange skills bg-black'>Firebase</h4>
                            <h4 className='heading-h4 color-seablue skills bg-black'>Tailwind</h4>
                            </div>
                        </div>
                        <div className="button-wrapper">
                        <button className="button skills text-white bg-color-green">Read More</button>
                        <button className="button skills text-white bg-color-green">View Project</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
