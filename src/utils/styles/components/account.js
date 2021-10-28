import styled from 'styled-components'
import colors from '../bases/colors'

export const AccountSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${colors.text};
  border-radius: .2rem;
  background-color: white;
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
export const AccountContentWrapper = styled.article`
  width: 100%;
`
export const AccountTitle = styled.h4`
  font-size: 1rem;
  font-weight: bold;
`
export const AccountAmount = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  padding: 0.2rem 0;
`
