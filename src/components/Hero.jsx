import { Download, Eye, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">

        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
            Pandi Selvi
          </h1>

          <p className="text-gray-500 mb-4 font-medium">
            Based in India 🇮🇳 | Open to Frontend Developer Roles
          </p>

          {/* Strong Tagline */}
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">
            Frontend Developer | React.js Dashboard Specialist
          </h2>

          <p className="text-gray-600 text-lg mb-8 max-w-lg leading-relaxed">
            I build scalable, responsive web applications using React.js and Tailwind CSS,
            converting Figma designs into production-ready UI with real-time API integration.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">

            {/* Download Resume */}
            <a
              href="/Pandi_Selvi_Resume.pdf"
              download
              className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-bold 
              hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
            >
              <Download size={18} />
              Download Resume
            </a>

            {/* View Resume */}
            <a
              href="/Pandi_Selvi_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border border-gray-300 text-gray-700 px-8 py-3 rounded-full 
              font-bold hover:bg-gray-50 transition duration-300"
            >
              <Eye size={18} />
              View Resume
            </a>

            {/* Contact Button */}
            <a
              href="#contact"
              className="flex items-center gap-2 border border-blue-600 text-blue-600 px-8 py-3 rounded-full 
              font-bold hover:bg-blue-50 transition duration-300"
            >
              <Mail size={18} />
              Contact Me
            </a>

          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/3 mt-12 lg:mt-0 flex justify-center items-center">
          <div className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-700">
            <img
            loading="lazy"
              src="/ProfilePhoto.jpeg"
              alt="Pandi Selvi"
              className="w-72 h-72 rounded-full object-cover object-[center_top] border-4 border-white shadow-xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
