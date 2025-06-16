import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Product = ({ curElem }) => {
  const { id, title, thumbnail, price, category } = curElem;

  return (
    <Wrapper>
      <NavLink to={`/singleproduct/${id}`}>
        <div className="card">
          <figure>
            <img src={thumbnail} />
          </figure>
          <figcaption className="caption">{category}</figcaption>
        </div>
        <div className="card-data">
          <div className="card-data-flex">
            <h3>{title}</h3>
            <p className="card-data--price">${price}</p>
          </div>
        </div>
      </NavLink>
    </Wrapper>
  );
};

export default Product;

const Wrapper = styled.div`
  .card {
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    transition: all 0.3s linear;

    &:hover {
      transform: scale(1.02);
      box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
    }

    figure {
      width: 100%;
      height: 20rem;
      position: relative;
      overflow: hidden;
      transition: all 0.5s linear;

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.05);
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .caption {
      position: absolute;
      right: 1rem;
      bottom: 1rem;
      text-transform: capitalize;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.5rem 1rem;
      font-size: 1.2rem;
      border-radius: 0.5rem;
    }
  }

  .card-data {
    padding: 1rem 0;
  }

  .card-data-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
      font-size: 1.6rem;
      margin-bottom: 0.5rem;
    }

    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
      font-size: 1.6rem;
      font-weight: 600;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .card {
      figure {
        height: 15rem;
      }
    }
  }
`;