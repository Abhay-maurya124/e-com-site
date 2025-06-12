import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started</h3>
            <h3>Talk to us today</h3>
          </div>
          <div>
            <button className="btn">
              <NavLink to="/contact">Get started</NavLink>
            </button>
          </div>
        </div>
      </section>

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>Abhay Store</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
              in.
            </p>
          </div>

          <div className="footer-subscription">
            <h3>Subscribe to get important updates</h3>
            <form action="#">
              <input type="email" placeholder="Your e-mail" required />
              <input type="submit" value="Subscribe" />
            </form>
          </div>

          <div className="footer-social">
            <h3>Follow us</h3>
            <div className="footer-social--icons">
              <a href="https://discord.com" target="_blank" rel="noreferrer">
                <FaDiscord className="icon" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram className="icon" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <FaYoutube className="icon" />
              </a>
            </div>
          </div>

          <div className="footer-contact">
            <h3>Call us</h3>
            <a href="tel:+91123456789">+91 123456789</a>
          </div>
        </div>

        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} Abhay Store. All Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    background-color: #f8f9fa;

    .grid {
      gap: 0;
    }

    .grid-two-column {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .btn {
      padding: 1.2rem 2.4rem;
      font-size: 1.6rem;
background-color:blue;
border-radius:20px;
      a {
        color: white;
        text-decoration: none;
      }
    }
  }

  footer {
    padding: 14rem 0 4rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    background-color: #212529;
    color: #f8f9fa;

    h3 {
      color: #f8f9fa;
      margin-bottom: 2.4rem;
      font-size: 1.8rem;
    }

    p {
      color: #adb5bd;
      line-height: 1.6;
    }

    a {
      color: #adb5bd;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: #f8f9fa;
      }
    }

    .container {
      max-width: 120rem;
      margin: 0 auto;
      padding: 0 3.2rem;
    }

    .grid-four-column {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 4.8rem;
    }

    .footer-about {
      p {
        margin-top: 1.6rem;
      }
    }

    .footer-subscription {
      form {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;

        input[type="email"] {
          padding: 1.2rem;
          border: none;
          border-radius: 0.4rem;
          background-color: #495057;
          color: #f8f9fa;

          &::placeholder {
            color: #adb5bd;
          }
        }

        input[type="submit"] {
          padding: 1.2rem;
          border: none;
          border-radius: 0.4rem;
          background-color: #0d6efd;
          color: #f8f9fa;
          cursor: pointer;
          transition: background-color 0.3s;

          &:hover {
            background-color: #0b5ed7;
          }
        }
      }
    }

    .footer-social {
      .footer-social--icons {
        display: flex;
        gap: 2rem;

        .icon {
          font-size: 2.4rem;
          color: #adb5bd;
          transition: color 0.3s, transform 0.3s;

          &:hover {
            color: #f8f9fa;
            transform: scale(1.2);
          }
        }
      }
    }

    .footer-contact {
      a {
        display: block;
        margin-top: 1.6rem;
        font-size: 1.6rem;
      }
    }

    .footer-bottom--section {
      padding-top: 6rem;

      hr {
        margin-bottom: 3.2rem;
        border: 0.1rem solid #495057;
      }

      .grid-two-column {
        display: flex;
        justify-content: space-between;
        align-items: center;

        div {
          display: flex;
          gap: 2.4rem;
        }
      }
    }
  }

  @media (max-width: 1200px) {
    .contact-short {
      max-width: 80vw;
      padding: 3rem 6rem;
    }
  }

  @media (max-width: 768px) {
    .contact-short {
      max-width: 90vw;
      padding: 2rem 3rem;
      transform: translateY(30%);

      .grid-two-column {
        flex-direction: column;
        gap: 2rem;
        text-align: center;
      }
    }

    footer {
      padding: 16rem 0 3rem 0;

      .grid-four-column {
        grid-template-columns: repeat(2, 1fr);
        gap: 3.2rem;
      }
    }
  }

  @media (max-width: 576px) {
    .contact-short {
      padding: 1.5rem 2rem;
    }

    footer {
      .grid-four-column {
        grid-template-columns: 1fr;
      }

      .footer-bottom--section {
        .grid-two-column {
          flex-direction: column;
          gap: 1.6rem;
          text-align: center;

          div {
            flex-direction: column;
            gap: 1.2rem;
          }
        }
      }
    }
  }
`;