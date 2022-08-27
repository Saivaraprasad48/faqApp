import {Component} from 'react'
import './index.css'

const plusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isActive: false}

  clicked = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  renderAnswer = () => {
    const {isActive} = this.state
    const {details} = this.props
    const {answerText} = details

    if (isActive) {
      return (
        <div className="answer-container">
          <hr className="line" />
          <p className="answer">{answerText} </p>{' '}
        </div>
      )
    }
    return null
  }

  renderImg = () => {
    const {isActive} = this.state
    const img = isActive ? minusImg : plusImg
    const altText = isActive ? 'minus' : 'plus'

    return (
      <button className="btn" type="button" onClick={this.clicked}>
        <img className="plus-icon" src={img} alt={altText} />
      </button>
    )
  }

  render() {
    const {details} = this.props
    const {questionText} = details

    return (
      <li className="card-item">
        <div className="top-head-section">
          <h1 className="question">{questionText}</h1>
          {this.renderImg()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
