/**
 *  Created by daiwenjuan on 2018/6/20 下午2:47.
 */
import React, { Component } from 'react'
import styles from './app.module.less'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from './action'
import key from './key'
class App extends Component {
  handleOnClick = () => {
    let { actions } = this.props
    actions.test()
  }

  render() {
    let { text } = this.props[key.ID] || {}
    return (
      <div className={styles.app} onClick={this.handleOnClick}>
        {text ? text : 'hello world'}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)


