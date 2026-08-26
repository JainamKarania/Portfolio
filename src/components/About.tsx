import { useEffect, useRef } from "react";
import profile from "../assets/LinkedinProfile.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaLocationDot,
  FaGraduationCap,
  FaWebflow,
  FaLaptopCode,
  FaLaptop,
} from "react-icons/fa6";
import { FaCode, FaReact, FaRobot } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const avatarRef = useRef<HTMLImageElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLHeadingElement>(null);
  const aboutRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (avatarRef.current) {
        gsap.fromTo(
          avatarRef.current,
          { opacity: 0, y: -40, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: avatarRef.current,
              start: "top 85%",
            },
          },
        );
      }

      if (bgRef.current) {
        gsap.to(bgRef.current, {
          y: -120,
          ease: "none",
          scrollTrigger: {
            trigger: bgRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (introRef.current && aboutRef.current) {
        gsap.fromTo(
          [introRef.current, aboutRef.current],
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: introRef.current,
              start: "top 85%",
            },
          },
        );
      }

      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, {
          y: 60,
          opacity: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-labelledby="about-heading"
      className="
        relative py-16 overflow-hidden text-white bg-black
        bg-[radial-gradient(#ffffff22_1px,transparent_1px)]
        bg-size-[20px_20px]
      "
    >
      <div
        ref={bgRef}
        className="
          absolute inset-0
          bg-[radial-gradient(#ffffff15_1px,transparent_1px)]
          bg-size-[22px_22px]
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* ===== HEADER ===== */}
        <header className="flex flex-col items-start gap-4 mb-12">
          <h4
            ref={introRef}
            className="relative inline-block text-sm tracking-widest border border-white/30 rounded-md px-5 py-2 overflow-hidden group"
          >
            <span className="relative z-10 group-hover:text-black transition">
              INTRO
            </span>
            <span className="absolute inset-0 bg-white translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
          </h4>

          <h2
            ref={aboutRef}
            id="about-heading"
            className="relative inline-block text-3xl md:text-6xl font-bold border border-white/20 rounded-lg px-6 py-3 overflow-hidden group"
          >
            <span className="relative z-10 group-hover:text-black transition">
              ABOUT ME
            </span>
            <span className="absolute inset-0 bg-white translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
          </h2>
        </header>

        <div ref={cardsRef} className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* ==== LEFT PROFILE CARD ==== */}
          <aside className="border border-white/15 rounded-2xl p-6 backdrop-blur-sm shadow-lg space-y-6">
            <figure className="flex justify-center">
              <img
                ref={avatarRef}
                src={profile}
                alt="Profile avatar of Jainam Karania"
                className="w-32 h-32 rounded-xl object-cover border border-white/30"
              />
            </figure>

            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold">Jainam Karania</h3>

              <p className="text-gray-300 text-sm">
                Frontend Developer · AI Enthusiast
              </p>

              <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                <FaLocationDot />
                <span>Ankleshwar, India</span>
              </div>
            </div>


            <section className="border-t border-white/10 pt-5 space-y-6">
              <h4 className="font-semibold text-gray-200">Education</h4>

              <div className="space-y-4 text-sm">
                <div className="flex gap-3">
                  <FaGraduationCap className="mt-1 text-gray-400" />
                  <div className="flex justify-between items-center w-full">
                    <p>MCA — Jain University</p>
                    <p className="text-gray-500 text-xs">
                      Bangalore, 2021 — 2023
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <FaGraduationCap className="mt-1 text-gray-400" />
                  <div className="flex justify-between items-center w-full">
                    <p>BCA — SMK College</p>
                    <p className="text-gray-500 text-xs">
                      Ankleshwar, 2018 — 2021
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/20" />

              <div>
                <h4 className="font-semibold text-gray-200 mb-4">
                  Location Preferences
                </h4>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    "Flexible",
                    "Bangalore",
                    "Mumbai",
                    "Ahmedabad",
                    "Pune",
                    "Hyderabad",
                  ].map((location) => (
                    <div
                      key={location}
                      className="
                        border border-white/20 rounded-xl py-3
                        text-center text-white/90
                        hover:bg-white hover:text-black
                        transition-all duration-300 cursor-pointer
                      "
                    >
                      {location}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </aside>

          <main className="border border-white/15 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-lg space-y-8">
            <section>
              <h3 className="text-2xl font-bold mb-4">Introduction</h3>
              <p className="text-gray-300 leading-relaxed text-lg text-justify">
                I'm a MCA graduate from Jain University, Bengaluru. I have
                experience in building responsive frontend applications using React
                and Webflow, and I’m currently seeking opportunities as a
                fresher in the AI/ML domain where I can learn, contribute, and
                grow.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-5">
                Open to Opportunities
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { role: "Frontend Engineer", icon: <FaCode /> },
                  { role: "React Developer", icon: <FaReact /> },
                  { role: "AI Engineer", icon: <FaRobot /> },
                  { role: "Webflow Developer", icon: <FaWebflow /> },
                  { role: "Full Stack Developer", icon: <FaLaptopCode /> },
                  { role: "SQL Developer", icon: <FaLaptop /> },
                ].map((job) => (
                  <article
                    key={job.role}
                    className="
                      flex flex-col items-center gap-3
                      border border-white/10 rounded-lg p-4
                      hover:bg-white hover:text-black transition
                    "
                  >
                    <span className="text-2xl">{job.icon}</span>
                    <p className="text-sm text-center">{job.role}</p>
                  </article>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </section>
  );
};

export default About;
