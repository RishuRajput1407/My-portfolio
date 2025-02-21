
export const Projects = () => {
  const projects = [
    {
      image: "/src/img/pngtree-shining-bright-light-bulb-png-image_6136095.png",
      title: "Bulb App",
      description: "A modern Bulb application with a clean UI built using Html, CSS and JavaScript",
      link: "https://rishurajput1407.github.io/Bulb_project/",
      tech: ["Html", "CSS","JavaScript"]
    },
    {
      image: "/src/img/website-icon-11.png",
      title: "grow & shine",
      description: "A portfolio showcasing my journey as a frontend developer, featuring modern UI/UX design and interactive web experiences.",
      link: "https://rishurajput1407.github.io/project-1/",
      tech: ["Html", "CSS"]
    },
    {
      image: "/src/img/Calculator_512.png",
      title: "Calculator App",
      description: "A simple and interactive calculator app built with JavaScript for quick and accurate calculations.",
      link: "https://rishurajput1407.github.io/Project-calculator/",
      tech: ["Html", "CSS", "JavaScript"]
    },
    {
      image: "/src/img/icon.png",
      title: "Text-To-Speech-Converter",
      description: "A text-to-speech converter using the Web Speech API for seamless audio narration.",
      link: "https://github.com/RishuRajput1407/Text-To-Speech-Converter_Project.git",
      tech: ["Html", "Web Speech API", "AI"]
    },
    {
      image: "/src/img/tic-tac-toe-xo-game-260nw-2374366691.png",
      title: "Tic Tac Toe",
      description: "A classic Tic Tac Toe game with a modern UI and interactive gameplay.",
      link: "https://github.com/RishuRajput1407/Tic-Tac-Toe-Game.git",
      tech: ["Html", "CSS", "JavaScript"]
    },
    {
      image: "/src/img/images.png",
      title: "Weather-App",
      description: "A weather app that provides real-time updates using the Weather API and a sleek user interface.",
      link: "https://github.com/RishuRajput1407/Weather-API.git",
      tech: ["Html", "Weather API", "JavaScript"]
    },
  
    {
      image: "/src/img/time-clock-icon-clock-clipart-clock-icons-alarm-png.png",
      title: "Clock-Alam",
      description: "A functional alarm clock app with a sleek design and customizable alerts.",
      link: "https://rishurajput1407.github.io/Alarm_Clock_Project/",
      tech: ["Html", "CSS ", "JavaScript"]
    },
  
    {
      image: "/src/img/food-express-logo-fast-food_57516-22.jpg",
      title: "FoodExpress_Project",
      description: "An interactive food delivery platform with a user-friendly interface and smooth navigation.",
      link: "https://rishurajput1407.github.io/FoodExpress_Project/",
      tech: ["Html", "CSS", "JavaScript"]
    },
  
    {
      image: "/src/img/react-logo@3x.png",
      title: "E-Shop_Project",
      description: "A sleek and responsive e-commerce platform built with React for a seamless shopping experience.",
      link: "https://github.com/RishuRajput1407/E-commerce-project.git",
      tech: ["React"]
    },
  ];

  return (
    <section id="project" className="py-20 px-6 lg:px-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">My Projects</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Explore my latest projects showcasing my skills in web development, 
          design, and problem-solving capabilities.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-900 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    View Project
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
