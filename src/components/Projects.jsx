const Projects = () => {
  const projects = [
    {
      title: "EMS – Energy Management System",
      desc: "Role-based dashboards with real-time monitoring of battery status, voltage, and energy flow.",
      tech: ["React.js", "Tailwind CSS", "Role-Based UI"],
      type: "private",
    },
    {
      title: "Logistics Management Portal",
      desc: "Shipment platform with lead management, tracking, and reporting for global entities.",
      tech: ["React.js", "Tailwind CSS", "API Integration"],
      type: "private",
    },
    {
      title: "BazroKart – B2B E-Commerce",
      desc: "E-commerce platform with product listings, seller dashboards, and role-based access.",
      tech: ["React.js", "Tailwind CSS", "State Management"],
      type: "private",
    },

    // ✅ Weather App is Public Project
    {
      title: "WeatherFlow – Weather Forecast App",
      desc: "Modern weather app with live location support, hourly forecast, 5-day forecast, recent search history, and animated dynamic backgrounds.",
      tech: ["React.js", "Tailwind CSS", "OpenWeather API"],
      type: "public",

      // ✅ Add Your Links Here
      demo: "https://weatherapp-pandiselvi.netlify.app/",
      github: "https://github.com/A-Pandiselvi/weather_app",
    },
    {
  title: "Korean Outfits – E-Commerce Website",
  desc: "Responsive e-commerce fashion website with product collections, search filtering, login/register pages, and modern UI design.",
  tech: ["HTML", "CSS", "JavaScript"],
  type: "public",

  demo: "https://e-commerce-outfits.netlify.app/",
  github: "https://github.com/A-Pandiselvi/E-commerce-Outfits",
},
{
  title: "Shopping Cart – Food Ordering Website",
  desc: "Interactive shopping cart web app with add-to-cart, remove items, quantity update, category filtering, and live total price calculation.",
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
            className="bg-white border border-gray-200 rounded-2xl p-7 shadow-md hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] transition duration-300"
          >
            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {p.title}
            </h3>

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

            {/* ✅ Public Project Buttons (Only Weather App) */}
            {p.type === "public" && (
              <div className="flex gap-3 mt-3">
                {/* Live Demo */}
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 rounded-full bg-blue-500 text-white text-sm font-bold hover:bg-blue-600 transition"
                >
                  🌍 Live Demo
                </a>

                {/* GitHub */}
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 rounded-full bg-gray-800 text-white text-sm font-bold hover:bg-black transition"
                >
                  💻 GitHub
                </a>
              </div>
            )}

            {/* 🔒 Private Company Note (Only Company Projects) */}
            {p.type === "private" && (
              <p className="text-sm font-semibold text-gray-500 mt-3">
                🔒 Private Company Project <br />
                <span className="text-xs text-gray-400">
                  Demo available upon request
                </span>
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
