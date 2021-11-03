import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../actions/actionTheme'
import { FooterStyle, Button, Copyright } from '../styles/components/footer'


const Footer = () => {
  const selectTheme = (state) => state.theme
  const theme = useSelector(selectTheme)
  const dispatch = useDispatch()
  return (
    <FooterStyle theme={theme}>
      <Copyright theme={theme}>Copyright 2020 Argent Bank</Copyright>
      <div onClick={() => dispatch(toggleTheme())}>
        {theme === 'light' ? (
          <Button theme={theme}>Dark</Button>
        ) : (
          <Button theme={theme}>Light</Button>
        )}
      </div>
    </FooterStyle>
  )
}

export default Footer
