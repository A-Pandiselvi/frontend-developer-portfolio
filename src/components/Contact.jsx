import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-white text-center">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
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
            className="flex flex-col items-center gap-3 bg-gray-50 p-6 rounded-2xl 
            border border-gray-200 hover:bg-blue-50 hover:shadow-lg transition font-bold text-blue-600"
          >
            <Mail size={32} />
            Email
            <p className="text-xs text-gray-500 font-medium">
              pandiselvipavi2002@gmail.com
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/pandiselvi-pavi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 bg-gray-50 p-6 rounded-2xl 
            border border-gray-200 hover:bg-blue-50 hover:shadow-lg transition font-bold text-blue-600"
          >
            <Linkedin size={32} />
            LinkedIn
            <p className="text-xs text-gray-500 font-medium">
              View Profile
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/A-Pandiselvi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 bg-gray-50 p-6 rounded-2xl 
            border border-gray-200 hover:bg-blue-50 hover:shadow-lg transition font-bold text-blue-600"
          >
            <Github size={32} />
            GitHub
            <p className="text-xs text-gray-500 font-medium">
              Explore Projects
            </p>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Contact;
