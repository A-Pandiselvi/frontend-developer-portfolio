const Footer = () => {
  return (
    <footer className="py-8 bg-white border-t border-gray-100 text-center">
      <p className="text-gray-500 text-sm mb-3">
        &copy; {new Date().getFullYear()} Pandi Selvi. Built with React & Tailwind CSS.
      </p>
      <div className="flex justify-center gap-6 text-blue-600 font-semibold">
 <a
  href="https://github.com/A-Pandiselvi"
  target="_blank"
  rel="noopener noreferrer"
>
  GitHub
</a>

  <a
  href="https://www.linkedin.com/in/pandi-selvi-335328283/"
  target="_blank"
  rel="noopener noreferrer"
>
  LinkedIn
</a>

</div>

    </footer>
  );
};
export default Footer;