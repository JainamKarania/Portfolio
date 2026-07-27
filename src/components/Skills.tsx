import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  FaReact,
  FaPython,
  FaJs,
  FaDatabase,
} from "react-icons/fa";
import {
  SiGooglegemini,
  SiMysql,
  SiPandas,
  SiScikitlearn,
  SiStreamlit,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { MdAnimation } from "react-icons/md";
import { FaWebflow } from "react-icons/fa6";
import { FiFramer } from "react-icons/fi";
import type { JSX } from "react/jsx-runtime";

const Skills = () => {
  const row1Ref = useRef<HTMLUListElement>(null);
  const row2Ref = useRef<HTMLUListElement>(null);

  const tween1 = useRef<gsap.core.Tween | null>(null);
  const tween2 = useRef<gsap.core.Tween | null>(null);

  // Row 1 → Frontend
  const row1Skills = [
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <RiNextjsFill /> },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
    { name: "Webflow", icon: <FaWebflow /> },
    { name: "Framer Motion", icon: <FiFramer /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "GSAP", icon: <MdAnimation /> },
  ];

  // Row 2 → Backend / AI (NO repetition with row1)
  const row2Skills = [
    { name: "Python", icon: <FaPython /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "Pandas", icon: <SiPandas /> },
    { name: "TensorFlow", icon: <SiTensorflow /> },
    { name: "Scikit-Learn", icon: <SiScikitlearn /> },
    { name: "Streamlit", icon: <SiStreamlit /> },
    { name: "LLMs", icon: <SiGooglegemini /> },
  ];

  const duplicatedRow1 = [...row1Skills, ...row1Skills];
  const duplicatedRow2 = [...row2Skills, ...row2Skills];

  useEffect(() => {
    // Row 1 → Left infinite loop
    tween1.current = gsap.fromTo(
      row1Ref.current,
      { xPercent: 0 },
      {
        xPercent: -50,
        duration: 20,
        ease: "none",
        repeat: -1,
      }
    );

    // Row 2 → Right infinite loop (opposite + slower by ~1s)
    tween2.current = gsap.fromTo(
      row2Ref.current,
      { xPercent: -50 },
      {
        xPercent: 0,
        duration: 21,
        ease: "none",
        repeat: -1,
      }
    );

    return () => {
      tween1.current?.kill();
      tween2.current?.kill();
    };
  }, []);

  const pause = () => {
    tween1.current?.pause();
    tween2.current?.pause();
  };

  const resume = () => {
    tween1.current?.resume();
    tween2.current?.resume();
  };

  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  const SkillCard = ({ skill }: { skill: { name: string; icon: JSX.Element } }) => (
    <li className="min-w-35 md:min-w-45">
      <figure className="border border-white/20 rounded-lg p-5 flex flex-col items-center justify-center gap-2 hover:border-white transition">
        <div className="text-2xl md:text-3xl">{skill.icon}</div>
        <figcaption className="text-sm md:text-base font-medium text-center">
          {skill.name}
        </figcaption>
      </figure>
    </li>
  );

  return (
    <section
      aria-labelledby="skills-heading"
      className="bg-black bg-[radial-gradient(#ffffff22_1px,transparent_1px)] bg-size-[20px_20px] text-white py-12 overflow-hidden"
    >
      <header className="flex flex-col items-center justify-center mb-10">
        <h4
  ref={headingRef}
  className="
    relative inline-block group
    text-white font-semibold text-sm md:text-base tracking-widest
    border border-white/30 rounded-md px-5 py-2
    cursor-pointer overflow-hidden
    transition-all duration-300
    hover:border-white mb-4
  "
>
  <span className="relative z-10 group-hover:text-black transition">
    TECH STACK
  </span>

  <span
    className="
      absolute inset-0 bg-white
      translate-y-full
      transition-transform duration-300 ease-out
      group-hover:translate-y-0
    "
  />
</h4>

<h2
  id="skills-heading"
  className="
    relative inline-block group
    text-3xl md:text-5xl font-bold tracking-wide text-white
    border border-white/20 rounded-lg px-6 py-3
    overflow-hidden
  "
>
  <span className="md:text-6xl text-3xl relative z-10 group-hover:text-black transition">
    SKILLS & TECHNOLOGIES
  </span>

  <span
    className="
      absolute inset-0 bg-white
      translate-y-full
      transition-transform duration-500 ease-out
      group-hover:translate-y-0
    "
  />
</h2>

      </header>

      <div onMouseEnter={pause} onMouseLeave={resume} className="space-y-6">
        {/* Row 1 */}
        <div className="overflow-hidden">
          <ul ref={row1Ref} className="flex w-max gap-6 px-4" role="list">
            {duplicatedRow1.map((skill, index) => (
              <SkillCard key={`row1-${index}`} skill={skill} />
            ))}
          </ul>
        </div>

        {/* Row 2 */}
        <div className="overflow-hidden">
          <ul ref={row2Ref} className="flex w-max gap-6 px-4" role="list">
            {duplicatedRow2.map((skill, index) => (
              <SkillCard key={`row2-${index}`} skill={skill} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
