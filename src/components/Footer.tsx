
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-xl font-bold mb-4">Risu's Portfolio</h3>
          <p className="text-gray-400">
            Thank you for visiting my personal portfolio website. Connect with me over socials.
            <br/><br/>
            Keep Rising. Connect with me over live chat!
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <div className="space-y-2">
            {['home', 'about', 'skills', 'education', 'project', 'contact'].map((link) => (
              <a 
                key={link}
                href={`#${link}`}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                <i className='bx bx-right-arrow-circle mr-2'></i>
                {link}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Info</h3>
          <div className="space-y-2 text-gray-400">
            <p><i className='bx bxs-phone-call mr-2'></i>+91 7070-XXX-XXX</p>
            <p><i className='bx bxl-gmail mr-2'></i>rishurajpoot304@gmail.com</p>
            <p><i className='bx bxs-map mr-2'></i>Noida, India-201301</p>
          </div>
          <div className="flex gap-4 mt-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <i className='bx bxl-linkedin text-xl'></i>
            </a>
            <a href="https://github.com/RishuRajput1407" className="text-gray-400 hover:text-white transition-colors">
              <i className='bx bxl-github text-xl'></i>
            </a>
            <a href="mailto:rishurajpoot304@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <i className='bx bxl-gmail text-xl'></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <i className='bx bxl-twitter text-xl'></i>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-12 pt-8 border-t border-gray-800">
        <p>Designed with <i className='bx bxs-heart text-red-500'></i> by Risu Kumar</p>
      </div>
    </footer>
  );
};
