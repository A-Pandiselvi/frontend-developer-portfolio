import { Code2, Wrench, Layers, CheckCircle } from "lucide-react";

const Skills = () => {
  const skills = {
    Frontend: {
      icon: <Code2 size={26} className="text-blue-600" />,
      items: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
    },
    Tools: {
      icon: <Wrench size={26} className="text-blue-600" />,
      items: ["Git & GitHub", "Figma", "Vite", "Postman"],
    },
    Core: {
      icon: <Layers size={26} className="text-blue-600" />,
      items: [
        "API Integration",
        "Responsive Design",
        "Role-Based UI",
        "Dashboard Development",
      ],
    },
  };

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-14 text-center">
          Technical Skills
        </h2>

        {/* Skill Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, data]) => (
            <div
              key={category}
              className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm 
              hover:bg-blue-50 hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              {/* Category Title */}
              <div className="flex items-center gap-3 mb-6">
                {data.icon}
                <h3 className="text-xl font-bold text-gray-900">
                  {category}
                </h3>
              </div>

              {/* Skills List */}
              <ul className="space-y-4">
                {data.items.map((skill) => (
                  <li
                    key={skill}
                    className="text-gray-700 flex items-center font-medium"
                  >
                    <CheckCircle size={18} className="text-blue-600 mr-3" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
