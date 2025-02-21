
export const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a 
        href="https://wa.me/919134842606" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block hover:opacity-90 transition-opacity"
      >
        <img 
          src="/src/img/whatsApp_icon.png" 
          alt="WhatsApp" 
          className="w-12 h-12"
        />
      </a>
    </div>
  );
};
