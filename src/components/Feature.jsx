import React from 'react'
import { useSelector } from 'react-redux'
import {
  FeatureItemStyle,
  FeatureImage,
  FeatureText,
  FeatureTitle,
} from '../styles/components/feature'

const Feature = ({ icon, alt, title, content }) => {
  const selectTheme = (state) => state.theme
  const theme = useSelector(selectTheme)

  return (
    <FeatureItemStyle>
      <FeatureImage theme={theme} src={icon} alt={alt} />
      <FeatureTitle theme={theme}>{title}</FeatureTitle>
      <FeatureText theme={theme}>{content}</FeatureText>
    </FeatureItemStyle>
  )
}

export default Feature
