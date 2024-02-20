import  {Navbar}  from './Navbar'
import  {Banner}  from './Banner'
import {AboutMe} from './AboutMe'
import { Skills } from './Skills'
const HomeScreen = () => {
  return (
    <div>
        <Navbar />
        <Banner />
        <AboutMe />
        <Skills/>
    </div>
  )
}
export default HomeScreen
