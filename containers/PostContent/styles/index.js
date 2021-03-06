import styled from 'styled-components'

import { theme } from '../../../utils'
import Img from '../../../components/Img'

export const Container = styled.article`
  padding: 20px;
  min-height: 300px;
  display: flex;
`

export const MainWrapper = styled.div`
  width: 70%;
  margin-left: 2.5rem;
`

/* background: ${theme('preview.articleBg')}; */
export const ArticleWrapper = styled.div`
  font-size: 1.1rem;
  margin-left: 2vw;
  margin-right: 1.6vw;
  background: ${theme('preview.articleBg')};
  border-radius: 5px;
  padding: 35px 40px;
  min-height: 60vh;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
`

export const CommentsWrapper = styled.div`
  margin-top: 30px;
  margin: 25px;
`

// TODO: use media
export const BodyWrapper = styled.div``

export const SideWrapper = styled.div`
  min-height: 180px;
  margin-top: 20px;
  height: 100%;
  padding-left: 20px;
  max-width: 200px;
  flex-wrap: wrap;
`

export const CommunityTitle = styled.div`
  color: #56868a;
  font-size: 1em;
`

export const SidebarTitle = styled.div`
  color: #56868a;
  font-size: 1em;
`

export const SidebarDesc = styled.div`
  display: flex;
  margin-top: 15px;
  margin-bottom: 10px;
  padding-bottom: 15px;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  border-bottom: ${({ noBottom }) => (noBottom ? '' : '1px solid')};
  border-color: ${theme('preview.divider')};
  max-width: 100%;
  flex-wrap: wrap;
`
export const NomoreDesc = styled.div`
  color: ${theme('preview.divider')};
  font-style: italic;
`

export const CommunityIcon = styled(Img)`
  width: 25px;
  height: 25px;
  margin-right: 6px;
`

export const TagWrapper = styled.div`
  display: flex;
  margin-bottom: 12px;
  margin-left: 2px;
`
export const TagDot = styled.div`
  width: 10px;
  height: 10px;
  background: tomato;
  border-radius: 50%;
  margin-right: 5px;
`
export const TagTitle = styled.div`
  margin-top: -5px;
`

export const RelatedUser = styled.img`
  border-radius: 100%;
  width: 25px;
  height: 25px;
  margin-right: 8px;
  margin-bottom: 5px;
`
