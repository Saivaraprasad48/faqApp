// import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem/index'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="main-container">
      <div className="card-container">
        <h1 className="heading"> FAQs </h1>
        <ul className="card">
          {faqsList.map(each => (
            <FaqItem key={each.id} details={each} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
