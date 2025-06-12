import React from "react";
import About from "./pages/About.jsx";
import Homepage from "./pages/Homepage.jsx";
import Product from "./pages/Product.jsx";
import Contact from "./pages/Contact.jsx";
import Cart from "./pages/Cart.jsx";
import Errorpage from "./pages/Errorpage.jsx";
import Globlestyle from "./Styles/Globlestyle.jsx"
import Singleproduct from "./pages/Singleproduct.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./component/Header.jsx";
import Footer from "./component/Footer.jsx";

const App = () => {
  const theme = {
    colors: {
      bg: "#fff",
      primary: "#007bff",
      secondary: "#6c757d",
    },
    fonts: {
      main: "'Inter', sans-serif",
    },
    media:{
      mobile: "768px",
    },
    breakpoints: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Globlestyle />
        <Header/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="*" element={<Errorpage />} />
          <Route path="/Singleproduct/:id" element={<Singleproduct />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;