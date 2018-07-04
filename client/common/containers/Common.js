/**
 *  Created by daiwenjuan on 2018/6/20 下午2:55.
 */
import React, { Children, Component, cloneElement } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Main from '../components/Main'
import actions from '../actions'

class Common extends Component {

  render() {
    const { children, ...props } = this.props
    return (
      <div>
        <Main>
          {Children.map(children, child =>
            cloneElement(child, { ...props })
          )}
        </Main>
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
)(Common)