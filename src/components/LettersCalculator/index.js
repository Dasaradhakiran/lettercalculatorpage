// Write your code here.

import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {textInput: '', count: 0}

  onChangeText = event => {
    this.setState({
      textInput: event.target.value,
      count: event.target.value.length,
    })
  }

  render() {
    const {textInput, count} = this.state

    return (
      <div className="app-cont">
        <div className="app-sub-cont">
          <div className="card-cont">
            <h1 className="main-text">Calculate the Letters you enter</h1>
            <label className="label-text" htmlFor="textInput">
              Enter the phrase
            </label>
            <br />
            <input
              className="input-elem"
              placeholder="Enter the phrase"
              type="text"
              id="textInput"
              onChange={this.onChangeText}
              value={textInput}
            />
            <div className="count-cont">
              <p className="count-text">No.of letters: {count}</p>
            </div>
          </div>
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
