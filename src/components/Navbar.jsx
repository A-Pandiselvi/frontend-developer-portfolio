import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold text-gray-900 tracking-tight">
          PANDI SELVI
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
          <a href="#about" className="hover:text-blue-600 transition duration-300">About</a>
          <a href="#skills" className="hover:text-blue-600 transition duration-300">Skills</a>
          <a href="#projects" className="hover:text-blue-600 transition duration-300">Projects</a>
          <a href="#experience" className="hover:text-blue-600 transition duration-300">Experience</a>
          <a href="#contact" className="hover:text-blue-600 transition duration-300">Contact</a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-900 text-3xl focus:outline-none"
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden mt-4 bg-white shadow-lg rounded-xl p-6 space-y-4 text-gray-700 font-medium">
          <a onClick={() => setOpen(false)} href="#about" className="block hover:text-blue-600">
            About
          </a>
          <a onClick={() => setOpen(false)} href="#skills" className="block hover:text-blue-600">
            Skills
          </a>
          <a onClick={() => setOpen(false)} href="#projects" className="block hover:text-blue-600">
            Projects
          </a>
          <a onClick={() => setOpen(false)} href="#experience" className="block hover:text-blue-600">
            Experience
          </a>
          <a onClick={() => setOpen(false)} href="#contact" className="block hover:text-blue-600">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
