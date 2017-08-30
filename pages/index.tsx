import * as React from 'react'

import { Provider } from 'mobx-react'
import { initStore } from '../store'
import Page from '../components/Page'

export default class Index extends React.Component {
  static getInitialProps({ req }) {
    const isServer = !!req
    const store = initStore(isServer)
    return { isServer, lastUpdate: store.lastUpdate }
  }

  store: any = null

  constructor(props) {
    super(props)
    this.store = initStore(props.isServer, props.lastUpdate)
  }

  render() {
    return (
      <Provider store={this.store}>
        <Page title="Index Page" linkTo="/other" />
      </Provider>
    )
  }
}
