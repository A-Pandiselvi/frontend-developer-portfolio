import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10">
          About Me
        </h2>

        {/* Card Box */}
        <div className="bg-white p-10 rounded-2xl shadow-md border border-gray-200">

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            I am a{" "}
            <span className="font-semibold text-blue-600">
              Frontend Developer
            </span>{" "}
            with 1 year of experience building scalable and responsive web
            applications using{" "}
            <span className="font-semibold text-blue-600">React.js</span> and{" "}
            <span className="font-semibold text-blue-600">Tailwind CSS</span>.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            I specialize in converting Figma designs into pixel-perfect UI and
            integrating REST APIs for real-time dashboards and interactive workflows.
          </p>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
  I enjoy solving UI challenges and building user-friendly dashboard experiences that make applications more engaging.
</p>


          {/* ✅ Quick Highlights with Lucide Icons */}
          <ul className="space-y-4 text-gray-700 font-medium text-left max-w-xl mx-auto">
            <li className="flex items-center gap-3">
              <CheckCircle size={18} className="text-blue-600" />
              React.js Developer with Dashboard Experience
            </li>

            <li className="flex items-center gap-3">
              <CheckCircle size={18} className="text-blue-600" />
              Strong in Responsive UI + Tailwind CSS
            </li>

            <li className="flex items-center gap-3">
              <CheckCircle size={18} className="text-blue-600" />
              REST API Integration for Real-Time Data
            </li>

            <li className="flex items-center gap-3">
              <CheckCircle size={18} className="text-blue-600" />
              Figma to Production-Ready Interfaces
            </li>
          </ul>

        </div>
      </div>
    </section>
  );
};

export default About;
