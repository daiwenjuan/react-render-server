/**
 *  Created by daiwenjuan on 2018/7/22 14:10.
 */
import React, { PureComponent } from 'react'
import { Checkbox } from 'antd'

export default class Group extends PureComponent {
  constructor (props) {
    super(props)
    let {name, checkedAll} = this.props
    this.state = {
      checked: checkedAll[name]
    }
  }

  componentWillReceiveProps (nextProps) {
    let {name, checkedAll} = nextProps
    if (this.props.checkedAll !== checkedAll) {
      this.setState({
        checked: checkedAll[name]
      })
    }
  }

  handleOnChange = (e) => {
    let {onChange} = this.props
    onChange && onChange(e)
    this.setState({checked: e.target.checked})
  }

  render () {
    let {checked} = this.state
    return <div>
      <Checkbox {...this.props} checked={checked}
                onChange={this.handleOnChange}>{this.props.children}</Checkbox>
    </div>
  }
}