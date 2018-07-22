/**
 *  Created by daiwenjuan on 2018/6/20 下午2:47.
 */
import React, { Component } from 'react'
import styles from './app.module.less'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Layout, Menu, Breadcrumb, Checkbox } from 'antd'

const {Header, Content, Footer} = Layout
import { Button } from 'antd'
import { test } from './action'
import key from './key'
import EnhanceConnect from '../common/EnhanceConnect'
import CheckBoxGroup from './checkbox/CheckBoxGroup'

const GroupItem = CheckBoxGroup.Group
@EnhanceConnect((state) => {
  return {
    text: state[key.ID].text,
  }
}, {test})
export default class App extends Component {
  constructor (props) {
    super(props)
    this.test = [
      {name: 'group1', children: ['组一01', '组一02', '组一03']},
      {name: 'group2', children: ['组二01', '组二02', '组二03']},
      {name: 'group3', children: ['组三01', '组三02', '组三03']}
    ]
    this.state = {
      checked: false
    }
  }

  handleOnClick = () => {
    let {test} = this.props
    test()
  }

  handleOnChange (e) {
    this.setState({checked: e.target.checked})
  }

  //renderTitleView () {
  //  return <div>title</div>
  //}
  render () {
    let {text} = this.props
    return (
      <div className={styles['app']}>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{lineHeight: '64px'}}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
        <div className="des">
          {this.test.map((line, key) => {
            return <CheckBoxGroup dataSource={line} key={key} name={line.name}>
              {line.children.map((item, index) => {
                return <GroupItem dataSource={item} key={index}>{item}</GroupItem>
              })}
            </CheckBoxGroup>
          })}
        </div>
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


