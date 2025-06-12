import styled from "styled-components";

const buttonStyles = `
  text-decoration: none;
  max-width: auto;
  background-color: rgb(98 84 243);
  color: rgb(255, 255, 255);
  padding: 1.4rem 2.4rem;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  font-weight: 600;
  letter-spacing: 0.05em;
  border-radius: 0.4rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
  
  /* Rest of your styles... */
  
  &:hover {
    background-color: rgb(81 68 223);
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 
                0 4px 6px -2px rgba(0, 0, 0, 0.05);
    background-position: right center;
  }
  
  /* Include all other states (active, focus, etc.) */
`;

export const Button = styled.button`
  ${buttonStyles}
`;

export const StyledButtonLink = styled.a`
  ${buttonStyles}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;