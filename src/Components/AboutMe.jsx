import './style.css'
import DP from '../assets/Profile(2).jpg'
export const AboutMe = () => {
  return (
    <div>
      <section className="section border-bottom">
            <div className="container">
                <div className="flex">
                    <div className="about-image-wrapper">
                       <img className='DP' src={DP} alt="" />
                    </div>
                    <div className="about-wrapper">
                    <div className="skills-heading">
                    <h2 className="heading-h2 size-big">About Me</h2>
                      </div>
                      <p className='paragraph'>I am Jainam Karania, recently completed  MCA from Jain University , I have done my BCA from Shri Manilal Kadakia College which is located in Ankleshwar.
                          I am very self-motivated person looking for the job in particular with Android and my prefered language I am working on is Java. I have knowledge in MySQL, Firebase as well as in MongoDB  databases. 
                          I am looking for a great experience in Android developer and like to grow with this company to build my career as a Fullstack Java Developer.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}


