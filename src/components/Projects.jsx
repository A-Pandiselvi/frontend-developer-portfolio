import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "EMS – Energy Management System",
      desc: "Role-based dashboards with real-time monitoring of battery status, voltage, and energy flow.",
      tech: ["React.js", "Tailwind CSS", "Role-Based UI"],
      type: "private",
      extra: "Includes Admin Dashboard, Live Charts & Monitoring",
    },
    {
      title: "Logistics Management Portal",
      desc: "Shipment platform with lead management, tracking, and reporting for global entities.",
      tech: ["React.js", "Tailwind CSS", "API Integration"],
      type: "private",
      extra: "Lead Tracking, Reporting Modules, User Workflows",
    },
    {
      title: "BazroKart – B2B E-Commerce",
      desc: "E-commerce platform with product listings, seller dashboards, and role-based access.",
      tech: ["React.js", "Tailwind CSS", "State Management"],
      type: "private",
      extra: "Seller Dashboard + Product Management System",
    },

    {
      title: "WeatherFlow – Weather Forecast App",
      desc: "Modern weather app with live location support, hourly forecast, 5-day forecast, and animated UI.",
      tech: ["React.js", "Tailwind CSS", "OpenWeather API"],
      type: "public",
      demo: "https://weatherapp-pandiselvi.netlify.app/",
      github: "https://github.com/A-Pandiselvi/weather_app",
      featured: true,
    },
    {
      title: "Korean Outfits – E-Commerce Website",
      desc: "Responsive fashion website with product collections, filtering, login/register pages, and modern UI.",
      tech: ["HTML", "CSS", "JavaScript"],
      type: "public",
      demo: "https://e-commerce-outfits.netlify.app/",
      github: "https://github.com/A-Pandiselvi/E-commerce-Outfits",
    },
    {
      title: "Shopping Cart – Food Ordering Website",
      desc: "Interactive cart app with add/remove items, quantity updates, category filtering, and live pricing.",
      tech: ["HTML", "CSS", "JavaScript"],
      type: "public",
      demo: "https://shoppingcart-pandiselvi.netlify.app/",
      github: "https://github.com/A-Pandiselvi/Shopping-Cart",
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
            className="bg-white border border-gray-200 rounded-2xl p-7 shadow-md 
hover:bg-blue-50 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] 
transition duration-300"

          >
            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {p.title}
            </h3>

            {/* Featured Badge */}
            {p.featured && (
              <span className="inline-block text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full mb-3 font-semibold">
                ⭐ Featured Project
              </span>
            )}

            {/* Description */}
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

            {/* Public Buttons */}
            {p.type === "public" && (
              <div className="flex gap-3 mt-3">
                
                {/* Live Demo Button */}
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2 rounded-full 
                  bg-blue-500 text-white text-sm font-bold hover:bg-blue-600 transition"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>

                {/* GitHub Button */}
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2 rounded-full 
                  bg-gray-800 text-white text-sm font-bold hover:bg-black transition"
                >
                  <Github size={16} />
                  GitHub
                </a>
              </div>
            )}

            {/* Private Note */}
            {p.type === "private" && (
              <div className="mt-3 text-sm text-gray-500 font-semibold">
                🔒 Private Company Project
                <p className="text-xs text-gray-400 mt-1">{p.extra}</p>
                <span className="text-xs text-gray-400">
                  Demo available upon request
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
