import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { IoMdCart } from "react-icons/io";
import { CgClose, CgMenu } from "react-icons/cg";

const NavContainer = styled.nav`
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
  }

  .navbar-lists {
    display: flex;
    gap: 3.8rem;
    align-items: center;
    margin-right: 3rem;
  }

  .navbar-link {
    &:link,
    &:visited {
      display: inline-block;
      text-decoration: none;
      font-size: 1.6rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.secondary};
      transition: color 0.3s linear;
    }

    &:hover,
    &:active {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  .mobile-navbar-btn {
    display: none;
    background: transparent;
    cursor: pointer;
    border: none;
    color: ${({ theme }) => theme.colors.secondary};
  }

  .mobile-nav-icon {
    width: 4rem;
    height: 4rem;
  }

  .mobile-nav-icon[name="close-outline"] {
    display: none;
  }

  .cart-trolley--link {
    position: relative;

    .cart-trolley {
      position: relative;
      font-size: 3.2rem;
    }

    .cart-total--item {
      width: 2.4rem;
      height: 2.4rem;
      position: absolute;
      background-color: #000;
      color: #fff;
      border-radius: 50%;
      display: grid;
      place-items: center;
      top: -20%;
      left: 70%;
    }
  }

  .user-login--name {
    text-transform: capitalize;
  }

  .user-logout,
  .user-login {
    font-size: 1.4rem;
    padding: 0.8rem 1.4rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn {
      display: inline-block;
      z-index: 999;
    }

    .navbar-lists {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
      transform: translateX(100%);
      visibility: hidden;
      opacity: 0;
      transition: all 0.3s linear;
    }

    .active .navbar-lists {
      transform: translateX(0);
      visibility: visible;
      opacity: 1;
      z-index: 99;
    }

    .active .mobile-nav-icon[name="close-outline"] {
      display: inline-block;
    }

    .active .mobile-nav-icon[name="menu-outline"] {
      display: none;
    }

    .navbar-link {
      font-size: 2.2rem;
      margin: 1rem 0;
    }
  }
`;

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <NavContainer>
      <div className={menuOpen ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <NavLink to="/" className="navbar-link home-link" onClick={toggleMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navbar-link" onClick={toggleMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/product" className="navbar-link" onClick={toggleMenu}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="navbar-link" onClick={toggleMenu}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="navbar-link cart-trolley--link" onClick={toggleMenu}>
              <IoMdCart className="cart-trolley" />
              <span className="cart-total--item">10</span>
            </NavLink>
          </li>
        </ul>

        <div className="mobile-navbar-btn">
          {menuOpen ? (
            <CgClose
              name="close-outline"
              className="mobile-nav-icon"
              onClick={toggleMenu}
            />
          ) : (
            <CgMenu
              name="menu-outline"
              className="mobile-nav-icon"
              onClick={toggleMenu}
            />
          )}
        </div>
      </div>
    </NavContainer>
  );
};

export default Nav;