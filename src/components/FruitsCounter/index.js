import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoesCount: 0,
    bananasCount: 0,
  }

  addBanana = () => {
    this.setState(prevState => ({bananasCount: prevState.bananasCount + 1}))
  }

  addMango = () => {
    this.setState(prevState => ({mangoesCount: prevState.mangoesCount + 1}))
  }

  render() {
    const {mangoesCount} = this.state
    const {bananasCount} = this.state

    return (
      <div className="background-container">
        <div className="images-container">
          <h1 className="heading">
            Bob ate<span className="count">{mangoesCount}</span>mangoes
            <span className="count">{bananasCount}</span>bananas
          </h1>
          <div className="fruits-container">
            <div className="mango-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="mango-image-styling"
              />
              <div className="button-container">
                <button
                  type="button"
                  onClick={this.addMango}
                  className="button"
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="banana-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="banana-image-styling"
              />
              <div className="button-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.addBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
