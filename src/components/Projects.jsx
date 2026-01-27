const Projects = () => {
  const projects = [
    {
      title: "EMS – Energy Management System",
      desc: "Role-based dashboards with real-time monitoring of battery status, voltage, and energy flow.",
      tech: ["React.js", "Tailwind CSS", "Role-Based UI"],
    },
    {
      title: "Logistics Management Portal",
      desc: "Shipment platform with lead management, tracking, and reporting for global entities.",
      tech: ["React.js", "Tailwind CSS", "API Integration"],
    },
    {
      title: "BazroKart – B2B E-Commerce",
      desc: "E-commerce platform with product listings, seller dashboards, and role-based access.",
      tech: ["React.js", "Tailwind CSS", "State Management"],
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Strong Projects
        </h2>

        <p className="text-gray-500 mt-3">
          Company Projects (Details available upon request)
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-gray-50 border border-gray-200 rounded-2xl p-7 shadow-md 
            hover:shadow-xl hover:-translate-y-2 transition duration-300"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {p.title}
            </h3>

            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              {p.desc}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full font-bold"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Private Company Note */}
            <p className="text-sm font-semibold text-gray-500">
              🔒 Private Company Project <br />
              <span className="text-xs text-gray-400">
                Demo available upon request
              </span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
