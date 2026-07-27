import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Certifications", id: "certificate" },
    { name: "Contact", id: "contact" },
  ];

  const handleSmoothScroll = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      gsap.to(window, {
        duration: 1,
        scrollTo: targetElement,
        ease: "power2.inOut",
      });
    }
    closeMenu(); // Close mobile menu
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-full max-w-330 z-50 px-4">
      <nav className="p-4 shadow-xl shadow-sky-800/30 border border-sky-700/30 backdrop-blur-sm rounded-2xl">
        <div className="flex justify-between items-center text-white">
          <div className="text-xl md:text-2xl font-bold tracking-wide bg-linear-to-b from-gray-700 to-gray-300 bg-clip-text text-transparent">
            Jainam Karania Portfolio
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 font-medium">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() =>
                  document.getElementById(item.id)?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="bg-linear-to-t from-gray-700 to-gray-300 bg-clip-text text-transparent transition text-lg hover:bg-linear-to-b hover:from-gray-700 hover:to-gray-300 hover:text-transparent"
              >
                {item.name}
              </button>
            ))}
          </ul>

          {/* Mobile Icon */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-slate-800/80 rounded-xl p-4 space-y-4 animate-fade-in shadow-md shadow-cyan-500/20">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleSmoothScroll(item.id)}
                className="block text-white text-lg hover:text-cyan-300 transition duration-300 text-left w-full"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
