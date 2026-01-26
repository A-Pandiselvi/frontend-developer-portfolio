const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10">
          About Me
        </h2>

        {/* Card Box */}
        <div className="bg-gray-50 p-10 rounded-2xl shadow-md border border-gray-200">

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            I am a{" "}
            <span className="font-semibold text-blue-600">
              Frontend Developer
            </span>{" "}
            with 1 year of professional experience in building scalable,
            responsive web applications using{" "}
            <span className="font-semibold text-blue-600">
              React.js
            </span>{" "}
            and{" "}
            <span className="font-semibold text-blue-600">
              Tailwind CSS
            </span>
            . I specialize in converting Figma designs into pixel-perfect UI and
            integrating REST APIs for real-time data visualization.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            My goal is to contribute to product-based environments by
            engineering high-quality frontend components and creating interactive
            user workflows that improve user experience.
          </p>

        </div>
      </div>
    </section>
  );
};

export default About;
