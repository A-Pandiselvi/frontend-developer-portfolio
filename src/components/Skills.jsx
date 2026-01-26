const Skills = () => {
  const skills = {
    Frontend: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
    Tools: ["Git & GitHub", "Figma", "Vite"],
    Core: ["API Integration", "Responsive Design", "Role-Based UI", "Dashboard Development"],
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
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm 
              hover:shadow-lg transition duration-300"
            >
              {/* Category Title */}
              <h3 className="text-xl font-bold text-blue-600 mb-6">
                {category}
              </h3>

              {/* Skills List */}
              <ul className="space-y-3">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="text-gray-700 flex items-center font-medium"
                  >
                    <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
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
