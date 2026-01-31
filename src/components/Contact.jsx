const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-white text-center">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Contact
        </h2>

        <p className="text-gray-600 mb-10 text-lg">
          Let's connect for frontend development opportunities!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Email */}
          <a
            href="mailto:pandiselvipavi2002@gmail.com"
            className="bg-gray-50 p-6 rounded-2xl border border-gray-200 
            hover:bg-blue-50 transition font-bold text-blue-600"
          >
           📩 Email
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/pandi-selvi-335328283/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 p-6 rounded-2xl border border-gray-200 
            hover:bg-blue-50 transition font-bold text-blue-600"
          >
            🔗 LinkedIn
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/A-Pandiselvi"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 p-6 rounded-2xl border border-gray-200 
            hover:bg-blue-50 transition font-bold text-blue-600"
          >
            💻 GitHub
          </a>

        </div>
      </div>
    </section>
  );
};

export default Contact;
