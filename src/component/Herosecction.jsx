import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../Styles/Button.jsx";

const Herosecction = ({ myData }) => {
  const { name } = myData;
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">welcome to</p>
            <h1>{name}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              ea voluptates perferendis quidem, excepturi modi aliquam magni
              fugit perspiciatis repellendus!
            </p>
            <NavLink to="./Product">
              <Button>Shop Now</Button>
            </NavLink>
          </div>
          <div className="hero-secction-image">
            <figure>
              <img src="./images/family-shoppers.jpg" alt="Hero-section-photo" className="img-style" />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Herosecction;

const Wrapper = styled.section`
  padding: 9rem 0;

  .container {
    max-width: 120rem;
    margin: 0 auto;
  }

  .grid {
    display: grid;
    gap: 9rem;
  }

  .grid-two-column {
    grid-template-columns: repeat(2, 1fr);
  }

  .hero-section-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .intro-data {
    margin-bottom: 0;
    text-transform: uppercase;
    color: #5138ee;
    font-weight: 500;
  }

  .hero-secction-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img-style {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;