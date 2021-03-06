import React from 'react'

import { ICON_CMD } from '../../config/assets'
// import { Button } from '../../components'
import { Wrapper, StateIcon, Divider } from './styles/addons'
import * as logic from './logic'

const AddOns = () => (
  <Wrapper>
    {/*
        <Button size="small" type="primary" ghost onClick={logic.upgradeHepler}>
        upgrade
        </Button>
        &nbsp;&nbsp;&nbsp;
        <DividerIcon src={`${ICON_CMD}/more.svg`} />
      */}
    <div onClick={logic.previewState.bind(this, 'mst-state')}>
      <StateIcon src={`${ICON_CMD}/app_states.svg`} />
    </div>
    <Divider>&nbsp;</Divider>
  </Wrapper>
)

export default AddOns
