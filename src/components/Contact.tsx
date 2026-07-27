import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";
import { GoMail } from "react-icons/go";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    )
      .fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        linksRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.3"
      );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      aria-labelledby="contact-heading"
      className="
        relative py-24 px-6 bg-white text-black overflow-hidden
        bg-[repeating-linear-gradient(to_right,#00000008,#00000008_1px,transparent_1px,transparent_60px)]
      "
    >
      <main className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <header className="mb-10">
          <h2
            ref={headingRef}
            id="contact-heading"
            className="text-3xl md:text-5xl font-bold"
          >
            Let’s Connect
          </h2>

          <p
            ref={textRef}
            className="text-gray-600 mt-4 text-base md:text-lg max-w-2xl mx-auto"
          >
            I’m open to opportunities in AI/ML and frontend engineering.
            Let’s collaborate, build, and create meaningful digital products.
          </p>
        </header>

        {/* Social Links */}
        <nav aria-label="Social media links">
          <div
            ref={linksRef}
            className="flex flex-wrap justify-center gap-5 items-center mb-12"
          >
            <a
              href="https://www.linkedin.com/in/jainam-karania/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2 px-5 py-3
                border border-black/20 rounded-lg
                hover:bg-black hover:text-white
                transition duration-300
              "
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-xl" />
              LinkedIn
            </a>

            <a
              href="https://github.com/JainamKarania"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2 px-5 py-3
                border border-black/20 rounded-lg
                hover:bg-black hover:text-white
                transition duration-300
              "
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-xl" />
              GitHub
            </a>

            <a
              href="mailto:jainamkarania05@gmail.com"
              className="
                flex items-center gap-2 px-5 py-3
                border border-black/20 rounded-lg
                hover:bg-black hover:text-white
                transition duration-300
              "
              aria-label="Email Jainam"
            >
              <GoMail className="text-xl" />
              Email
            </a>
          </div>
        </nav>

        {/* CTA */}
        <footer>
          <a
            ref={ctaRef}
            href="mailto:jainamkarania05@gmail.com"
            className="
              inline-flex items-center gap-2
              bg-black text-white px-8 py-4
              rounded-lg font-semibold
              hover:scale-105 transition-transform duration-300
            "
            aria-label="Hire Jainam"
          >
            Hire Me
            <FaExternalLinkAlt />
          </a>
        </footer>
      </main>
    </section>
  );
};

export default Contact;
