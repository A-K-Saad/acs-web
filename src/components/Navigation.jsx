import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <>
      {/* Navigation section */}
      <nav className="flex justify-between items-center sticky top-0 z-50 py-3 md:py-4 bg-white/90">
        <div>
          <p className="text-lg leading-tight">A K Saad</p>
          <p className="text-sm opacity-80">Web Developer</p>
        </div>
        <div className="relative">
          <div
            className={`absolute z-30 top-2 md:top-0 right-0 -mt-5 -mr-4 bg-gray-50 w-56 md:w-64 p-8 pt-16 rounded-md space-y-6 origin-top-right transition duration-500 ${
              isMenuOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
          >
            <Link to="/#about" className="text-2xl md:text-3xl block">
              <span className="text-sm">01/</span> About
            </Link>
            <Link to="/#skills" className="text-2xl md:text-3xl block">
              <span className="text-sm">02/</span> Skills
            </Link>
            <Link to="/#projects" className="text-2xl md:text-3xl block">
              <span className="text-sm">03/</span> Projects
            </Link>
            <Link to="/#contact" className="text-2xl md:text-3xl block">
              <span className="text-sm">04/</span> Contact
            </Link>
          </div>
          <button
            type="button"
            onClick={toggleMenu}
            className="flex items-center gap-2 relative z-40"
          >
            <p className="overflow-hidden relative h-6 w-12 transition">
              <span
                className={`block absolute top-0 left-0 bottom-0 right-0 m-auto transition-transform duration-500 text-sm md:text-base ${
                  !isMenuOpen ? "translate-y-0" : "translate-y-full"
                }`}
              >
                Menu
              </span>
              <span
                className={`block absolute top-0 left-0 transition-transform duration-500 text-sm md:text-base ${
                  isMenuOpen ? "translate-y-0" : "-translate-y-full"
                }`}
              >
                Close
              </span>
            </p>
            <span className="flex flex-col gap-[5px]">
              <span
                className={`h-[2px] w-10 bg-[#333333] opacity-75 transition duration-300 ${
                  isMenuOpen
                    ? "translate-y-[3px] rotate-45 origin-center"
                    : "rotate-0"
                }`}
              ></span>
              <span
                className={`h-[2px] w-10 bg-[#333333] opacity-75 transition duration-300 ${
                  isMenuOpen
                    ? "translate-y-[-4px] -rotate-45 origin-center"
                    : "rotate-0"
                }`}
              ></span>
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
