import  {Navbar}  from './Navbar'
import  {Banner}  from './Banner'
import {AboutMe} from './AboutMe'
import { Skills } from './Skills'
import { Projects } from './Projects'
import {Contact} from './Contact'
import { Footer } from './Footer'
import './style.css'

const HomeScreen = () => {
  return (
    <div>
        <Navbar />
        <Banner />
        <Projects />
        <AboutMe />
        <Skills/>
        <Contact />
        <Footer />
    </div>
  )
}
export default HomeScreen
