import styled from 'styled-components'

import Img from '../../../components/Img'
/* import { Img } from '../../../components' */
import { theme } from '../../../utils'

export const Container = styled.div`
  display: flex;
  margin-top: 30px;
  margin-left: 6%;
  margin-right: 5%;
`

export const MainWrapper = styled.div`
  padding: 20px;
  padding-top: 10px;
  min-height: 600px;
  background: ${theme('preview.articleBg')};
  margin-right: 35px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  width: 68%;
  display: flex;
  flex-direction: column;
`
export const TabberWrapper = styled.div`
  width: 80vw;
  display: flex;
`

export const SidebarWrapper = styled.div`
  width: 24%;
  color: ${theme('banner.desc')};
`

export const CardWrapper = styled.div`
  background: ${theme('preview.articleBg')};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  padding: 20px;
  min-height: 100px;
  margin-bottom: 15px;
`
export const AttactWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  color: ${theme('banner.desc')};
  margin-left: 15px;
`

export const AttactIcon = styled(Img)`
  fill: ${theme('banner.desc')};
  margin-right: 5px;
  margin-top: 4px;
  height: 15px;
  width: 15px;
`

export const AttactLink = styled.a`
  text-decoration: underline;
  font-weight: bolder;
  transition: color 0.3s;
  color: ${theme('banner.desc')};

  &:hover {
    color: ${theme('banner.title')};
    cursor: pointer;
  }
`

export const AttactDivider = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin-left: 10px;
  margin-right: 6px;
  background: ${theme('banner.desc')};
  opacity: 0.7;
`
