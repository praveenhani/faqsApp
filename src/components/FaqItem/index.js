// Write your code here.
import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {
    isShow: false,
  }

  toggleButton = () => {
    this.setState(prevState => ({isShow: !prevState.isShow}))
  }

  showQuestionButton = () => {
    const {isShow} = this.state
    const {faqList} = this.props
    const {questionText} = faqList
    const imgUrl = isShow
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altText = isShow ? 'minus' : 'plus'

    return (
      <>
        <h1 className="heading-faq">{questionText}</h1>
        <button className="button" type="button" onClick={this.toggleButton}>
          <img className="logo" src={imgUrl} alt={altText} />
        </button>
      </>
    )
  }

  renderShowAnswer = () => {
    const {isShow} = this.state
    const {faqList} = this.props
    const {answerText} = faqList

    if (isShow) {
      return (
        <>
          <hr className="hr-line" />
          <p className="para-ans">{answerText}</p>
        </>
      )
    }
    return null
  }

  render() {
    return (
      <li className="list-container">
        <div className="question-container">{this.showQuestionButton()}</div>

        <div className="answer-container">{this.renderShowAnswer()}</div>
      </li>
    )
  }
}

export default FaqItem
