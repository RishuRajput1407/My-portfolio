
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import photo1 from '../img/photo1.png';


export const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Frontend Developer', 'Web Designer', 'UI/UX Designer'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-between px-6 lg:px-24 py-20 bg-gradient-to-r from-gradient-start to-gradient-end text-white">
      <div className="flex-1 max-w-2xl">
        <h3 className="text-xl mb-2 text-soft-yellow">Hello, I'm</h3>
        <h1 className="text-5xl font-bold mb-4 text-white">Risu Kumar</h1>
        <h5 className="text-2xl mb-4">
          And I'm a <span ref={el} className="text-soft-pink"></span>
        </h5>
        <p className="text-soft-blue mb-8">
          I'm a Creative Designer based in Noida, and I'm very passionate and dedicated to my work.
        </p>
        <div className="flex gap-4 mb-8">
          <a href="#" className="text-2xl hover:text-soft-yellow transition-colors">
            <i className='bx bxl-facebook'></i>
          </a>
          <a href="#" className="text-2xl hover:text-soft-yellow transition-colors">
            <i className='bx bxl-twitter'></i>
          </a>
          <a 
            href="www.linkedin.com/in/risu-kumar-358237245" 
            className="text-2xl hover:text-soft-yellow transition-colors"
          >
            <i className='bx bxl-linkedin'></i>
          </a>
          <a 
            href="https://github.com/RishuRajput1407" 
            className="text-2xl hover:text-soft-yellow transition-colors"
          >
            <i className='bx bxl-github'></i>
          </a>
        </div>
        <a 
          href="#about" 
          className="inline-block bg-accent text-white px-8 py-3 rounded-full hover:bg-accent/90 transition-colors"
        >
          About Me
        </a>
      </div>
        <div className="perspective-1000 relative">
  {/* Border with shadow effect */}
          <div className="absolute inset-0 border-4 border-blue-500 rounded-lg shadow-lg opacity-75 transition-opacity duration-500 hover:opacity-100"></div>
  
  {/* Image with hover rotation and shadow */}
      <img 
         src={photo1}
          alt="Risu Kumar" 
          className="max-w-xs mx-auto rounded-lg shadow-2xl transform transition-transform duration-500 hover:rotate-y-6 hover:scale-110 hover:shadow-blue-500 hover:shadow-2xl"
  />
</div>
    </section>
  );
};

