import styled from 'styled-components'
import colors from '../bases/colors'

export const AccountArticle = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${colors.text};
  border-radius: .2rem;
  background-color: ${({ theme }) => (theme === 'light' ? 'white' : `${colors.backgroundDark}`)};
  width: 80%;
  margin: 0 auto;
  flex-direction: row;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 2rem;
  @media (max-width: 720px) {
    flex-direction: column;
  }
`
export const AccountContentWrapper = styled.div`
  width: 100%;
`
export const AccountTitle = styled.h4`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => (theme === 'light' ? `${colors.text}` : 'white')};

`
export const AccountAmount = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  padding: 0.2rem 0;
  color: ${({ theme }) => (theme === 'light' ? `${colors.text}` : 'white')};

`
export const AccountDescription = styled.h4`
  font-size: 1rem;
  font-weight: normal;
  color: ${({ theme }) => (theme === 'light' ? `${colors.text}` : 'white')};

`
