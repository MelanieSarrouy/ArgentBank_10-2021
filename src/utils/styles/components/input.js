import styled from 'styled-components'
import colors from '../bases/colors'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: left;
  margin-bottom: 1rem;
`
export const InputLabel = styled.label`
  font-weight: bold;
`
export const InputStyle = styled.input`
  padding: 5px;
  font-size: 1.2rem;
  margin-right: 0.5rem;
  &:hover {
    border: 2px solid ${colors.text};
    border-radius: .2rem;
    background-color: rgba(44, 62, 80, 0.1)
  }
`
