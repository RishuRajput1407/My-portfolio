
export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 lg:px-24">
      <h2 className="text-3xl font-bold text-center mb-4">
        <i className="fas fa-headset mr-2"></i> Get in Touch
      </h2>
      <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
        <div className="flex-1">
          <img 
            src="/src/img/contact1.png" 
            alt="Contact"
            className="max-w-lg mx-auto"
          />
        </div>
        <div className="flex-1">
          <form className="space-y-6">
            <div>
              <input 
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <input 
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <input 
                type="tel"
                placeholder="Phone"
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <textarea 
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
            >
              Submit <i className="fa fa-paper-plane ml-2"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
