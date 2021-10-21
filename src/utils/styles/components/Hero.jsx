import React from 'react'
import { HeroStyle, HeroContent, Subtitle, Text } from '../../styles/components/hero'

const Hero = () => {
  return (
    <HeroStyle>
      <HeroContent>
        <h2 className="sr-only">Promoted Content</h2>
        <Subtitle>No fees.</Subtitle>
        <Subtitle>No minimum deposit.</Subtitle>
        <Subtitle>High interest rates.</Subtitle>
        <Text>Open a savings account with Argent Bank today!</Text>
      </HeroContent>
    </HeroStyle>
  )
}

export default Hero
