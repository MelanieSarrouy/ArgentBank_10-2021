import { createGlobalStyle } from 'styled-components'
import colors from './colors'

export const GlobalStyle = createGlobalStyle`
/* Styles principaux */
* {
    font-family: 'Nunito', Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    color: ${colors.text};
    font-size: 16px;
  }
  body {
    background-color: ${colors.backgroundLight};
    margin: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  img {
    width: 100%;
    object-fit: cover;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  .sr-only {
    position:absolute;
    width:1px;
    height:1px;
    padding:0;
    margin:-1px;
    overflow:hidden;
    clip:rect(0,0,0,0);
    white-space:nowrap;
    border:0
  }
  .main {
    display: flex;
    flex-direction: column;

  }
  li {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
`
