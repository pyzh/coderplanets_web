/*
* VideoViewer store
*
*/

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:VideoViewer')
/* eslint-enable no-unused-vars */

// NOTE: add me to ../../stores/index && ../../stores/RootStore/index
const VideoViewer = t
  .model('VideoViewer', {})
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get viewingData() {
      return self.root.viewingData
    },
  }))
  .actions(self => ({
    setViewing(sobj) {
      self.root.setViewing(sobj)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default VideoViewer
