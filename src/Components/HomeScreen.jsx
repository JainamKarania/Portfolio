import  {Navbar}  from './Navbar'
import  {Banner}  from './Banner'
import {AboutMe} from './AboutMe'
import { Skills } from './Skills'
import { Projects } from './Projects'
import {Contact} from './Contact'
import './style.css'

const HomeScreen = () => {
  return (
    <div className='parallax'>
        <Navbar />
        <Banner />
        <Projects />
        <AboutMe />
        <Skills/>
        <Contact />
    </div>
  )
}
export default HomeScreen
