import { useState } from 'react'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function WaitlistSection() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  function handleChange(event) {
    setEmail(event.target.value)
    if (error) setError('')
    if (success) setSuccess(false)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const normalizedEmail = email.trim()

    if (!normalizedEmail || !emailPattern.test(normalizedEmail)) {
      setError('Please enter a valid email address to join the waitlist.')
      setSuccess(false)
      return
    }

    setError('')
    setSuccess(true)
    setEmail('')
  }

  return (
    <section className="section-band waitlist-band" data-reveal>
      <div className="section-inner">
        <div className="waitlist-section">
          <div className="section-head waitlist-head">
            <p className="eyebrow">Early Access</p>
            <h2>Get product updates and early Finch access.</h2>
            <p>
              Join the waitlist to follow intentional application workflows,
              better-fit role targeting, and tailored material updates for students.
            </p>
          </div>

          <form className="waitlist-form" onSubmit={handleSubmit} noValidate>
            <label className="waitlist-label" htmlFor="waitlist-email">
              School email
            </label>
            <div className="waitlist-controls">
              <input
                id="waitlist-email"
                name="email"
                type="email"
                autoComplete="email"
                className={`waitlist-input ${error ? 'is-error' : ''} ${
                  success ? 'is-success' : ''
                }`}
                placeholder="you@university.edu"
                value={email}
                onChange={handleChange}
                aria-invalid={Boolean(error)}
                aria-describedby="waitlist-feedback waitlist-trust"
              />
              <button type="submit" className="btn btn-primary waitlist-submit">
                Join Waitlist
              </button>
            </div>

            <p id="waitlist-trust" className="waitlist-trust">
              Student-focused updates, early access, and occasional internship
              tips.
            </p>

            {(error || success) && (
              <p
                id="waitlist-feedback"
                className={`waitlist-status ${success ? 'is-success' : 'is-error'}`}
                role={success ? 'status' : 'alert'}
              >
                {success
                  ? "You're on the list. We'll share Finch updates as we roll out early access."
                  : error}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default WaitlistSection
