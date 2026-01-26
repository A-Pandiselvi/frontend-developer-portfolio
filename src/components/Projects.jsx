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

            {/* Buttons */}
            <div className="flex gap-3">
              <a
                href="#"
                className="text-sm font-bold text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Live Demo
              </a>

              <a
                href="#"
                className="text-sm font-bold text-blue-600 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;



// import emsImg from "../assets/ems.png";
// import logisticsImg from "../assets/logistics.png";
// import bazroImg from "../assets/bazrokart.png";

// const Projects = () => {
//   const projects = [
//     {
//       title: "EMS – Energy Management System",
//       desc: "Role-based dashboards with real-time monitoring of battery status, voltage, and energy flow.",
//       tech: ["React.js", "Tailwind CSS", "Role-Based UI"],
//       image: emsImg,
//       live: "https://your-ems-demo.vercel.app",
//       github: "https://github.com/yourusername/ems-dashboard",
//     },
//     {
//       title: "Logistics Management Portal",
//       desc: "Shipment platform with lead management, tracking, and reporting for global entities.",
//       tech: ["React.js", "Tailwind CSS", "API Integration"],
//       image: logisticsImg,
//       live: "https://your-logistics-demo.vercel.app",
//       github: "https://github.com/yourusername/logistics-portal",
//     },
//     {
//       title: "BazroKart – B2B E-Commerce",
//       desc: "E-commerce platform with product listings, seller dashboards, and role-based access.",
//       tech: ["React.js", "Tailwind CSS", "State Management"],
//       image: bazroImg,
//       live: "https://your-bazrokart-demo.vercel.app",
//       github: "https://github.com/yourusername/bazrokart",
//     },
//   ];

//   return (
//     <section id="projects" className="py-20 px-6 bg-white">
//       <div className="max-w-7xl mx-auto text-center mb-14">
//         <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
//           Strong Projects
//         </h2>
//       </div>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
//         {projects.map((p, i) => (
//           <div
//             key={i}
//             className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden shadow-md 
//             hover:shadow-xl hover:-translate-y-2 transition duration-300"
//           >
//             {/* Project Screenshot */}
//             <img
//               src={p.image}
//               alt={p.title}
//               className="w-full h-48 object-cover"
//             />

//             {/* Content */}
//             <div className="p-7">
//               <h3 className="text-xl font-bold text-gray-900 mb-3">
//                 {p.title}
//               </h3>

//               <p className="text-gray-600 mb-6 text-sm leading-relaxed">
//                 {p.desc}
//               </p>

//               {/* Tech Stack */}
//               <div className="flex flex-wrap gap-2 mb-6">
//                 {p.tech.map((t) => (
//                   <span
//                     key={t}
//                     className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full font-bold"
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>

//               {/* Buttons */}
//               <div className="flex gap-3">
//                 <a
//                   href={p.live}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-sm font-bold text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
//                 >
//                   Live Demo
//                 </a>

//                 <a
//                   href={p.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-sm font-bold text-blue-600 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition"
//                 >
//                   GitHub
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;
