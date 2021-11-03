import React from 'react'
import { useSelector } from 'react-redux'
import {
  InputWrapper,
  InputLabel,
  InputStyle,
} from '../styles/components/input'

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const Input = ({ forAndId, inputType, direction, value, onChange }) => {
  const selectTheme = (state) => state.theme
  const theme = useSelector(selectTheme)

  return (
    <InputWrapper direction={direction}>
      <InputLabel theme={theme} htmlFor={forAndId}>
        {capitalizeFirstLetter(forAndId)}
      </InputLabel>
      <InputStyle
        theme={theme}
        type={inputType}
        id={forAndId}
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  )
}

export default Input
