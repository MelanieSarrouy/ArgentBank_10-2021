import styled from 'styled-components'

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
`
