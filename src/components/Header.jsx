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
  Paragraph,
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
        <NavLinkElements theme={theme} exact to="/">
          <h1 className="sr-only">Argent Bank</h1>
          <Logo src={logo} alt="Argent Bank Logo"></Logo>
        </NavLinkElements>
        {!login ? (
          <NavLinksWrapper>
            <NavLinkElements theme={theme} exact to="/sign-in">
              <Icon theme={theme} className="fa fa-user-circle"></Icon>
              <Paragraph theme={theme}>Sign In</Paragraph>
            </NavLinkElements>
          </NavLinksWrapper>
        ) : (
          <NavLinksWrapper>
            <NavLinkElements theme={theme} exact to="/user">
              <Icon theme={theme} className="fa fa-user-circle"></Icon>
              <Paragraph theme={theme}>{user.body.firstName}</Paragraph>
            </NavLinkElements>
            <NavLinkElements
              theme={theme}
              exact
              to="/"
              onClick={() => dispatch(logout())}
            >
              <Icon theme={theme} className="fa fa-sign-out"></Icon>
              <Paragraph theme={theme}>Sign Out</Paragraph>
            </NavLinkElements>
          </NavLinksWrapper>
        )}
      </Nav>
    </HeaderStyle>
  )
}

export default Header
