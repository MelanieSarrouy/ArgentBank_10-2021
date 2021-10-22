import React from 'react'
import logo from '../assets/argentBankLogo.png'
import {
  HeaderStyle,
  Logo,
  Nav,
  NavLinkElements,
  NavLinksWrapper,
} from '../utils/styles/components/header'

const HeaderUser = () => {
  
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
        <NavLinksWrapper>
          <NavLinkElements exact to="/user" activeClassName="something">
            <i className="fa fa-user-circle"></i>
            Tony
          </NavLinkElements>
          <NavLinkElements exact to="/" activeClassName="something">
            <i className="fa fa-sign-out"></i>
            Sign Out
          </NavLinkElements>
        </NavLinksWrapper>
      </Nav>
    </HeaderStyle>
  )
}

export default HeaderUser
