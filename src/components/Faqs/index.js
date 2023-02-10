// Write your code here.

import './index.css'

import FaqItem from '../FaqItem'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="faq-bg-container">
      <div className="faq-card-container">
        <h1 className="heading">FQAs</h1>
        <ul className="faq-item-list">
          {faqsList.map(eachList => (
            <FaqItem key={eachList.id} faqList={eachList} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
