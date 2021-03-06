import styled from 'styled-components'
// import Img from '../../Img'
import { theme } from '../../../utils'

export const Wrapper = styled.div``

export const BodyWrapper = styled.div`
  padding: 20px 30px;
  height: auto;
  min-height: 80vh;
  margin-left: 15px;
  margin-right: 15px;
  background: ${theme('content.cardBg')};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`
export const DescriptionWrapper = styled.div`
  margin-top: 4px;
  width: 100%;
  color: ${theme('banner.desc')};
`

export const DescLink = styled.a`
  color: ${theme('banner.title')};
  transition: color 0.3s;
  margin-left: 5px;
  &:hover {
    color: ${theme('banner.title')};
    text-decoration: underline;
    cursor: pointer;
  }
`

export const ReadmeWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
`
