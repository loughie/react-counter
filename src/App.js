import React, { Component } from 'react';
import Counter from './Counter'
import './App.css';

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      counters: [{ counterValue: 0 }, { counterValue: 0 }, { counterValue: 0 }, { counterValue: 0 }]
    }
  }

  _addToAll = () => {
    const newCounters = this.state.counters.map((counter) => {
      return {
        counterValue: counter.counterValue + 1
      }
    })
    this.setState({ counters: newCounters })
  }

  _alterCounterValue = (value, i) => {
    const newCounter = this.state.counters.map((counter, index) => {
      if (i === index) {
        return {
          counterValue: counter.counterValue + value
        }
      } return counter
    })
    this.setState({ counters: newCounter })
  }

  render() {
    const { counters } = this.state
    return (
      <div className="App">
        {counters.map((counter, index) => {
          return (
            <Counter
              key={index}
              index={index}
              value={counter.counterValue}
              newValue={this._alterCounterValue}
            />
          )
        })}
        <button onClick={() => { this._addToAll() }}>Add To All</button>
      </div>
    );
  }
}
