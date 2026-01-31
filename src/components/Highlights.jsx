import {
  Briefcase,
  LayoutDashboard,
  PlugZap,
  Smartphone,
} from "lucide-react";

const Highlights = () => {
  const stats = [
    {
      title: "1+ Year Experience",
      desc: "Frontend Development",
      icon: <Briefcase size={30} className="text-blue-600" />,
    },
    {
      title: "5+ Dashboards Built",
      desc: "Real-time Monitoring UI",
      icon: <LayoutDashboard size={30} className="text-blue-600" />,
    },
    {
      title: "10+ APIs Integrated",
      desc: "REST API Applications",
      icon: <PlugZap size={30} className="text-blue-600" />,
    },
    {
      title: "Responsive Projects",
      desc: "Mobile + Desktop Ready",
      icon: <Smartphone size={30} className="text-blue-600" />,
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-14">
          Highlights
        </h2>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm 
              hover:bg-blue-50 hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Highlights;
