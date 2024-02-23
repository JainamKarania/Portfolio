
import { FaReact ,FaNodeJs } from "react-icons/fa";
import { SiTailwindcss , SiTypescript , SiJavascript,SiHtml5,SiCss3,SiFirebase,SiMysql,SiAmazonapigateway } from "react-icons/si";
export const Skills = () => {
  return (
    <div>
        <section className="py-20" id='skills'>
            <div className="container max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-center mb-12">
                    <h2 className="text-5xl">Skills</h2>
                </div>
                <div className="grid grid-cols-5 grid-rows-1 gap-8">
                    <div className="flex flex-col p-8 gap-4 items-center content-center max-w-80 rounded-lg bg-neutral-950">
                        <FaReact className='bg-transparent w-16 h-16 color-aqua'/>
                       <div className="flex items-center">
                          <h3 className="text-base">React</h3>
                       </div>
                    </div>
                    <div className="flex flex-col p-8 gap-4 items-center content-center max-w-80 rounded-lg bg-neutral-950">
                        <SiJavascript className='bg-transparent w-16 h-16 color-yellow'/>
                       <div className="flex items-center">
                          <h3 className="text-base">Javascript</h3>
                       </div>
                    </div>
                    <div className="flex flex-col p-8 gap-4 items-center content-center max-w-80 rounded-lg bg-neutral-950">
                        <SiTailwindcss className='bg-transparent w-16 h-16 color-seablue'/>
                       <div className="flex items-center">
                          <h3 className="text-base">Tailwind CSS</h3>
                       </div>
                    </div>
                    <div className="flex flex-col p-8 gap-4 items-center content-center max-w-80 rounded-lg bg-neutral-950">
                        <SiTypescript className='bg-transparent w-16 h-16 color-lightblue'/>
                       <div className="flex items-center">
                          <h3 className="text-base">TypeScript</h3>
                       </div>
                    </div>
                    <div className="flex flex-col p-8 gap-4 items-center content-center max-w-80 rounded-lg bg-neutral-950">
                        <SiAmazonapigateway className='bg-transparent w-16 h-16'/>
                       <div className="flex items-center">
                          <h3 className="text-base">API Integration</h3>
                       </div>
                    </div>
                    <div className="flex flex-col p-8 gap-4 items-center content-center max-w-80 rounded-lg bg-neutral-950">
                        <SiMysql className='bg-transparent w-16 h-16 color-yellow'/>
                       <div className="flex items-center">
                          <h3 className="text-base">MySQL</h3>
                       </div>
                    </div>
                    <div className="flex flex-col p-8 gap-4 items-center content-center max-w-80 rounded-lg bg-neutral-950">
                        <SiFirebase className='bg-transparent w-16 h-16 color-orange'/>
                       <div className="flex items-center">
                          <h3 className="text-base">Firebase</h3>
                       </div>
                    </div>
                    <div className="flex flex-col p-8 gap-4 items-center content-center max-w-80 rounded-lg bg-neutral-950">
                        <SiHtml5 className='bg-transparent w-16 h-16 color-orange'/>
                       <div className="flex items-center">
                          <h3 className="text-base">HTML</h3>
                       </div>
                    </div>
                    <div className="flex flex-col p-8 gap-4 items-center content-center max-w-80 rounded-lg bg-neutral-950">
                        <SiCss3 className='bg-transparent w-16 h-16 color-seablue'/>
                       <div className="flex items-center">
                          <h3 className="text-base">CSS</h3>
                       </div>
                    </div>
                    <div className="flex flex-col p-8 gap-4 items-center content-center max-w-80 rounded-lg bg-neutral-950">
                        <FaNodeJs className='bg-transparent w-16 h-16 text-green-700'/>
                       <div className="flex items-center">
                          <h3 className="text-base">Node</h3>
                       </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
