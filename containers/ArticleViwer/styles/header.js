import styled from 'styled-components'

import Img from '../../../components/Img'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 6px;
`
export const Divider = styled.span`
  margin: 0 8px;
  display: inline-block;
  height: 0.9em;
  align-self: center;
  border-right: 1px solid;
  border-right-color: ${theme('preview.divider')};
`
export const UserInfo = styled.div`
  flex-grow: 1;
  display: flex;
`

export const UserName = styled.div`
  margin-bottom: 2px;
  font-size: 1.2em;
  color: ${theme('banner.title')};
`
export const PublishAt = styled.div`
  font-size: 0.9em;
  color: ${theme('banner.desc')};
`

export const Avatar = styled.img`
  border-radius: 100%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
`

export const ReactionWrapper = styled.div`
  display: flex;
`

export const ReactionAction = styled.div`
  display: flex;
  padding: 0 3px;
  &:hover {
    cursor: pointer;
    font-weight: bold;
    background: ${theme('article.reactionHoverBg')};
    border-radius: 6px;
  }
`

export const ReactionName = styled.div`
  align-self: center;
  color: ${theme('article.reactionTitle')};
  font-size: 0.9em;
  margin-left: 1px;
`
export const ReactionUserNum = styled.div`
  align-self: center;
  color: ${theme('article.reactionTitle')};
  font-size: 0.9em;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

export const ReactionIcon = styled(Img)`
  margin-top: 4px;
  fill: ${theme('article.reactionTitle')};
  width: ${({ width }) => width || '1.5em'};
  height: ${({ height }) => height || '1.5em'};
`

export const Reaction = styled.div`
  align-self: center;
  font-size: 1.2em;
  display: flex;
`
