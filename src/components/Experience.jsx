const Experience = () => {
  const jobs = [
    {
      role: "Frontend Developer",
      company: "ITS Private Limited",
      period: "January 2025 – Present",
      points: [
        "Developed 15+ responsive UI components using React.js and Tailwind CSS.",
        "Built role-based dashboards for Admin and User modules.",
        "Integrated REST APIs to display real-time monitoring data.",
        "Improved dashboard usability by optimizing UI workflows."
      ]
    },
    {
      role: "Full Stack Development Intern",
      company: "Why Global Services",
      period: "6 Months",
      points: [
        "Developed 20+ responsive UI components using React.js and Tailwind CSS.",
        "Built Admin/User dashboards with role-based authentication.",
        "Integrated 10+ REST APIs for real-time monitoring."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
        Professional Experience
      </h2>

      <div className="space-y-12">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="border-l-4 border-blue-600 pl-8 ml-4 bg-gray-50 p-6 rounded-xl shadow-sm 
            hover:bg-blue-50 hover:shadow-lg transition duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-900">{job.role}</h3>
            <p className="text-blue-600 font-medium mb-4">
              {job.company} | {job.period}
            </p>

            <ul className="list-disc text-gray-600 space-y-2 ml-4">
              {job.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
