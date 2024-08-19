import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const WhatsAppButton = () => {
  const phoneNumber = "233502319686"; // Pharmacist's WhatsApp number
  const message = "Hello, I need assistance with a medication."; // Predefined message

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366',
        color: 'white',
        borderRadius: '50%',
        padding: '15px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        zIndex: '1000',
      }}
    >
      <i className="fab fa-whatsapp" style={{ fontSize: '24px' }}></i>
    </a>
  );
};

export default WhatsAppButton;
