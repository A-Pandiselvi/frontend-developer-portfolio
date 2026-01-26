const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">

        <div className="lg:w-1/2 text-center lg:text-left">
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Pandi Selvi
          </h1>

          <h2 className="text-2xl font-semibold text-blue-600 mb-6">
            Frontend Developer
          </h2>

          <p className="text-gray-600 text-lg mb-8 max-w-lg leading-relaxed">
            I build responsive, high-quality web applications using React.js and Tailwind CSS,
            converting Figma designs into production-ready UI.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">

            <a
              href="/Pandi_Selvi_Resume.pdf"
              download
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold 
              hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-full 
              font-bold hover:bg-blue-50 transition duration-300"
            >
              Contact Me
            </a>

          </div>
        </div>



<div className="lg:w-1/3 mt-12 lg:mt-0 flex justify-center items-center">
  <div className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-700">
    <img
      src="/ProfilePhoto.jpeg"
      alt="Pandi Selvi"
      className="w-72 h-72 rounded-full object-cover object-[center_top] border-4 border-white shadow-xl"
    />
  </div>
</div>


      </div>
    </section>
  );
};

export default Hero;
