/*
 * render the icon based on suggestion type
 *
 */

import React from 'react'

import { themeCoverMap } from '../../utils'
import { NodeSVGIcon, ThemeDot } from './styles'
import { DEFAULT_ICON } from '../../config/assets'

// const debug = makeDebugger('C:Doraemon:NodeIcon')

const NodeIcon = ({ suggestion: { raw, logo, cmd } }) => {
  /* const lowerRaw = R.toLower(raw) */
  if (cmd === 'theme') {
    return <ThemeDot bg={themeCoverMap[raw]} />
  }
  return <NodeSVGIcon src={logo || DEFAULT_ICON} />
}

export default NodeIcon
