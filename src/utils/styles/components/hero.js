import styled from 'styled-components'
import image from '../../../assets/bank-tree.jpeg'

export const HeroStyle = styled.header`
  background-image: url(${image});
  background-position: 0 33%;
  background-size: cover;
  background-repeat: no-repeat;
  height: 25rem;
  position: relative;
`
export const HeroContent = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 18.25rem;
  background: white;
  padding: 2rem;
  text-align: left;
  margin: 2rem;
  border-radius: .35rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

`
export const Subtitle = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0;
`
export const Text = styled.p`
  margin-bottom: 0;
  font-size: 1.2rem;
  padding-top: .5rem;
`
