import { useState } from 'react'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const initialValues = {
  name: '',
  email: '',
  message: '',
}

function validate(values) {
  const errors = {}

  if (!values.name.trim()) {
    errors.name = 'Please enter your name.'
  }

  const normalizedEmail = values.email.trim()
  if (!normalizedEmail || !emailPattern.test(normalizedEmail)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!values.message.trim()) {
    errors.message = 'Please add a short message.'
  }

  return errors
}

function ContactSection() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target

    setValues((current) => ({
      ...current,
      [name]: value,
    }))

    if (errors[name]) {
      setErrors((current) => ({
        ...current,
        [name]: '',
      }))
    }

    if (isSubmitted) {
      setIsSubmitted(false)
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validate(values)

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setIsSubmitted(false)
      return
    }

    setErrors({})
    setIsSubmitted(true)
    setValues(initialValues)
  }

  return (
    <section className="section-band contact-band" data-reveal>
      <div className="section-inner">
        <div className="contact-section">
          <div className="contact-grid">
            <div className="contact-copy">
              <p className="eyebrow">Contact Finch</p>
              <h2>Let&apos;s help students apply with intention.</h2>
              <p>
                Reach out to collaborate, share feedback, or learn more about how
                Finch supports better-fit roles, tailored materials, and stronger
                internship outcomes.
              </p>
              <div className="contact-emails" aria-label="Finch contact emails">
                <a href="mailto:nicanor14gz@tamu.edu">nicanor14gz@tamu.edu</a>
                <a href="mailto:jmtirador@tamu.edu">jmtirador@tamu.edu</a>
                <a href="mailto:carlunpen@tamu.edu">carlunpen@tamu.edu</a>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-field">
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={values.name}
                  onChange={handleChange}
                  className={errors.name ? 'is-error' : ''}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'contact-name-error' : undefined}
                />
                {errors.name && (
                  <p id="contact-name-error" className="contact-error" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={handleChange}
                  className={errors.email ? 'is-error' : ''}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'contact-email-error' : undefined}
                />
                {errors.email && (
                  <p id="contact-email-error" className="contact-error" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={handleChange}
                  className={errors.message ? 'is-error' : ''}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                />
                {errors.message && (
                  <p
                    id="contact-message-error"
                    className="contact-error"
                    role="alert"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              <button type="submit" className="btn btn-primary contact-submit">
                Send Message
              </button>

              {isSubmitted && (
                <p className="contact-success" role="status">
                  Thanks for reaching out. We&apos;ll follow up soon with next
                  steps.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
