import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="cta-heading"
      className="
        relative py-24 px-6 bg-white text-black overflow-hidden
        bg-[repeating-linear-gradient(to_right,#00000008,#00000008_1px,transparent_1px,transparent_60px)]
      "
    >
      <div className=" container max-w-7xl mx-auto text-center space-y-6">
        {/* <header>
          <h2 id="cta-heading" className="text-3xl md:text-5xl font-bold">
            Let’s Work Together
          </h2>
        </header> */}
        <div className="flex items-center justify-center w-full">
        <p className="text-gray-600 text-base md:text-3xl max-w-2xl leading-relaxed">
          I bring a strong foundation in frontend development and a passion for learning new technologies. If you have an opportunity that aligns with my skills and aspirations, I’d love to connect and explore how I can contribute to your team.
        </p>
        </div>
        
      </div>
    </section>
  );
};

export default CTA;
