import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const jainamRef = useRef<HTMLHeadingElement>(null);
  const karaniaRef = useRef<HTMLHeadingElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro reveal
      gsap.from([jainamRef.current, karaniaRef.current], {
        y: 70,
        opacity: 0,
        duration: 1.1,
        stagger: 0.15,
        ease: "power4.out",
      });

      // Scroll split responsive distance
      const moveDistance =
        window.innerWidth < 640
          ? 40
          : window.innerWidth < 1024
          ? 90
          : 160;

      gsap.to(jainamRef.current, {
        x: -moveDistance,
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top center",
          end: "+=400",
          scrub: true,
        },
      });

      gsap.to(karaniaRef.current, {
        x: moveDistance,
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top center",
          end: "+=400",
          scrub: true,
        },
      });

      // Background parallax
      gsap.to(bgRef.current, {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: bgRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <header className="relative min-h-screen mt-6 bg-black flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        ref={bgRef}
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] bg-size-[20px_20px]"
      />

      {/* Wrapper */}
      <div
        ref={wrapperRef}
        className="relative z-10 w-full max-w-350 mx-auto px-4 sm:px-6 md:px-10"
      >
        {/* Name */}
        <h1 className="text-white font-extrabold tracking-tight leading-[0.9] text-center mx-auto max-w-300">
          <span
            ref={jainamRef}
            className="
              block
              text-4xl
              sm:text-6xl
              md:text-8xl
              lg:text-[10rem]
              xl:text-[14rem]
            "
          >
            JAINAM
          </span>

          <span
            ref={karaniaRef}
            className="
              block
              text-4xl
              sm:text-6xl
              md:text-8xl
              lg:text-[10rem]
              xl:text-[14rem]
            "
          >
            KARANIA
          </span>
        </h1>

        {/* Bottom Section */}
        <section
          className="
            mt-10 md:mt-14
            grid
            grid-cols-1
            md:grid-cols-3
            gap-8
            items-center
            text-white
          "
        >
          {/* Contact */}
          <address
            className="
              not-italic
              text-sm sm:text-base md:text-lg
              text-center md:text-left
              md:justify-self-start
            "
          >
            Lets Connect :
            <div className="text-gray-300 mt-1 break-all">
              jainamkarania05@gmail.com
            </div>
          </address>

          {/* CTA */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <button
  onClick={() => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }}
  className="
    px-5 py-2.5 sm:px-6 sm:py-3
    rounded-full
    bg-white
    text-black
    text-sm sm:text-base
    font-medium
    hover:scale-105
    transition
  "
>
  View Work
</button>

            <a
              href="/Jainamkarania_Resume.pdf"
              download
              className="
                px-5 py-2.5 sm:px-6 sm:py-3
                rounded-full
                border
                border-white
                text-white
                text-sm sm:text-base
                hover:bg-white hover:text-black
                transition
              "
            >
              Download Resume
            </a>
          </div>

          {/* Social */}
          <nav
            className="
              flex
              justify-center md:justify-end
              gap-5 sm:gap-6
            "
          >
            <a
              href="https://github.com/JainamKarania"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-gray-400 transition"
            >
              <FaGithub className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            </a>

            <a
              href="https://www.linkedin.com/in/jainam-karania/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            </a>
          </nav>
        </section>
      </div>
    </header>
  );
};

export default Hero;
