
import { FaReact , FaNodeJs} from "react-icons/fa";
import { SiTailwindcss , SiTypescript , SiJavascript,SiHtml5,SiCss3,SiFirebase,SiMysql,SiGit,} from "react-icons/si";
export const Skills = () => {
   const SkillCard = ({ icon, title, description }) => {
      return (
        <div className="flex flex-col items-center justify-center bg-neutral-950 rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-center mb-4">
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-slate-600 text-center">{description}</p>
        </div>
      );
    };
  return (
    <div>
        <section className="py-20" id='skills'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <SkillCard icon={<FaReact className="text-5xl color-aqua" />} title="React" description="A JavaScript library for building user interfaces." />
        <SkillCard icon={<SiTailwindcss className="text-5xl color-seablue" />} title="Tailwind CSS" description="A utility-first CSS framework for rapid UI development." />
        <SkillCard icon={<SiJavascript className="text-5xl color-yellow" />} title="JavaScript" description="A programming language that adds interactivity to websites." />
        <SkillCard icon={<SiHtml5 className="text-5xl color-orange" />} title="HTML" description="A markup language for creating the structure of web pages." />
        <SkillCard icon={<SiCss3 className="text-5xl color-seablue" />} title="CSS" description="A styling language used for designing the layout of web pages." />
        <SkillCard icon={<FaNodeJs className="text-5xl text-green-800" />} title="Node.js" description="A JavaScript runtime built on Chrome's V8 JavaScript engine." />
        <SkillCard icon={<SiTypescript className="text-5xl color-lightblue" />} title="TypeScript" description="A superset of JavaScript that adds static typing." />
        <SkillCard icon={<SiFirebase className="text-5xl color-orange" />} title="Firebase" description="A platform for building web and mobile applications." />
        <SkillCard icon={<SiGit className="text-5xl bg-black" />} title="Git" description="A distributed version control system for tracking changes in code." />
        <SkillCard icon={<SiMysql className="text-5xl color-yellow" />} title="MySQL" description="An open-source relational database management system." />
      </div>
    </div>
        </section>
    </div>
  )
}

 