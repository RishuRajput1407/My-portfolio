
export const Education = () => {
  const educationItems = [
    {
      image: "/src/img/school.png",
      title: "Bachelor of Computer Application",
      institution: "Manipal University Jaipur",
      period: "2022-2025 | Complete"
    },
    {
      image: "/src/img/cetpa.png",
      title: "Full Stack Mern Developer",
      institution: "CEPTA Infotech Pvt. Ltd",
      period: "2024-2025 | Pursuing"
    }
  ];

  return (
    <section id="education" className="py-20 px-6 lg:px-24 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-4">
        <i className="fas fa-graduation-cap mr-2"></i> My Education
      </h2>
      <p className="text-center text-gray-600 mb-12">
        Education is not the learning of facts, but the training of the mind to think.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {educationItems.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <img src={item.image} alt={item.title} className="w-24 h-24 mx-auto" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-2">{item.institution}</p>
              <p className="text-sm text-gray-500">{item.period}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
