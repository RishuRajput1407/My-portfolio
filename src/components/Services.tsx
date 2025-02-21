
export const Services = () => {
  const services = [
    {
      icon: "/src/img/Untitled_design-removebg-preview.png",
      title: "Pixel-Perfect Design",
      description: "Crafting clean, precise, and responsive designs that ensure flawless alignment and consistency across all devices."
    },
    {
      icon: "/src/img/Untitled_design__2_-removebg-preview.png",
      title: "High-Quality Development",
      description: "Building fast, optimized, and user-friendly web applications with a strong focus on performance and best practices."
    },
    {
      icon: "/src/img/Untitled_design__1_-removebg-preview.png",
      title: "Creative & Interactive UI",
      description: "Bringing innovative and engaging UI/UX ideas to life, enhancing user experience with smooth interactions and modern aesthetics."
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-24 bg-soft-purple">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-accent"
          >
            <div className="w-20 h-20 mb-6 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full p-4">
              <img 
                src={service.icon} 
                alt={service.title} 
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center text-primary">
              {service.title}
            </h3>
            <p className="text-gray-600 text-center">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
