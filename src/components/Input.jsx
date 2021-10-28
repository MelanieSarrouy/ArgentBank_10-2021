import React from 'react'
import { InputWrapper, InputLabel, InputStyle } from '../utils/styles/components/input'


function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const Input = ({ forAndId, inputType, direction, value, onChange }) => {
  return (
    <InputWrapper direction={direction}>
      <InputLabel htmlFor={forAndId}>
        {capitalizeFirstLetter(forAndId)}
      </InputLabel>
      <InputStyle type={inputType} id={forAndId} value={value} onChange={onChange} />
    </InputWrapper>
  )
}

export default Input
