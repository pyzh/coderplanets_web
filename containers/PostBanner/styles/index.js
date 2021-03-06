import styled from 'styled-components'

import { theme, Animate } from '../../../utils'

export const BaseBanner = styled.nav`
  position: relative;
  min-height: 140px;
  border-bottom: 1px solid tomato;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${theme('banner.bg')};
  border-bottom: ${theme('banner.spliter')};
  @media (max-height: 800px) {
    min-height: 130px;
  }
`

export const BaseBannerContent = styled.div`
  display: flex;
  margin-left: 8%;
  margin-right: 12%;
`

export const NumbersWrapper = styled.div`
  display: flex;
  text-align: center;
  margin-top: -2.1rem;
`

export const NumbersInfo = styled(NumbersWrapper)`
  margin-top: 0;
`

export const BannerContainer = styled(BaseBanner)`
  height: 100px;
  min-height: 100px;
`

export const BannerContentWrapper = styled(BaseBannerContent)`
  display: flex;
`
export const PostBrief = styled.div`
  width: 60%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

export const Title = styled.div`
  font-size: 1.6em;
  color: ${theme('thread.articleTitle')};
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const Desc = styled.div`
  margin-top: 5px;
  display: flex;
  font-size: 1.1em;
  color: ${theme('thread.articleDigest')};
`
export const Avatar = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 100%;
  margin-right: 5px;
`
export const PrintTag = styled.div`
  font-size: 0.8em;
  padding: 1px 8px;
  border-radius: 3px;
  border: 1px solid;
  border-color: ${theme('thread.extraInfo')};
  color: ${theme('thread.extraInfo')};
  margin-right: 8px;
`
export const Username = styled.div`
  margin-right: 3px;
  &:hover {
    cursor: pointer;
    color: #719a9b;
  }
`
// background: ${theme('banner.numberHoverBg')};
export const NumberSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5px;
  border-radius: 4px;

  &:hover {
    background: ${({ dead }) => (dead ? '' : theme('banner.numberHoverBg'))};
    cursor: ${({ dead }) => (dead ? '' : 'pointer')};
  }
`
export const NumberTitle = styled.div`
  color: ${theme('banner.numberDesc')};
  &:hover {
    color: ${({ dead }) => (dead ? '' : '#f1c48f')};
    text-decoration: ${({ dead }) => (dead ? '' : 'underline')};
    animation: ${Animate.pulse} 0.4s linear;
  }
`
export const NumberItem = styled.div`
  font-size: 1.5rem;
  color: ${theme('banner.number')};
  &:hover {
    color: ${({ dead }) => (dead ? '' : '#f1c48f')};
    text-decoration: ${({ dead }) => (dead ? '' : 'underline')};
    animation: ${Animate.pulse} 0.4s linear;
  }
`
export const NumberDivider = styled.div`
  border: 1px solid;
  border-color: ${theme('banner.numberDivider')};
  height: 70%;
  align-self: center;
  margin-left: 10px;
  margin-right: 10px;
`
