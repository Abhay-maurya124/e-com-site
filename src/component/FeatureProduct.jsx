import styled from "styled-components";
import Product from "./Product";
import { useProductContext } from "../contex/Productcontext";

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();
  
  if(isLoading){
    return <div className="loading">Loading...</div>;
  }

  return (
    <Wrapper className="section">
      <div className="container">
        <div className="intro-data">Check Now!</div>
        <div className="heading">
          <h3>Our Feature Products</h3>
          <div className="underline"></div>
        </div>
        <div className="grid grid-three-column">
          {featureProducts.map((curElem) => {
            return <Product key={curElem.id} curElem={curElem} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default FeatureProduct;

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
    margin: 0 auto;
  }

  .intro-data {
    color: ${({ theme }) => theme.colors.helper};
    font-size: 1.6rem;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  .heading {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 4rem;

    h3 {
      font-size: 3.2rem;
      color: ${({ theme }) => theme.colors.text};
      font-weight: 700;
      margin-bottom: 1rem;
    }

    .underline {
      height: 0.4rem;
      width: 8rem;
      background-color: ${({ theme }) => theme.colors.helper};
    }
  }

  .grid {
    display: grid;
    gap: 3.2rem;
  }

  .grid-three-column {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-three-column {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  }
`;