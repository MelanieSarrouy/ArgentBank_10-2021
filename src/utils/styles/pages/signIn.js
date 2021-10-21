import styled from 'styled-components'
import colors from '../bases/colors'

export const SignInMain = styled.main`
  background-color: ${colors.backgroundLight};
`
export const SignInSection = styled.section`
  box-sizing: border-box;
  background-color: white;
  width: 18.75rem;
  margin: 3rem auto;
  padding: 2rem;
  border-radius: 0.35rem;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);
`
export const SignInSectionHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const SignInIcon = styled.i`
  font-size: 5rem;
`
export const SignInTitle = styled.h1`
  font-size: 1.4rem;
  padding: 0.5rem;
`
export const SignInButton = styled.input`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0.5rem;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: ${colors.primary};
  background-color: ${colors.primary};
  color: white;
  text-align: center;
  cursor: pointer;
  border-radius: 0.35rem;
  &:hover {
    border-color: ${colors.text};
    background-color: ${colors.text};
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
  }
`