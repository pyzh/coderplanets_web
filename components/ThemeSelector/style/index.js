import styled from 'styled-components'

import Img from '../../Img'
import { theme, themeCoverMap, themeCoverIndexMap } from '../../../utils'

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const ThemeDot = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 100%;
  margin-right: 10px;
  background: ${({ name }) => themeCoverMap[name]};
  border: ${({ name }) => (name === 'github' ? '1px solid lightgrey' : '')};
  position: relative;
  cursor: pointer;
  color: ${({ active, name }) =>
    active ? theme('bodyBg') : themeCoverMap[name]};

  &:after {
    content: 'T';
    position: absolute;
    color: ${({ active, name }) => (active ? themeCoverIndexMap[name] : '')};
    top: 13%;
    left: 34%;
  }
`

export const DetailWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

/* background: ${({ active }) => (active ? theme('banner.bg') : '')}; */
export const IntroBox = styled.div`
  display: flex;
  border: 1px solid;
  border: ${({ active }) => (active ? '2px solid' : '1px dashed')};
  border-color: ${theme('banner.desc')};
  margin-right: 15px;
  margin-bottom: 18px;
  height: 130px;
  width: 210px;
  padding: 10px;
  border-radius: 5px;
  &:hover {
    border-top: 2px solid;
    border-bottom: 2px solid;
    border-color: ${theme('banner.desc')};
  }
  transition: border 0.3s;
`

export const IntroDesc = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  position: relative;
`

export const ThemeTitle = styled.div`
  color: ${theme('banner.title')};
  font-size: 1.1rem;
  font-weight: ${({ active }) => (active ? 'bolder' : '')};
  cursor: pointer;
  margin-top: -2px;
  opacity: ${({ active }) => (active ? 1 : 0.8)};
`

export const ThemeDesc = styled.div`
  font-size: 0.8rem;
  color: ${theme('banner.desc')};
  cursor: pointer;
`

export const AuthorInfo = styled.div`
  font-size: 0.8rem;
  color: ${theme('banner.desc')};
  position: absolute;
  bottom: -5px;
  left: 0;
  display: flex;
`

export const AuthorIcon = styled(Img)`
  fill: ${theme('banner.desc')};
  width: 13px;
  height: 13px;
  margin-right: 5px;
  margin-top: 3px;
`

export const AuthorName = styled.a`
  color: ${theme('banner.desc')};
  transition: color 0.3s;
  &:hover {
    text-decoration: underline;
    color: ${theme('banner.title')};
  }
`
