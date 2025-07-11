import React, { useState } from 'react';
// Cambio de prueba para verificar Git
import { Link } from 'react-router-dom';
import './Contact.css';

function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="contact-container">
      <header className="contact-header">
        <Link to="/" style={{ display: "flex", height: "100%" }}>
          <img 
            src="https://ggi.com.mx/wp-content/uploads/2023/11/logo-ggi-white-blackbg.svg" 
            alt="Logo Gigante Grupo Inmobiliario" 
            className="contact-logo" 
          />
        </Link>
        <nav className="contact-nav">
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </nav>
      </header>
      
      <div className="contact-content">
        <div className="contact-inner">
          {/* Left column - Contact information */}
          <div className="contact-info">
            <h1>ESTAMOS PARA AYUDARTE</h1>
            
            <p>
              Si tienes dudas, necesitas ayuda o soporte sobre nuestros servicios, puedes contactarnos a través de cualquiera de los siguientes medios:
            </p>
            
            <ul>
              <li>
                <strong>Email:</strong> <a href="mailto:soporte@ggi.com.mx">gigantegrupoinmobiliario@gmail.com</a>
              </li>
              <li>
                <strong>Teléfono:</strong> <a href="tel:+593999105818">+593 999 105 818</a>
              </li>
              <li>
                <strong>Dirección:</strong> Av. Ejército Nacional 769. Esquina Moliere, Miguel Hidalgo. C.P. 11520. Ciudad de México
              </li>
            </ul>
            
            <div className="separator"></div>
            
            <div className="additional-info">
              <p>
                <strong>Soporte disponible para usuarios en Bolivia, Colombia, Uruguay, Ecuador, México y Estados Unidos.<br /><br />
                Si eres revisor de la App Store o Google Play, esta página es pública y cumple con los requisitos de soporte internacional.</strong>
              </p>
            </div>
          </div>
          
          {/* Right column - Contact form */}
          <div className="contact-form-container">
            {!formSubmitted ? (
              <>
                <h2>Formulario de Contacto</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Nombre:</label>
                    <input 
                      type="text" 
                      id="name" 
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input 
                      type="email" 
                      id="email" 
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Teléfono:</label>
                    <input 
                      type="tel" 
                      id="phone" 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Mensaje:</label>
                    <textarea 
                      id="message" 
                      required 
                      rows="4"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="form-submit-btn"
                  >
                    Enviar mensaje
                  </button>
                </form>
              </>
            ) : (
              <div className="thank-you-message">
                <h2>¡Gracias por enviarlo!</h2>
                <p>Hemos recibido tu mensaje. Pronto nos comunicaremos contigo.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
