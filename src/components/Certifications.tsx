// Semantic, Accessible, SEO-Optimized Certifications Component
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Genai from "../assets/GenAI.png";
import intogenai from "../assets/intogenai.png";
import { SiGooglecloud } from "react-icons/si";
import mckinsey from "../assets/mckinsey-org-forward-program.png";
import { BiSolidCertification } from "react-icons/bi";

gsap.registerPlugin(ScrollTrigger);

interface Achievement {
  name: string;
  image: string;
  date: string;
  link: string;
  provider: {
    name: string;
    Icon: React.ElementType;
  };
}

const certifications: Achievement[] = [
  {
    name: "Mckinsey & Company: Forward Program Certificate",
    image:
      mckinsey,
    date: "July 2025",
    link: "https://www.credly.com/badges/dc97243c-9ad4-4530-ac5e-747eb537f464/public_url",
    provider: { name: "Mckinsey & Company", Icon: BiSolidCertification },
  },
  {
    name: "GenAI Academy - Google Cloud Certificate",
    image: Genai,
    date: "28th May 2025",
    link: "https://certificate.hack2skill.com/user/GenAI5-28M/2025H2S04GENAI-A01934",
    provider: { name: "Google Cloud & Hack2Skill", Icon: SiGooglecloud },
  },
  {
    name: "Introduction to Generative AI - Google Cloud & Simplilearn Certificate",
    image: intogenai,
    date: "15th April 2025",
    link: "https://www.simplilearn.com/skillup-certificate-landing",
    provider: { name: "Google Cloud & Simplilearn", Icon: SiGooglecloud },
  },
  {
    name: "Introduction to Large Language Models - Google Cloud",
    image:
      "https://cdn.qwiklabs.com/A7K3LJijKihsoqFVb1y5ud07C8zClZG%2BMLTiCcYzpcw%3D",
    date: "16th April 2025",
    link: "https://www.cloudskillsboost.google/...",
    provider: { name: "Google Cloud", Icon: SiGooglecloud },
  },
];

const skillBadges: Achievement[] = [
  {
    name: "Prompt Design in Vertex AI",
    image:
      "https://cdn.qwiklabs.com/q48Ha5zDHeG%2F5vYgH5OmkLgRYeLlHtbLgOawB7wJgo8%3D",
    date: "27th April 2025",
    link: "https://www.cloudskillsboost.google/...",
    provider: { name: "Google Cloud", Icon: SiGooglecloud },
  },
  {
    name: "Build Real World AI Applications with Gemini and Imagen",
    image:
      "https://cdn.qwiklabs.com/RQhZyhu6J%2FB6MoY2p4wAb4HWxjAuBOsmG71ZtUW9hUQ%3D",
    date: "1st May 2025",
    link: "https://www.cloudskillsboost.google/...",
    provider: { name: "Google Cloud", Icon: SiGooglecloud },
  },
  {
    name: "Develop GenAI Apps with Gemini and Streamlit",
    image:
      "https://cdn.qwiklabs.com/Vs5lwoywGjpdqDAwpa0BZsp9Rdokv2NiozwkXyf3YlY%3D",
    date: "4th May 2025",
    link: "https://www.cloudskillsboost.google/...",
    provider: { name: "Google Cloud", Icon: SiGooglecloud },
  },
  {
    name: "Inspect Rich Documents with Gemini Multimodality and Multimodal RAG",
    image:
      "https://cdn.qwiklabs.com/VRjYdOVTtkQh6sftId60ruWjlsjNrsyZlBpRQyJBmSE%3D",
    date: "8th May 2025",
    link: "https://www.cloudskillsboost.google/...",
    provider: { name: "Google Cloud", Icon: SiGooglecloud },
  },
  {
    name: "Explore Generative AI with the Gemini API in Vertex AI",
    image:
      "https://cdn.qwiklabs.com/%2FvVFFMnVihhZgpNuRQ4JAtETKDxJ8JE63AicSxDJMmM%3D",
    date: "12th May 2025",
    link: "https://www.cloudskillsboost.google/...",
    provider: { name: "Google Cloud", Icon: SiGooglecloud },
  },
];

const Certifications = () => {
  const sectionRef = useRef<HTMLElement>(null);
  // const headingRef = useRef<HTMLHeadingElement>(null);
  const [activeTab, setActiveTab] = useState<"certifications" | "badges">(
    "certifications",
  );

  useEffect(() => {
    if (sectionRef.current) {
      gsap.to(sectionRef.current, {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          },
        },
      );
    }
  }, []);

  const renderCard = (item: Achievement, index: number) => {
    const ProviderIcon = item.provider.Icon;
    return (
      <article
        key={index}
        className="bg-white/5 border border-white/10 backdrop-blur rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/30 transition"
      >
        <figure>
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-40 object-cover"
          />
        </figure>

        <div className="p-4 space-y-3 text-white">
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-sm text-gray-300">Earned: {item.date}</p>

          <div className="text-sm flex gap-4 flex-col">
            <p className="md:text-lg text-sm font-medium">Provided By:</p>
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
              <ProviderIcon className="w-8 h-8" />
              <span className="text-lg">{item.provider.name}</span>
            </div>
          </div>

          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${activeTab === "certifications" ? "Certificate" : "Badge"} for ${item.name}`}
            className="inline-block mt-2 px-4 py-1 text-sm border border-cyan-400 text-cyan-300 rounded-full hover:bg-cyan-500 hover:text-white transition"
          >
            View {activeTab === "certifications" ? "Certificate" : "Badge"}
          </a>
        </div>
      </article>
    );
  };

  const data = activeTab === "certifications" ? certifications : skillBadges;

  const headingRef = useRef<HTMLDivElement>(null);

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
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="certificate"
      aria-labelledby="certifications-heading"
      className="py-20 relative z-10"
    >
      <div className="absolute inset-0 bg-black bg-[radial-gradient(#ffffff22_1px,transparent_1px)] bg-size-[20px_20px]" />

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <header className="flex flex-col items-start gap-1 mb-12 ">
          <h4
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
              ACHIEVEMENTS
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

          {/* Main Heading */}
          <h2
            id="certifications-heading"
            className="
      relative inline-block group
      text-2xl md:text-4xl font-bold tracking-wide text-white
      border border-white/20 rounded-lg px-6 py-3
      overflow-hidden
    "
          >
            <span className="md:text-6xl text-3xl relative z-10 group-hover:text-black transition">
              CERTIFICATIONS & SKILL BADGES
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

        <nav
          aria-label="Certification Tabs"
          className="flex justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setActiveTab("certifications")}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
              activeTab === "certifications"
                ? "bg-cyan-500 text-white"
                : "bg-white/10 text-white hover:bg-cyan-600/30"
            }`}
          >
            Certifications
          </button>

          <button
            onClick={() => setActiveTab("badges")}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
              activeTab === "badges"
                ? "bg-cyan-500 text-white"
                : "bg-white/10 text-white hover:bg-cyan-600/30"
            }`}
          >
            Skill Badges
          </button>
        </nav>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => renderCard(item, index))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
