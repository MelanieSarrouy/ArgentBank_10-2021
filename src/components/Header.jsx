import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/actionLogout'
import logo from '../assets/argentBankLogo.png'
import {
  Nav,
  NavLinkElements,
  Logo,
  HeaderStyle,
  NavLinksWrapper,
  Icon,
} from '../styles/components/header'

const Header = () => {
  const selectTheme = (state) => state.theme
  const theme = useSelector(selectTheme)

  const dispatch = useDispatch()

  const selectLogin = (state) => state.getUser.isLogged
  const login = useSelector(selectLogin)

  const selectUser = (state) => state.getUser.user
  const user = useSelector(selectUser)

  return (
    <HeaderStyle>
      <Nav theme={theme}>
        <NavLinkElements theme={theme} exact to="/" activeClassName="something">
          <h1 className="sr-only">Argent Bank</h1>
          <Logo
            src={logo}
            alt="Argent Bank Logo"
            width="200px"
            height="55px"
          ></Logo>
        </NavLinkElements>
        {!login ? (
          <NavLinksWrapper>
            <NavLinkElements
              theme={theme}
              exact
              to="/sign-in"
              activeClassName="something"
            >
              <Icon theme={theme} className="fa fa-user-circle"></Icon>
              Sign In
            </NavLinkElements>
          </NavLinksWrapper>
        ) : (
          <NavLinksWrapper>
            <NavLinkElements
              theme={theme}
              exact
              to="/user"
              activeClassName="something"
            >
              <Icon theme={theme} className="fa fa-user-circle"></Icon>
              {user.body.firstName}
            </NavLinkElements>
            <NavLinkElements
              theme={theme}
              exact
              to="/"
              activeClassName="something"
              onClick={() => dispatch(logout())}
            >
              <Icon theme={theme} className="fa fa-sign-out"></Icon>
              Sign Out
            </NavLinkElements>
          </NavLinksWrapper>
        )}
      </Nav>
    </HeaderStyle>
  )
}

export default Header
