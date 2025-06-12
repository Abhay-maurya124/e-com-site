import React from "react";
import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentFill } from "react-icons/ri";

const Services = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid">
          <div className="card card-1">
            <div className="icon-container">
              <TbTruckDelivery className="icon" />
            </div>
            <h3>Super Fast and Free Delivery</h3>
            <p>Get your products delivered within 2-3 business days</p>
          </div>
          
          <div className="card card-2">
            <div className="service-row">
              <div className="service-box">
                <div className="icon-container">
                  <MdSecurity className="icon" />
                </div>
                <h3>Non-Contact Shipping</h3>
                <p>Safe and hygienic delivery options</p>
              </div>
              <div className="service-box">
                <div className="icon-container">
                  <GiReceiveMoney className="icon" />
                </div>
                <h3>Money-Back Guaranteed</h3>
                <p>30-day hassle-free returns</p>
              </div>
            </div>
          </div>
          
          <div className="card card-3">
            <div className="icon-container">
              <RiSecurePaymentFill className="icon" />
            </div>
            <h3>Super Secure Payment System</h3>
            <p>Encrypted transactions for your safety</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Services;

const Wrapper = styled.section`
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.colors.bg || "#f8f9fa"};

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .grid {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    
    @media (min-width: 992px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  .card {
    background: white;
    border-radius: 1rem;
    padding: 3rem 2rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    }

    h3 {
      font-size: 1.8rem;
      margin: 1.5rem 0 1rem;
      color: ${({ theme }) => theme.colors.heading || "#2e2e2e"};
    }

    p {
      color: ${({ theme }) => theme.colors.text || "#6c757d"};
      font-size: 1.4rem;
      line-height: 1.6;
    }
  }

  .card-1, .card-3 {
    @media (max-width: 991px) {
      grid-column: span 2;
    }

    @media (max-width: 767px) {
      grid-column: span 1;
    }
  }

  .card-2 {
    .service-row {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
      height: 100%;
      
      @media (min-width: 576px) {
        grid-template-columns: 1fr 1fr;
      }
    }

    .service-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
  }

  .icon-container {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.iconBg || "#f0f4ff"};
    margin-bottom: 1.5rem;

    .icon {
      font-size: 3.5rem;
      color: ${({ theme }) => theme.colors.primary || "#5138ee"};
    }
  }

  @media (max-width: 576px) {
    padding: 4rem 1rem;
    
    .card {
      padding: 2rem 1.5rem;
    }
    
    .icon-container {
      width: 6rem;
      height: 6rem;
      
      .icon {
        font-size: 2.5rem;
      }
    }
  }
`;