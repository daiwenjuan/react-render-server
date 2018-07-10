/**
 *  Created by daiwenjuan on 2018/6/20 下午2:47.
 */
import React, { Component } from 'react'
import styles from './app.module.less'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Layout, Menu, Breadcrumb } from 'antd'
const { Header, Content, Footer } = Layout
import { Button } from 'antd'
import { test } from './action'
import key from './key'
import EnhanceConnect from '../common/EnhanceConnect'
@EnhanceConnect((state) => {
  return {
    text: state[key.ID].text,
  }
}, { test })
export default class App extends Component {

  handleOnClick = () => {
    let { test } = this.props
    test()
  }

  render() {
    let { text } = this.props
    return (
      <div className={styles['app']}>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
        <div>sdfsdfsdf</div>
      </div>
    )
  }
}
//
// function mapStateToProps(state) {
//   return state
// }
//
// function mapDispatchToProps(dispatch) {
//   return { actions: bindActionCreators(actions, dispatch) }
// }
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App)


