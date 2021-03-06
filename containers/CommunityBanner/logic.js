// import R from 'ramda'

import {
  makeDebugger,
  $solver,
  asyncRes,
  asyncErr,
  ERR,
  EVENT,
  TYPE,
  dispatchEvent,
  subPath2Thread,
  thread2Subpath,
} from '../../utils'
import SR71 from '../../utils/network/sr71'

import S from './schema'

const sr71$ = new SR71({ resv_event: [EVENT.COMMUNITY_CHANGE] })
let sub$ = null

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:CommunityBanner')
/* eslint-enable no-unused-vars */

let store = null

export function loadCommunity() {
  // NOTE: do not use viewing.community, it's too slow
  const { mainPath } = store.curRoute
  sr71$.query(S.community, { raw: mainPath })
}

export function tabberChange(activeThread) {
  // console.log('store is :', store)
  // console.log('tabberChange thread: ', thread2Subpath(activeThread))
  debug('subPath set to: ', thread2Subpath(activeThread))
  store.markRoute({ subPath: thread2Subpath(activeThread) })
  store.setViewing({ activeThread })
}

export function showEditorList() {
  debug('showEditorList ...')
  dispatchEvent(EVENT.PREVIEW_OPEN, {
    type: TYPE.PREVIEW_COMMUNITY_EDITORS,
  })
}

// ###############################
// Data & Error handlers
// ###############################

// TODO: load cur community
// 两种情形: 1. 浏览器刷新页面. 2. 事件： Switch_Community
const DataSolver = [
  {
    match: asyncRes('community'),
    action: ({ community }) => {
      const { subPath } = store.curRoute
      store.setViewing({
        community,
        activeThread: subPath2Thread(subPath),
      })
    },
  },
  {
    match: asyncRes(EVENT.COMMUNITY_CHANGE),
    action: () => loadCommunity(),
  },
]
const ErrSolver = [
  {
    match: asyncErr(ERR.CRAPHQL),
    action: ({ details }) => {
      debug('ERR.CRAPHQL -->', details)
    },
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      debug('ERR.TIMEOUT -->', details)
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: ({ details }) => {
      debug('ERR.NETWORK -->', details)
    },
  },
]

/*
   const loadIfNeed = () => {
   const { viewing, curRoute } = banner
   const community = viewing.community.raw
   const { mainPath } = curRoute

   if (community !== mainPath) {
   debug('>>>>>>>>> need load banner')
   loadCommunity()
   }
   }
 */

export function init(_store) {
  if (store) return false
  store = _store

  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

  /* loadIfNeed() */
}
