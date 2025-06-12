import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Errorpage = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="error-content">
          <h2>404!</h2>
          <h3>UH OH! YOU'RE LOST</h3>
          <p>
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the homepage.
          </p>
          <NavLink to="/">
            <button className="home-btn">Go back to Home</button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

export default Errorpage;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f9fa;
  padding: 0 1rem;

  .container {
    max-width: 1200px;
    width: 100%;
    padding: 2rem;
    text-align: center;
  }

  .error-content {
    background: #fff;
    padding: 3rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  h2 {
    font-size: 6rem;
    color: #dc3545;
    margin: 0;
    line-height: 1;
  }

  h3 {
    font-size: 2rem;
    color: #343a40;
    margin: 1rem 0;
  }

  p {
    font-size: 1.1rem;
    color: #6c757d;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .home-btn {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 0.8rem 2rem;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #0056b3;
      transform: translateY(-2px);
    }
  }

  /* Responsive styles */
  @media (max-width: 768px) {
    h2 {
      font-size: 4rem;
    }

    h3 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }

    .error-content {
      padding: 2rem 1.5rem;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 3rem;
    }

    .home-btn {
      padding: 0.6rem 1.5rem;
    }
  }
`;