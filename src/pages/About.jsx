import React from 'react';
import Herosecction from "../component/Herosecction.jsx"
const About = () => {
  const data = {
    name: "Abhay E-commerce"
  };
  return (
<Herosecction myData={data} />  );
};

export default About;