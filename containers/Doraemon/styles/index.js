import styled, { keyframes } from 'styled-components'

/* import { Img } from '../../../components' */
import Img from '../../../components/Img'
import { theme } from '../../../utils'

const rotate360 = keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`

export const LoadingIcon = styled(Img)`
  fill: ${theme('shell.searchIcon')};
  width: 30px;
  height: 30px;
  margin-top: 20px;
  animation: ${rotate360} 2s linear infinite;
`

export const AddOn = styled.div`
  margin-left: 15px;
  width: 25px;
`

export const PageOverlay = styled.div`
  //  background-color: rgba(0, 0, 0, 0.4);
  bottom: 0;
  cursor: pointer;
  left: 0;
  overflow: auto;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1001;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
`
// flex-grow example: http://zhoon.github.io/css3/2014/08/23/flex.html
export const PanelContainer = styled.div`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  width: 45vw;
  max-width: 550px;
  position: fixed;
  top: 12vh;
  z-index: 1002;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  left: 50%;
  margin-left: -19vw;
`
export const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`

export const SuggestionWrapper = styled.div`
  position: relative;
  display: ${({ empty }) => (empty ? 'none' : 'flex')};
  flex-direction: column;
  max-height: 60vh;
  overflow-y: scroll;
  overflow-x: hidden;
  width: 102%;
`

// #001b21;
export const BaseBar = styled.div`
  border: 1px solid ${theme('shell.border')};
  width: 100%;
  height: 70px;
  background: ${theme('shell.barBg')};
  color: white;
  display: flex;
  flex-direction: row;
`
export const EditorBar = styled(BaseBar)`
  position: relative;
`
export const AlertBar = styled(BaseBar)`
  position: relative;
  padding: 18px;
  color: #365760;
  &:before {
    content: '⚠ ';
    margin-right: 10px;
    color: tomato;
  }
`

export const InfoBar = styled(BaseBar)`
  padding: 10px;
  min-height: 70px;
  background: ${({ active }) => (active ? theme('shell.activeBg') : '')};
`
export const InputBar = styled.input`
  caret-color: ${theme('shell.searchInput')};
  flex-grow: 1;
  font-family: '.SFNSText-Light', 'SF UI Text', 'Helvetica Neue', 'Arial',
    'Lucida Grande', 'Segoe UI', Noto Sans, sans-serif;
  height: 100%;
  width: auto;
  outline: none;
  font-weight: 200;
  color: ${theme('shell.searchInput')};
  font-size: 1.6rem;
  max-height: none;
  background-color: transparent;
  padding: 0 20px 0px 20px;
  border: 0;
  border-radius: 0;
  transition: all 400ms ease;
`

export const AvatarWrapper = styled.div`
  width: 10%;
  margin-right: 10px;
`

export const AvatarImg = styled(Img)`
  width: 100%;
  border-radius: 50%;
`
export const ContentWraper = styled.div`
  color: tomato;
  text-align: left;
  flex-grow: 1;
`
export const Title = styled.div`
  display: block;
  font-size: 1.5em;
  color: ${theme('shell.title')};
  > a {
    color: ${theme('shell.link')};
  }
`
export const Desc = styled.div`
  color: ${theme('shell.desc')};
  text-overflow: ellipsis;
  font-size: 1.1em;
  width: 90%;
  white-space: nowrap;
  overflow: hidden;
  margin-bottom: 7px;
`
export const Hint = styled.div`
  color: ${theme('shell.desc')};
  margin-top: 10px;
  margin-right: 15px;
  width: 30px;
  font-size: 1.1rem;
`
export const HintEnter = styled(Img)`
  color: ${theme('shell.desc')};
  margin-top: 10px;
  margin-right: 1.5em;
  width: 30px;
  height: 30px;
  transform: rotateX(180deg);
  fill: ${theme('shell.desc')};
`

export const SubInfoWraper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const RepoLang = styled.div`
  color: ${theme('shell.desc')};
  font-style: italic;
`

export const RepoStar = styled.div`
  color: ${theme('shell.desc')};
  font-style: italic;
  margin-right: 10px;
`

export const NodeSVGIcon = styled(Img)`
  width: 40px;
  height: 40px;
  margin-top: 3px;
  transform: ${({ reverse }) => (reverse ? 'rotate(180deg)' : '')};
`

export const ThemeDot = styled.div`
  width: 35px;
  height: 35px;
  margin-top: 5px;
  background: ${({ bg }) => bg};
  border-radius: 50%;
`

// TODO: rename -> PrefixIcon
export const PrefixSVGIcon = styled(Img)`
  width: 30px;
  height: 30px;
  margin-top: 20px;
`

export const PrefixSearchIcon = styled(Img)`
  width: 30px;
  height: 30px;
  margin-top: 20px;
  fill: ${theme('shell.searchIcon')};
`

export const PrefixMagicIcon = styled(Img)`
  width: 30px;
  height: 25px;
  margin-top: 20px;
  transform: rotate(-30deg);
`
