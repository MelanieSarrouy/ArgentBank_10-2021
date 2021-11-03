import React from 'react'
import { useSelector } from 'react-redux'
import { HeroStyle, HeroContent, Subtitle, Text } from '../styles/components/hero'

const Hero = () => {
  const selectTheme = (state) => state.theme
  const theme = useSelector(selectTheme)

  return (
    <HeroStyle>
      <HeroContent theme={theme}>
        <h2 className="sr-only">Promoted Content</h2>
        <Subtitle theme={theme}>No fees.</Subtitle>
        <Subtitle theme={theme}>No minimum deposit.</Subtitle>
        <Subtitle theme={theme}>High interest rates.</Subtitle>
        <Text theme={theme}>Open a savings account with Argent Bank today!</Text>
      </HeroContent>
    </HeroStyle>
  )
}

export default Hero
