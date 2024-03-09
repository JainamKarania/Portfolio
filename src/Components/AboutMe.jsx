import DP from '../assets/Profile(2).jpg'
export const AboutMe = () => {
  const description = [
    {
      content : "I am Jainam Karania a Frontend & Webflow developer with a strong educational background, having completed a Master's in Computer Applications (MCA) from Jain University, Bangalore, and a Bachelor's in Computer Applications (BCA) from Shri Manilal Kadakia College, Ankleshwar, with comprehensive understanding of both theoretical concepts and practical applications in the field of computer science.With a keen interest in frontend web development, I have honed skills through hands-on experience and continuous learning ,and demonstrated proficiency in leveraging technologies such as HTML, CSS, JavaScript, and frameworks like React.js to create visually appealing and user-friendly web interfaces.I have also knowledge in Webflow, a popular visual development tool, enables me to efficiently design and develop responsive websites with ease."
    }
  ]
  return (
    <div>
      <section className="py-20" id='aboutme'>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col gap-8 md:flex-row items-center justify-center space-y-6 md:space-y-0">
        <div className="md:w-1/2">
          <img src={DP} alt="Profile" className="rounded-full w-96 h-96 object-cover object-center" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl text-center font-bold mb-8">About Me</h2>
          {description.map((descript) => (
          <p className="text-white text-lg">{descript.content}</p>
          ))}
        </div>
      </div>
    </div>
        </section>
    </div>
  )
}


