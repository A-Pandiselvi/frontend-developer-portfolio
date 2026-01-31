const Footer = () => {
  return (
    <footer className="py-10 bg-white border-t border-gray-100 text-center">
      
      {/* Copyright */}
      <p className="text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Pandi Selvi. Built with React & Tailwind CSS.
      </p>

      {/* Extra Premium Line */}
      <p className="text-gray-400 text-xs mt-2">
        Designed & Developed by Pandi Selvi ❤️
      </p>

      {/* Back to Top */}
      <div className="mt-6">
        <a
          href="#"
          className="text-sm text-gray-400 hover:text-blue-600 transition"
        >
          ↑ Back to Top
        </a>
      </div>

    </footer>
  );
};

export default Footer;
