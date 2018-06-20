/**
 *  Created by daiwenjuan on 2018/6/20 下午2:57.
 */
import React, { Component } from 'react'

class Main extends Component {
  constructor() {
    super()
  }

  render() {
    const { children } = this.props

    return (
      <main >
        {children}
      </main>
    )
  }
}

export default Main