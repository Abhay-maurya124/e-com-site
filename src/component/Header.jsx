import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Nav from './Nav'

const Header = () => {
  return (
    <MainHeader className="head">
        <NavLink to="/">
            <img src="./images/logo.png" alt="My logo img" className="logo" />
        </NavLink>
        <Nav/>
    </MainHeader> 
  )
}

const MainHeader = styled.header`
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  
  .logo {
    height: 10rem;
        margin-bottom:1rem;
  }
`

export default Header