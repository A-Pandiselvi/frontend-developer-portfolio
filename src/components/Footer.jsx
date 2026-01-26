const Footer = () => {
  return (
    <footer className="py-8 bg-white border-t border-gray-100 text-center">
      <p className="text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Pandi Selvi. Built with React & Tailwind CSS.
      </p>
    </footer>
  );
};
export default Footer;