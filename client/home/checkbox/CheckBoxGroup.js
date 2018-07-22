/**
 *  Created by daiwenjuan on 2018/7/22 13:59.
 */
import React, { PureComponent } from 'react'
import Group from './Group'
import { Checkbox } from 'antd'

export default class CheckBoxGroup extends PureComponent {
  static Group = Group

  constructor (props) {
    super(props)
    this.state = {
      checkedAll: {},
    }
  }

  renderChildren () {
    let {checkedAll} = this.state
    let {children, renderTitle, ...others} = this.props
    return React.Children.map(children, (child, index) => {
      return React.cloneElement(child, {
        name: this.props.name,
        checkedAll,
        ...others,
        index,
        onChange: this.handleChildernOnChange.bind(this, index)
      })
    })
  }

  handleChildernOnChange = (name, e, index) => {
    //let {checkedAll} = this.state
    //checkedAll[name] = e.target.checked
    //this.setState({checked, checkedAll})
  }

  handleOnChange = (e) => {
    let checkedAll = {}
    let {name} = this.props
    checkedAll[name] = e.target.checked
    this.setState({checkedAll})
  }

  renderTitle () {
    let {renderTitle, name, dataSource} = this.props
    let {checkedAll} = this.state
    return <div>
      <Checkbox onChange={this.handleOnChange} checked={dataSource.checked}>
        {renderTitle && renderTitle()}
      </Checkbox>
    </div>
  }

  render () {
    return <div>
      {this.renderTitle()}
      {this.renderChildren()}
    </div>
  }
}