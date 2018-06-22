/**
 *  Created by daiwenjuan on 2018/6/20 下午2:47.
 */
import React, { Component } from 'react'
import { Upload, Icon, message, Input } from 'antd'

const Dragger = Upload.Dragger

export default class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Input/>
      </div>
    )
  }
}

