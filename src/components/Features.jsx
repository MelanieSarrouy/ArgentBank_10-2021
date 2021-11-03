import React from 'react'
import features from '../datas/features'
import Feature from './Feature'
import { FeaturesStyle } from '../styles/components/features'

const Features = () => {
  return (
    <FeaturesStyle>
      <h2 className="sr-only">Features</h2>
      {features.map((feature, index) => (
        <Feature
          key={index}
          icon={feature.icon}
          alt={feature.alt}
          title={feature.title}
          content={feature.content}
        />
      ))}
    </FeaturesStyle>
  )
}

export default Features
