import styled from 'styled-components'
import colors from '../bases/colors'


export const UserHeaderMain = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`
export const Title = styled.h2`
  text-align: center;
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 2.1rem;
`
export const EditNameWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.7rem;
  padding-top: 1rem;
`
export const InputStyle = styled.input`
  padding: 0.5rem 0.8rem;
  color: ${colors.text};
  border-radius: 0.3rem;
  border: 3px solid #bfc8d3;
  height: 1.5rem;
  margin: 0 .4rem;
  &:hover {
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
  }
`
export const ButtonsWrapper = styled.div`
  display: flex;
`
export const InputButtonsStyle = styled.input`
  padding: 0.5rem 0.8rem;
  color: ${colors.primary};
  font-size: 1.1rem;
  font-weight: 700;
  border: 3px solid ${colors.primary};
  border-radius: 0.3rem;
  width: 8rem;
  height: 2.5rem;
  margin: 0 .4rem;
  cursor: pointer;
  &:hover {
    border-color: ${colors.text};
    background-color: ${colors.text};
    color: white;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
  }
`