import './style.css'
import DP from '../assets/Profile(2).jpg'
export const AboutMe = () => {
  return (
    <div>
      <section className="py-20">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="flex">
                    <div className="flex w-full justify-start">
                       <img className='w-96 h-96 object-cover rounded-full max-w-full order-1' src={DP} alt="" />
                    </div>
                    <div className="flex w-full items-center justify-center flex-col order-2">
                    <div className="flex items-center justify-center mb-12">
                    <h2 className="text-5xl">About Me</h2>
                      </div>
                      <p className='text-xl'>I am Jainam Karania, recently completed  MCA from Jain University , I have done my BCA from Shri Manilal Kadakia College which is located in Ankleshwar.
                          I am very self-motivated person looking for the job in particular with Android and my prefered language I am working on is Java. I have knowledge in MySQL, Firebase as well as in MongoDB  databases. 
                          I am looking for a great experience in Android developer and like to grow with this company to build my career as a Fullstack Java Developer.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}


