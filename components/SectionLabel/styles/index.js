import styled from 'styled-components'

import { Img } from '../..'
import { theme } from '../../../utils'

export const Wrapper = styled.div`
  margin-top: 10px;
`

export const Label = styled.div`
  display: flex;
`

export const Title = styled.div`
  color: ${theme('tabs.headerActive')};
  font-size: 0.9rem;
`
export const Divider = styled.div`
  border-bottom: 1px solid;
  border-color: ${theme('banner.desc')};
  margin-top: 12px;
  margin-bottom: 18px;
  width: 90%;
  opacity: 0.3;
`

export const LabelIcon = styled(Img)`
  fill: ${theme('tabs.headerActive')};
  width: 18px;
  height: 18px;
  margin-right: 5px;
  margin-left: 5px;
  margin-top: 2px;
`

export const Desc = styled.div`
  color: ${theme('banner.desc')};
  font-size: 0.8rem;
  margin-bottom: 18px;
  margin-left: 3px;
`