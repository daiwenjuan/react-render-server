/**
 *  Created by daiwenjuan on 2018/6/20 下午2:47.
 */
import React, { Component } from 'react'
import styles from './app.module.less'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from './action'
class App extends Component {
  handleOnClick = () => {
    let { actions } = this.props
    actions.test()
  }

  render() {
    console.log(this.props)
    return (
      <div className={styles.app} onClick={this.handleOnClick}>
        hello world
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


