// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
    status: 'Count is Even',
  }

  isIncrement = () => {
    const {count, status} = this.state
    const randomNumber = Math.random() * 100

    this.setState(prevState => ({
      count: prevState.count + Math.ceil(randomNumber),
    }))
  }

  render() {
    const {count, status} = this.state
    return (
      <div className="main-container">
        <div className="sub-container">
          <h1 className="heading">Count {count}</h1>
          <div className="btm-container">
            {count % 2 === 0 ? (
              <p className="count-checking">Count is Even</p>
            ) : (
              <p className="count-checking">Count is Odd</p>
            )}
            <button type="button" className="button" onClick={this.isIncrement}>
              Increment
            </button>
            <p className="bottom-text">
              *Increase By Random Number Between 0 to 100
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
