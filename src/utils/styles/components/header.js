import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../bases/colors'

export const HeaderStyle = styled.header`
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);
`
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.35rem 1.25rem;
  background-color: white;
`
export const NavLinkElements = styled(NavLink)`
  font-weight: 700;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  &.${(props) => props.activeClassName} {
    color: ${colors.primary};
  }
  &:hover {
    color: ${colors.primary};
  }
  & > i {
    font-size: 2rem;
    padding: 0 .5rem;
    margin-left: 1.5rem;
  }
`
export const Logo = styled.img`
  width: 12.5rem;
  box-shadow: 0.35rem 0.35rem 0.35rem rgba(0, 0, 0, 0.1);
  border-radius: 0.35rem;
`
export const LinkTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > p {
    font-size: 1.1rem;
  }
`
export const NavLinksWrapper = styled.div`
  display: flex;

`