import React, { Component } from 'react';

export default class Counter extends Component {

  constructor(props) {
    super(props)
    this.state = {
      counterValue: props.value
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ counterValue: nextProps.value })
  }

  _addSubtractCounter(value, index) {
    this.props.newValue(value, index)
  }

  render() {
    const { counterValue } = this.state
    const index = this.props.index

    return (
      <div>
        <div>Value: {counterValue} </div>
        <button onClick={() => { this._addSubtractCounter(1, index) }}>+</button>
        <button onClick={() => { this._addSubtractCounter(-1, index) }}>-</button>
      </div>
    )
  }
}
