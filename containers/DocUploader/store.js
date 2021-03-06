/*
* DocUploader store
*
*/

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:DocUploader')
/* eslint-enable no-unused-vars */

const DocUploader = t
  .model('DocUploader', {})
  .views(self => ({
    get root() {
      return getParent(self)
    },
  }))
  .actions(self => ({
    toast(type, options) {
      self.root.toast(type, options)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default DocUploader
