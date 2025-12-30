import React, { useRef, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

function Contact() {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm('service_4tyv581', 'template_ap8ae4n', form.current, {
        publicKey: 'yD32_sCSOy1CzGItp',
      })
      .then(
        () => {
          setStatusMessage('✓ Message sent successfully!');
          form.current.reset();
          setIsSubmitting(false);
          setTimeout(() => setStatusMessage(''), 5000);
        },
        (error) => {
          setStatusMessage('✗ Failed to send message. Please try again later.');
          console.log('FAILED...', error.text);
          setIsSubmitting(false);
          setTimeout(() => setStatusMessage(''), 5000);
        }
      );
  };

  const contactData = [
    {
      icon: <FaPhone />,
      label: "CALL ME",
      value: "+94 768 790 881",
      gradient: "linear-gradient(135deg, #10b981, #34d399)"
    },
    {
      icon: <FaEnvelope />,
      label: "EMAIL ME",
      value: "chamilanirmal55@gmail.com",
      gradient: "linear-gradient(135deg, #059669, #10b981)"
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "LOCATION",
      value: "Kurunegala, Sri Lanka",
      gradient: "linear-gradient(135deg, #10b981, #34d399)"
    }
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="contact-background">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <div className="bg-shape shape-3"></div>
      </div>

      <div className="contact-container">
        
        {/* Header Section */}
        <div className="section-header-contact">
          <p className="section-label-green">
            <span className="label-dot"></span>
            CONTACT
            <span className="label-dot"></span>
          </p>
          <h1 className="main-title-c">
            Feel Free To <span className="green">Contact Me</span>
          </h1>
          <div className="title-underline-contact"></div>
          <p className="section-subtitle-contact">
            Let's collaborate and bring your ideas to life
          </p>
        </div>

        <div className="contact-content">
          
          {/* Message Form */}
          <div className="message-sec">
            <div className="card-shine-effect"></div>
            
            <div className="message-heading">
              <h2 className="message-title">Let's Talk!</h2>
              <p className="message-subtitle">
                I work with professionals and leaders who want to build careers
                that fulfill them intellectually and financially.
              </p>
            </div>

            <div className="message-form">
              <form ref={form} onSubmit={sendEmail}>
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="user_name"
                    className="input-field"
                    required
                  />
                  <span className="input-focus-border"></span>
                </div>

                <div className="email-phone">
                  <div className="input-group">
                    <input
                      type="email"
                      placeholder="Email Address"
                      name="user_email"
                      className="input-field"
                      required
                    />
                    <span className="input-focus-border"></span>
                  </div>
                  <div className="input-group">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      name="user_phone"
                      className="input-field"
                      required
                    />
                    <span className="input-focus-border"></span>
                  </div>
                </div>

                <div className="input-group">
                  <textarea
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="input-field textarea-field"
                    name="message"
                    required
                  ></textarea>
                  <span className="input-focus-border"></span>
                </div>

                <button 
                  type="submit" 
                  className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="button-icon" />
                      Send Message
                    </>
                  )}
                </button>

                {statusMessage && (
                  <div className={`status-message ${statusMessage.includes('✓') ? 'success' : 'error'}`}>
                    {statusMessage}
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="contact-info">
            {contactData.map((item, index) => (
              <div 
                className="contact-info-card" 
                key={index}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div 
                  className="contact-info-icon"
                  style={{ background: item.gradient }}
                >
                  <div className="icon-inner">
                    {item.icon}
                  </div>
                  <div className="icon-glow"></div>
                </div>
                <div className="contact-info-text">
                  <div className="contact-info-label">{item.label}</div>
                  <div className="contact-info-value">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;