import React, { useRef, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4tyv581', 'template_ap8ae4n', form.current, {
        publicKey: 'EH2NqvL_hPDkC7CAb',
      })
      .then(
        () => {
          setStatusMessage(' Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          setStatusMessage('Failed to send message. Please try again later.');
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section className="contact-section">
      <p className="section-label-green">CONTACT</p>
      <p className="main-title-c">
        Feel Free To<span className="green"> Contact Me</span>
      </p>

      <div className="message-sec">
        <div className="message-heading">
          <h1 className="message-title">Let's Talk!</h1>
          <p>
            We work with professionals and leaders who want to build careers
            that fulfill them intellectually and financially.
          </p>
        </div>

        <div className="message-form">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              className="input-field"
              required
            />

            <div className="email-phone">
              <input
                type="email"
                placeholder="Email"
                name="user_email"
                className="input-field"
                required
              />
              <input
                type="tel"
                placeholder="Phone"
                name="user_phone"
                className="input-field"
                required
              />
            </div>

            <textarea
              placeholder="Tell us about your project"
              rows={5}
              className="input-field"
              name="message"
              required
            ></textarea>

            <button type="submit" className="submit-button">
              Send Message
            </button>

            {/* Status message for user feedback */}
            {statusMessage && (
              <p className="status-message">{statusMessage}</p>
            )}
          </form>
        </div>
      </div>

      <div className="contact-info">
        <div className="contact-info-card">
          <div className="contact-info-icon">
            <img src="call.svg" alt="Call" />
          </div>
          <div>
            <div className="contact-info-label">CALL US</div>
            <div className="contact-info-value">+94 768 790 881</div>
          </div>
        </div>

        <div className="contact-info-card">
          <div className="contact-info-icon">
            <img src="message.svg" alt="Text" />
          </div>
          <div>
            <div className="contact-info-label">TEXT US</div>
            <div className="contact-info-value">+94 768 790 881</div>
          </div>
        </div>

        <div className="contact-info-card">
          <div className="contact-info-icon">
            <img src="location.svg" alt="Location" />
          </div>
          <div>
            <div className="contact-info-label">LOCATE US</div>
            <div className="contact-info-value">Kurunegala, Sri Lanka</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
