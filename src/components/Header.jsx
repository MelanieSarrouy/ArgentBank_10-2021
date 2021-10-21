import React from 'react'
import logo from '../assets/argentBankLogo.png'
import { Nav, NavLinkElements, Logo, HeaderStyle } from '../utils/styles/components/header'

const Header = () => {
  return (
    <HeaderStyle>
      <Nav>
        <NavLinkElements exact to="/" activeClassName="something">
          <h1 className="sr-only">Argent Bank</h1>
          <Logo
            src={logo}
            alt="Argent Bank Logo"
            width="200px"
            height="55px"
          ></Logo>
        </NavLinkElements>
        <div>
          <NavLinkElements exact to="./sign-in" activeClassName="something">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLinkElements>
        </div>
      </Nav>
    </HeaderStyle>
  )
}

export default Header
