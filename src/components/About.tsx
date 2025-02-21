
export const About = () => {
  return (
    <section id="about" className="py-20 px-6 lg:px-24">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <img 
            src="/src/img/about.jpg" 
            alt="About"
            className="rounded-lg shadow-xl max-w-lg mx-auto"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl mb-2">I'm a Designer</h3>
          <h2 className="text-3xl font-bold mb-4">I Can Design Anything You Want</h2>
          <p className="text-gray-600 mb-8">
          Hello there! I'm a Web Designer & Frontend Developer, passionate and dedicated to my craft. 
          With 6 months of internship experience at CETPA Infotech Pvt. Ltd., I have honed my skills in 
          UI/UX design, frontend development, and web optimization.
          </p>
          <a 
            href="mailto:rishurajpoot304@gmail.com" 
            className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
          >
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
};
