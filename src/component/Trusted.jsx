import React from "react";
import styled from "styled-components";

const Trusted = () => {
  return (
    <Wrapper className="trusted-section">
      <div className="container">
        <h3 className="heading">Trusted By 1000+ Companies</h3>
        <div className="brand-section-slider">
          {/* Brand Slides */}
          <div className="slide">
            <img
              src="https://www.zarla.com/images/fedex-logo-2400x2400-20223105.png?crop=1:1,smart&width=150&dpr=2"
              alt="FedEx"
              className="brand-logo"
            />
          </div>
          <div className="slide">
            <img
              src="https://www.zarla.com/images/nike-logo-2400x2400-20220504.png?crop=1:1,smart&width=150&dpr=2"
              alt="Nike"
              className="brand-logo"
            />
          </div>
          <div className="slide">
            <img
              src="https://www.zarla.com/images/zarla-chanel-combination-logo-2400x2400-20240701.png?crop=1:1,smart&width=150&dpr=2"
              alt="Chanel"
              className="brand-logo"
            />
          </div>
          <div className="slide">
            <img
              src="https://www.zarla.com/images/ibm-logo-2400x2400-20220519-2.png?crop=1:1,smart&width=150&dpr=2"
              alt="IBM"
              className="brand-logo"
            />
          </div>
          <div className="slide">
            <img
              src="https://www.zarla.com/images/ebay-logo-2400x2400-20223105.png?crop=1:1,smart&width=150&dpr=2"
              alt="eBay"
              className="brand-logo"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Trusted;

const Wrapper = styled.section`
  padding: 6rem 0;
  background-color: ${({ theme }) => theme.colors.bg || "#f8f9fa"};

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .heading {
    text-align: center;
    font-size: 2.8rem;
    margin-bottom: 4rem;
    color: ${({ theme }) => theme.colors.heading || "#2e2e2e"};
    position: relative;
    
    &::after {
      content: "";
      display: block;
      width: 80px;
      height: 3px;
      background: ${({ theme }) => theme.colors.primary || "#5138ee"};
      margin: 1.5rem auto 0;
    }
  }

  .brand-section-slider {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }

  .slide {
    flex: 1;
    min-width: 150px;
    max-width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    }
  }

  .brand-logo {
    width: 100%;
    height: auto;
    object-fit: contain;
    filter: grayscale(100%);
    opacity: 0.7;
    transition: all 0.3s ease;

    &:hover {
      filter: grayscale(0);
      opacity: 1;
    }
  }

  /* Responsive Styles */
  @media (max-width: 992px) {
    padding: 4rem 0;

    .heading {
      font-size: 2.4rem;
      margin-bottom: 3rem;
    }

    .brand-section-slider {
      gap: 2rem;
    }

    .slide {
      min-width: 120px;
      padding: 1rem;
    }
  }

  @media (max-width: 768px) {
    .brand-section-slider {
      gap: 1.5rem;
    }

    .slide {
      min-width: 100px;
      max-width: 120px;
    }
  }

  @media (max-width: 576px) {
    padding: 3rem 0;

    .heading {
      font-size: 2rem;
      margin-bottom: 2rem;
    }

    .brand-section-slider {
      gap: 1rem;
    }

    .slide {
      min-width: 80px;
      max-width: 100px;
      padding: 0.8rem;
    }
  }
`;