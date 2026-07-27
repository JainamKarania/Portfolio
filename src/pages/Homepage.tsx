import About from "../components/About"
import Certifications from "../components/Certifications"
import Contact from "../components/Contact"
import CTA from "../components/CTA"
import Experience from "../components/Experience"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Projects from "../components/Projects"
import Skills from "../components/Skills"

const Homepage = () => {
  return (
    <div className="bg-black bg-[radial-gradient(#ffffff22_1px,transparent_1px)] bg-size-[20px_20px] w-full">
        <Navbar/>
        <Hero/>
        <About/>
        <Experience/>
        <Projects/>
        <CTA/>
        <Skills/>
        <Certifications/>
        <Contact/>
        {/* Add more sections as needed */}
    </div>
  )
}

export default Homepage