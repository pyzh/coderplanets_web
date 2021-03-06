import styled from 'styled-components'
import { theme, smokey } from '../../../utils'

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: -5%;
  margin-bottom: 20px;
`

const Link = styled.a`
  text-decoration: none;
  font-weight: bolder;
  color: ${theme('footer.text')};
  transition: color 0.3s;
  &:hover {
    text-decoration: underline;
    color: ${theme('footer.hover')};
  }
`
export const Support = styled.div`
  font-weight: bolder;
  color: ${theme('footer.text')};
  transition: color 0.3s;
  &:hover {
    cursor: pointer;
    color: ${theme('footer.hover')};
  }
`

export const BaseInfo = styled.div`
  display: flex;
  margin-top: 20px;
`
export const BeianInfo = styled.div`
  margin-bottom: 20px;
`

export const Divider = styled.div`
  margin-left: 12px;
  margin-right: 12px;
  color: ${theme('footer.text')};
`

export const GitSource = styled.div`
  margin-top: 2px;
  ${smokey};
`
export const Powerby = styled.div`
  color: ${theme('footer.label')};
  font-style: italic;
`
export const PowerbyLink = styled(Link)``
export const About = styled(Link)``
export const Beian = styled(Link)``
