import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <div className="contact-container">
        <h2 className="contact-heading">Feel free to Reach Out</h2>
        
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48773.98545843798!2d77.0330002705504!3d28.639860716294965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05190c6e9335%3A0xf345f647ae472046!2sAggarwal%20Store!5e0!3m2!1sen!2sin!4v1749700180112!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
        </div>

        <div className="form-container">
          <form action="https://formspree.io/f/xeqdgwna" method="POST" className="contact-form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Username"
                name="username"
                required
                autoComplete="off"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                name="email"
                required
                autoComplete="off"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Your Message"
                name="message"
                required
                autoComplete="off"
                className="form-textarea"
              />
            </div>
            <button type="submit" className="submit-btn">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.section`
  padding: 5rem 2rem;
  background-color: #f9f9f9;
  min-height: 100vh;

  .contact-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
      align-item:center;

    gap: 3rem;
  }

  .contact-heading {
    font-size: 2.5rem;
    color: #333;
    text-align: center;
    margin-bottom: 1rem;
    position: relative;
    
    &::after {
      content: '';
      display: block;
      width: 80px;
      height: 4px;
      background: #007bff;
      margin: 1rem auto;
      border-radius: 2px;
    }
  }

  .map-container {
    width: 100%;
    height: 400px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  .form-container {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
  }

  .form-input,
  .form-textarea {
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: #007bff;
      box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
    }
  }

  .form-textarea {
    min-height: 150px;
    resize: vertical;
  }

  .submit-btn {
    background-color: #007bff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;

    &:hover {
      background-color: #0056b3;
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }
  }

  /* Responsive Styles */
  @media (max-width: 768px) {
    padding: 3rem 1rem;

    .contact-heading {
      font-size: 2rem;
    }

    .map-container {
      height: 300px;
    }
  }

  @media (max-width: 576px) {
    .contact-heading {
      font-size: 1.8rem;
    }

    .form-container {
      padding: 1.5rem;
    }

    .submit-btn {
      padding: 0.8rem 1.5rem;
    }
  }
`;