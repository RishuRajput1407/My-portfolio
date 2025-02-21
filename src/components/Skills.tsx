
export const Skills = () => {
  const skills = [
    { name: "HTML", icon: "fab fa-html5", progress: 90 },
    { name: "CSS", icon: "fab fa-css3-alt", progress: 85 },
    { name: "JavaScript", icon: "fab fa-js-square", progress: 80 },
    { name: "React", icon: "fab fa-react", progress: 75 },
    { name: "Tailwind CSS", icon: "fab fa-css3", progress: 85 },
    { name: "Bootstrap 5", icon: "fab fa-bootstrap", progress: 80 },
    { name: "Material UI", icon: "fas fa-palette", progress: 75 },
    { name: "API", icon: "fas fa-plug", progress: 70 }
  ];

  return (
    <section id="skills" className="py-20 px-6 lg:px-24 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <i className={`${skill.icon} text-2xl text-primary mr-3`}></i>
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </div>
            <div className="bg-gray-200 rounded-full h-2">
              <div 
                className="bg-primary rounded-full h-2 transition-all duration-500"
                style={{ width: `${skill.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
