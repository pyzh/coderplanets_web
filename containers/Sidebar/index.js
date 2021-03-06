/*
 *
 * Sidebar
 *
 */

import React from 'react'
import R from 'ramda'
import { inject, observer } from 'mobx-react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import { TrendLine, Button } from '../../components'
import { ICON_CMD } from '../../config'

import { makeDebugger, storePlug } from '../../utils'
import PinButton from './PinButton'
import {
  Container,
  Header,
  HeaderFuncs,
  MenuItem,
  MenuRow,
  MenuItemWrapper,
  MenuItemEach,
  MenuItemIcon,
  MenuItemTitle,
  MiniChartWrapper,
  SiteLogoWrapper,
  // SiteLogo,
  ExploreWrapper,
  ExploreContent,
  ExploreIcon,
  ExploreText,
  /* MiniChartBar, */
  /* MiniChartText, */
} from './styles'
import * as logic from './logic'

const debug = makeDebugger('C:Sidebar:index')

const getItemStyle = (isDragging, draggableStyle) => ({
  // styles we need to apply on draggables
  ...draggableStyle,
})

const MenuList = ({ items, pin, activeRaw }) => {
  /* const sparkData = [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0] */
  // const sparkData = [0, 0, 0, 1, 0, 0, 1]
  const listItems = (
    <DragDropContext onDragEnd={debug}>
      <Droppable droppableId="droppable">
        {provided => (
          <div ref={provided.innerRef}>
            {items.map((item, index) => (
              <Draggable key={item.raw} draggableId={item.raw} index={index}>
                {(provided, snapshot) => (
                  <MenuItemWrapper>
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      <MenuItemEach>
                        <div onClick={logic.onCommunitySelect.bind(this, item)}>
                          <MenuRow
                            pin={pin}
                            active={activeRaw === R.toLower(item.raw)}
                          >
                            <MenuItemIcon
                              active={activeRaw === R.toLower(item.raw)}
                              src={item.logo}
                            />
                            {/* eslint-disable jsx-a11y/anchor-is-valid */}
                            <MenuItemTitle
                              pin={pin}
                              active={activeRaw === R.toLower(item.raw)}
                            >
                              {item.title}
                            </MenuItemTitle>

                            <MiniChartWrapper pin={pin}>
                              <TrendLine
                                data={item.contributesDigest}
                                duration={300}
                                radius={15}
                                width={7}
                              />
                            </MiniChartWrapper>
                          </MenuRow>
                        </div>
                      </MenuItemEach>
                    </div>
                    {provided.placeholder}
                  </MenuItemWrapper>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
  return <MenuItem>{listItems}</MenuItem>
}

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

class SidebarContainer extends React.Component {
  componentDidMount() {
    const { sidebar } = this.props
    logic.init(sidebar)
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return
    }
    /*
    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    )
    this.setState({
      items,
    })
    */

    this.setState(prevState => ({
      items: reorder(
        prevState.items,
        result.source.index,
        result.destination.index
      ),
    }))
  }

  render() {
    const { sidebar } = this.props
    const { curCommunity, pin, subscribedCommunities } = sidebar
    //    onMouseLeave={logic.leaveSidebar}
    // onMouseLeave is not unreliable in chrome: https://github.com/facebook/react/issues/4492
    const activeRaw = curCommunity.raw

    return (
      <Container pin={pin}>
        <Header pin={pin}>
          <HeaderFuncs>
            <SiteLogoWrapper pin={pin}>
              CPS
              {/* <SiteLogo src={`${ICON_CMD}/keyboard_logo.svg`} /> */}
            </SiteLogoWrapper>
            <ExploreWrapper pin={pin}>
              <Button size="small" type="primary" ghost>
                <ExploreContent>
                  <ExploreIcon src={`${ICON_CMD}/telescope.svg`} />
                  <ExploreText>Explore</ExploreText>
                </ExploreContent>
              </Button>
            </ExploreWrapper>
          </HeaderFuncs>
          <PinButton pin={pin} onClick={logic.pin} />
        </Header>
        <MenuList
          items={subscribedCommunities}
          pin={pin}
          activeRaw={activeRaw}
        />
      </Container>
    )
  }
}

export default inject(storePlug('sidebar'))(observer(SidebarContainer))
