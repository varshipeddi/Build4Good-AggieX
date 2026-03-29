import { useState } from 'react'

const faqItems = [
  {
    question: 'What is Finch?',
    answer:
      'Finch is an intentional internship platform for students who are tired of mass applying with little return.',
  },
  {
    question: 'Is Finch an auto-apply tool?',
    answer:
      'No. Finch is not just an auto-apply tool. It helps you target better roles, tailor materials, and improve interview probability.',
  },
  {
    question: 'How does Finch work?',
    answer:
      'Finch guides a student-focused workflow: connect LinkedIn, browse roles on major ATS platforms, tailor materials, autofill repetitive fields, and review before submitting.',
  },
  {
    question: 'What platforms does Finch support?',
    answer:
      'Finch is designed around major ATS platforms such as Greenhouse, Lever, and Workday.',
  },
  {
    question: 'How long does an application take with Finch?',
    answer:
      'For repetitive parts of the process, Finch can reduce the time from 20–30 minutes to under 60 seconds.',
  },
  {
    question: 'Do I stay in control before submitting?',
    answer:
      'Yes. Finch stops at the final review page so you stay in control of your application before submission.',
  },
  {
    question: 'Who is Finch built for?',
    answer:
      'Finch is built for students, especially engineering, computer science, and other high-volume internship applicants.',
  },
]

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  function toggleItem(index) {
    setActiveIndex((current) => (current === index ? -1 : index))
  }

  return (
    <section className="section-band faq-band" data-reveal>
      <div className="section-inner">
        <div className="faq-section">
          <div className="section-head faq-head">
            <p className="eyebrow">Common Questions</p>
            <h2>Everything you need to know about Finch.</h2>
          </div>

          <div className="faq-list">
            {faqItems.map((item, index) => {
              const isOpen = activeIndex === index
              const answerId = `faq-answer-${index}`

              return (
                <article
                  key={item.question}
                  className={`faq-item ${isOpen ? 'is-open' : ''}`}
                >
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => toggleItem(index)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                  >
                    <span className="faq-question-text">{item.question}</span>
                    <span className="faq-icon" aria-hidden="true">
                      +
                    </span>
                  </button>

                  <div
                    id={answerId}
                    className={`faq-answer-wrap ${isOpen ? 'is-open' : ''}`}
                  >
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
