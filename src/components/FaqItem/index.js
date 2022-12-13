// Write your code here.

import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isActive: false}

  ShowHideText = () => {
    const {isActive} = this.state
    const {FaqsDetails} = this.props
    const {answerText} = FaqsDetails

    if (isActive) {
      return (
        <div className="Faqs-answer-container">
          <hr className="line" />
          <p className="answerText">{answerText}</p>
        </div>
      )
    }
    return null
  }

  OnShowHideButton = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  render() {
    const {FaqsDetails} = this.props
    const {questionText} = FaqsDetails
    const {isActive} = this.state

    const ShowHideImg = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const altText = isActive ? 'minus' : 'plus'
    return (
      <li className="Faqs-list-items">
        <div className="Faqs-question-answer-container">
          <div className="Faqs-question-container">
            <h1 className="QuestionText">{questionText}</h1>
            <button
              type="button"
              className="show-hide-btn"
              onClick={this.OnShowHideButton}
            >
              <img src={ShowHideImg} alt={altText} />
            </button>
          </div>
          {this.ShowHideText()}
        </div>
      </li>
    )
  }
}

export default FaqItem
