import { useState, useEffect, useRef } from "react";
import { Menu, X, Download } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // ✅ Close Menu When Clicking Outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-sm py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* ✅ Logo Click Scroll Top */}
        <a
          href="#"
          className="text-xl font-bold text-gray-900 tracking-tight hover:text-blue-600 transition"
        >
          PANDI SELVI
        </a>

        {/* ✅ Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-gray-600 font-medium">

          <a href="#about" className="hover:text-blue-600 transition">
            About
          </a>

          <a href="#skills" className="hover:text-blue-600 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-blue-600 transition">
            Projects
          </a>

          <a href="#experience" className="hover:text-blue-600 transition">
            Experience
          </a>

          <a href="#contact" className="hover:text-blue-600 transition">
            Contact
          </a>

          {/* ✅ Resume Button */}
          <a
            href="/Pandi_Selvi_Resume.pdf"
            download
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full font-semibold 
            hover:bg-blue-700 transition shadow-md"
          >
            <Download size={16} />
            Resume
          </a>
        </div>

        {/* ✅ Mobile Hamburger Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-900 focus:outline-none"
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      {open && (
        <div
          ref={menuRef}
          className="md:hidden mt-4 bg-white shadow-lg rounded-2xl p-6 space-y-4 text-gray-700 font-medium animate-fadeIn"
        >
          <a
            onClick={() => setOpen(false)}
            href="#about"
            className="block hover:text-blue-600 transition"
          >
            About
          </a>

          <a
            onClick={() => setOpen(false)}
            href="#skills"
            className="block hover:text-blue-600 transition"
          >
            Skills
          </a>

          <a
            onClick={() => setOpen(false)}
            href="#projects"
            className="block hover:text-blue-600 transition"
          >
            Projects
          </a>

          <a
            onClick={() => setOpen(false)}
            href="#experience"
            className="block hover:text-blue-600 transition"
          >
            Experience
          </a>

          <a
            onClick={() => setOpen(false)}
            href="#contact"
            className="block hover:text-blue-600 transition"
          >
            Contact
          </a>

          {/* ✅ Resume Button Mobile */}
          <a
            href="/Pandi_Selvi_Resume.pdf"
            download
            className="flex justify-center items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full font-semibold 
            hover:bg-blue-700 transition shadow-md"
          >
            <Download size={16} />
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
