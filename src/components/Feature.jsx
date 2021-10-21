import React from 'react'
import {
  FeatureItemStyle,
  FeatureImage,
  FeatureText,
  FeatureTitle,
} from '../utils/styles/components/feature'

const Feature = ({ icon, alt, title, content }) => {
  return (
    <FeatureItemStyle>
      <FeatureImage src={icon} alt={alt} />
      <FeatureTitle>{title}</FeatureTitle>
      <FeatureText>{content}</FeatureText>
    </FeatureItemStyle>
  )
}

export default Feature
