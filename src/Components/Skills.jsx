import './style.css'
import { FaReact ,FaNodeJs } from "react-icons/fa";
import { SiTailwindcss , SiTypescript , SiJavascript,SiHtml5,SiCss3,SiFirebase,SiMysql,SiAmazonapigateway } from "react-icons/si";
export const Skills = () => {
  return (
    <div>
        <section className="section pt-0">
            <div className="container">
                <div className="skills-heading">
                    <h2 className="heading-h2 size-big">Skills</h2>
                </div>
                <div className="skills-grid">
                    <div className="skills-card">
                        <FaReact className='icons color-aqua'/>
                       <div className="skills-content">
                          <h3 className="heading-h3">React</h3>
                       </div>
                    </div>
                    <div className="skills-card">
                        <SiJavascript className='icons color-yellow'/>
                       <div className="skills-content">
                          <h3 className="heading-h3">Javascript</h3>
                       </div>
                    </div>
                    <div className="skills-card">
                        <SiTailwindcss className='icons color-seablue'/>
                       <div className="skills-content">
                          <h3 className="heading-h3">Tailwind CSS</h3>
                       </div>
                    </div>
                    <div className="skills-card">
                        <SiTypescript className='icons color-lightblue'/>
                       <div className="skills-content">
                          <h3 className="heading-h3">TypeScript</h3>
                       </div>
                    </div>
                    <div className="skills-card">
                        <SiAmazonapigateway className='icons'/>
                       <div className="skills-content">
                          <h3 className="heading-h3">API Integration</h3>
                       </div>
                    </div>
                    <div className="skills-card">
                        <SiMysql className='icons color-yellow'/>
                       <div className="skills-content">
                          <h3 className="heading-h3">MySQL</h3>
                       </div>
                    </div>
                    <div className="skills-card">
                        <SiFirebase className='icons color-orange'/>
                       <div className="skills-content">
                          <h3 className="heading-h3">Firebase</h3>
                       </div>
                    </div>
                    <div className="skills-card">
                        <SiHtml5 className='icons color-orange'/>
                       <div className="skills-content">
                          <h3 className="heading-h3">HTML</h3>
                       </div>
                    </div>
                    <div className="skills-card">
                        <SiCss3 className='icons color-seablue'/>
                       <div className="skills-content">
                          <h3 className="heading-h3">CSS</h3>
                       </div>
                    </div>
                    <div className="skills-card">
                        <FaNodeJs className='icons color-green'/>
                       <div className="skills-content">
                          <h3 className="heading-h3">Node</h3>
                       </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
