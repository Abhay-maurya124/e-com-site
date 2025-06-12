import { createGlobalStyle } from "styled-components";

 const Globlestyle = createGlobalStyle`
  /* Reset and base styles */
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; /* 1rem = 10px */
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.main};
    line-height: 1.5;
    color: #333;
    background-color: ${({ theme }) => theme.colors.bg};
    min-height: 100vh;
    text-rendering: optimizeSpeed;
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  h1 { font-size: 3.2rem; }
  h2 { font-size: 2.8rem; }
  h3 { font-size: 2.4rem; }
  h4 { font-size: 2.0rem; }
  h5 { font-size: 1.8rem; }
  h6 { font-size: 1.6rem; }

  p {
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  /* Forms */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  /* Layout */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
    .grid{
    display:grid;
    gap:9rem;
    }
    .grid-two-column{
    grid-template-columns:repeat(2,1fr);
    }
.grid-three-column{
    grid-template-columns: repeat(3,1fr);
}
.grid-four-column{
    grid-template-columns: 1fr 1.2fr .5fr .8fr;
}
.grid-five-column{
    grid-template-columns: repeat(5,1fr);
}
  /* Utility classes */
  .text-center { text-align: center; }
  .full-width { width: 100%; }
  .flex { display: flex; }
  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Responsive media */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Accessibility */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* Responsive typography */
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    html {
      font-size: 56.25%;
    }

    h1 { font-size: 2.8rem; }
    h2 { font-size: 2.4rem; }
    h3 { font-size: 2.0rem; }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    html {
      font-size: 50%;
    }

    .container {
      padding: 0 1.5rem;
    }
  }
`;
export default Globlestyle;