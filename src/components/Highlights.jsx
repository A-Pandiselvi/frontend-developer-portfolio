const Highlights = () => {
  const stats = [
    { title: "1+ Year Experience", desc: "Frontend Development" },
    { title: "5+ Dashboards Built", desc: "Real-time Monitoring UI" },
    { title: "10+ APIs Integrated", desc: "REST API Applications" },
    { title: "Responsive Projects", desc: "Mobile + Desktop Ready" },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-14">
          Highlights
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm 
              hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-bold text-blue-600 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Highlights;
