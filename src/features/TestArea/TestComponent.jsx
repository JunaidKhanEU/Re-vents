import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementAction, decrementAction } from '../../store/Test/testActions'
import { Button } from 'semantic-ui-react'
export class TestComponent extends Component {
  render () {
    return (
      <div>
        <h1>TestComponent</h1>
        <h3>the answer is : {this.props.data.data}</h3>
        <Button positive content='Increment' onClick={() => this.props.increment()} />
        <Button negative content='decrement' onClick={() => this.props.decrement()} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.test
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(incrementAction()),
    decrement: () => dispatch(decrementAction())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TestComponent)
