import React from 'react'
import Features from '../components/Features'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Homepage = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
    </div>
  )
}

export default Homepage
