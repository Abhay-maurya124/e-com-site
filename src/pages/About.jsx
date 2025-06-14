import React from 'react';
import Herosecction from "../component/Herosecction.jsx";
import { useProductContext } from '../contex/Productcontext.jsx';

const About = () => {
  const products = useProductContext(); // Now correctly gets products
  const data = { name: "Abhay E-commerce" };

  return (
    <>
      <h1>Products Count: {products.length}</h1>
      <Herosecction myData={data} />
    </>
  );
};

export default About;