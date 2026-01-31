import { Award, CheckCircle } from "lucide-react";

const Certifications = () => {
  const certs = [
    {
      title: "Full Stack Development Internship",
      org: "Why Global Services",
      duration: "6 Months",
      desc: "Completed intensive training in React.js, UI development, and real-time project modules.",
    },
    {
      title: "UI/UX Design Course",
      org: "Professional Training",
      duration: "Certified",
      desc: "Learned Figma design systems, wireframing, and pixel-perfect UI implementation.",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-14">
          Certifications
        </h2>

        {/* Certification Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {certs.map((c, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 p-8 rounded-2xl shadow-sm 
              hover:bg-blue-50 hover:shadow-lg transition duration-300 text-left"
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-4">
                <Award size={28} className="text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  {c.title}
                </h3>
              </div>

              {/* Organization */}
              <p className="text-blue-600 font-semibold mb-2">
                {c.org} • {c.duration}
              </p>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {c.desc}
              </p>

              {/* Verified Badge */}
              <div className="flex items-center gap-2 text-green-600 font-medium text-sm">
                <CheckCircle size={18} />
                Verified Certification
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
