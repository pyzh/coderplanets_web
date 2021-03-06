import styled from 'styled-components'
import { Button } from 'antd'

import { theme } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  max-width: 1400px;
  padding-top: 8px;
`

export const LeftPadding = styled.div`
  width: 2.5vw;
`
export const RightPadding = styled.div`
  width: 4vw;
`
export const LeftPart = styled.div`
  flex-grow: 1;
  width: 100%;
`

export const RightPart = styled.div`
  width: 20vw;
  margin-left: 30px;
  padding-top: 5px;
`

/* fill: ${theme('shell.searchIcon')}; */
// TODO: rename to PublishButn
export const PublishBtn = styled(Button)`
  width: 100%;
  max-width: 180px;
  margin-left: 8%;
`
export const FilterWrapper = styled.div`
  margin-bottom: 8px;
  margin-left: 8px;
  display: ${({ show }) => (show ? 'flex' : 'none')};
`
export const FilterResultHint = styled.div`
  margin-top: 4px;
  margin-right: 10px;
  color: ${theme('thread.filterResultHint')};
`
