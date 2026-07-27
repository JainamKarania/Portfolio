import { useEffect, useRef, type JSX } from "react";
import gsap from "gsap";
import pure from "../assets/pure.png";
import css from "../assets/company_logo.png";
import work from "../assets/work.jpg";
import "../index.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Experience(): JSX.Element {
  const sectionRef = useRef<HTMLElement | null>(null);
  const subRef = useRef<HTMLHeadingElement | null>(null);
  const mainRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
  const section = sectionRef.current;
  if (!section) return;

  const ctx = gsap.context(() => {

    // Section animation
    gsap.from(section, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
      },
    });

    // Header animations
    if (subRef.current) {
      gsap.from(subRef.current, {
        y: 30,
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
        },
      });
    }

    if (mainRef.current) {
      gsap.from(mainRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
        },
      });
    }

    // Cards animation — scoped to this section
    gsap.from(".experience-card", {
      y: 50,
      opacity: 0,
      scale: 0.98,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.18,
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
      },
    });

  }, sectionRef); // 👈 important

  return () => ctx.revert();
}, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      aria-labelledby="experience-heading"
      className="relative py-24 md:py-28 px-6 md:px-12 lg:px-20 bg-black bg-[radial-gradient(#ffffff22_1px,transparent_1px)] bg-size-[20px_20px] text-white"
    >
      <div className="container max-w-7xl mx-auto">

        {/* ===== HEADER ===== */}
        <header className="flex flex-col items-center gap-6 mb-16 md:mb-20">

          {/* Badge */}
          <h4
            ref={subRef}
            className="relative inline-block text-white font-semibold text-sm md:text-base tracking-[0.25em]
            border border-white/30 rounded-md px-5 py-2 overflow-hidden group"
          >
            <span className="relative z-10 group-hover:text-black transition">
              WORK HISTORY
            </span>

            <span className="absolute inset-0 bg-white translate-y-full 
              transition-transform duration-300 ease-out group-hover:translate-y-0" />
          </h4>

          {/* Main Heading */}
          <h2
            ref={mainRef}
            id="experience-heading"
            className="relative inline-block text-4xl md:text-6xl lg:text-7xl font-bold 
            border border-white/20 rounded-xl px-8 py-4 overflow-hidden group leading-tight"
          >
            <span className="relative z-10 group-hover:text-black transition">
              EXPERIENCE
            </span>

            <span className="absolute inset-0 bg-white translate-y-full 
              transition-transform duration-500 ease-out group-hover:translate-y-0" />
          </h2>
        </header>

        {/* ===== GRID ===== */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* IMAGE COLUMN */}
          <figure className="rounded-3xl overflow-hidden shadow-2xl h-80 md:h-105 lg:h-full">
            <img
              src={work}
              alt="Professional work environment"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </figure>

          {/* CONTENT COLUMN */}
          <div className="space-y-10 md:space-y-12">

            {/* EXPERIENCE CARD 1 */}
            <article className="experience-card bg-zinc-900/70 backdrop-blur rounded-3xl p-6 md:p-8 
              border border-zinc-700/40 shadow-xl space-y-5">

              <header className="flex items-start gap-4 md:gap-5">
                <img
                  src={pure}
                  alt="PureConnectt Technologies logo"
                  className="w-12 h-12 md:w-14 md:h-14 object-contain"
                />

                <div>
                  <h3 className="text-lg md:text-xl font-semibold">
                    Frontend Developer | PureConnectt
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                    Ankleshwar | On-site | Aug 2024 – Feb 2025
                  </p>
                </div>
              </header>

              <ul className="list-disc list-inside text-gray-300 space-y-2 leading-relaxed">
                <li>Led frontend architecture and performance improvements using ReactJS & Tailwind.</li>
                <li>Collaborated with designers and backend engineers for seamless UX.</li>
                <li>Engineered scoring system improving recruiter decision-making by 40%.</li>
                <li>Conducted code reviews and mentored junior developers.</li>
              </ul>
            </article>

            {/* EXPERIENCE CARD 2 */}
            <article className="experience-card bg-zinc-900/70 backdrop-blur rounded-3xl p-6 md:p-8 
              border border-zinc-700/40 shadow-xl space-y-5">

              <header className="flex items-start gap-4 md:gap-5">
                <img
                  src={css}
                  alt="The CSS Agency logo"
                  className="w-12 h-12 md:w-14 md:h-14 object-contain"
                />

                <div>
                  <h3 className="text-lg md:text-xl font-semibold">
                    Webflow & Frontend Developer | TheCSSAgency
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                    Surat | On-site | Oct 2023 – Feb 2024
                  </p>
                </div>
              </header>

              <ul className="list-disc list-inside text-gray-300 space-y-2 leading-relaxed">
                <li>Built responsive Webflow websites reducing bounce rates by 30%.</li>
                <li>Added smooth animations & interactions for engagement.</li>
                <li>Delivered pixel-perfect UI using agile workflows.</li>
              </ul>
            </article>

          </div>
        </div>
      </div>
    </section>
  );
}