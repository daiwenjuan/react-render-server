/**
 *  Created by daiwenjuan on 2018/7/22 14:10.
 */
import React, { PureComponent } from 'react'
import { Checkbox } from 'antd'

export default class Group extends PureComponent {
  constructor (props) {
    super(props)
  }

  handleOnChange = (e) => {
    let {onChange} = this.props
    onChange && onChange(e)
  }

  render () {
    let {name, checkedAll} = this.props
    console.log(checkedAll)
    console.log(name)
    return <div>
      <Checkbox {...this.props} checked={checkedAll[name]}
                onChange={this.handleOnChange}>{this.props.children}</Checkbox>
    </div>
  }
}