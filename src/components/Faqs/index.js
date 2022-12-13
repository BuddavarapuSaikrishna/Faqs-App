// Write your code here.

import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="App-container">
        <div className="Faqs-container">
          <h1 className="heading">Faqs</h1>

          <ul>
            {faqsList.map(eachItem => (
              <FaqItem key={eachItem.id} FaqsDetails={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
