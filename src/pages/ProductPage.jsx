import { useMemo, useState } from 'react'

const productSteps = [
  {
    title: 'Connect LinkedIn',
    detail: 'Use your profile to set a strong starting point quickly.',
    points: [
      'Start from real experience data, not blank forms.',
      'Build a clean base for tailored materials.',
    ],
  },
  {
    title: 'Browse jobs on ATS platforms',
    detail: 'Review opportunities on Greenhouse, Lever, and Workday.',
    points: [
      'Focus on role fit instead of mass-apply volume.',
      'Stay aligned with where real internships are posted.',
    ],
  },
  {
    title: 'Tailor resume and cover letter',
    detail: 'Create role-specific materials for each opportunity.',
    points: [
      'Adjust content for each job rather than reusing one generic set.',
      'Highlight relevant projects and skills by role.',
    ],
  },
  {
    title: 'Autofill the application',
    detail: 'Reduce repetitive entry so you can stay focused on quality.',
    points: [
      'Cut repeated form work from 20–30 minutes to under 60 seconds.',
      'Spend time refining content instead of retyping details.',
    ],
  },
  {
    title: 'Review and submit',
    detail: 'Check details and apply with confidence to better-fit roles.',
    points: [
      'Final pass before submission for accuracy and clarity.',
      'Prioritize fewer, stronger applications for better outcomes.',
    ],
  },
]

function ProductPage() {
  const [activeStep, setActiveStep] = useState(0)
  const selected = useMemo(() => productSteps[activeStep], [activeStep])

  return (
    <>
      <section className="section-band product-intro-band" data-reveal>
        <div className="section-inner">
          <section className="page-hero product-hero">
            <p className="eyebrow">Product Overview</p>
            <h1>How Finch Works</h1>
            <p>
              A cleaner, more intentional internship application process from
              discovery to submission.
            </p>
            <div className="product-badges">
              <span className="product-badge">
                <img
                  src="/assets/branding/finch-logo-icon-light.png"
                  alt=""
                  aria-hidden="true"
                />
                Intentional flow
              </span>
              <span className="product-badge">
                <img
                  src="/assets/branding/finch-logo-icon-light.png"
                  alt=""
                  aria-hidden="true"
                />
                Tailored materials
              </span>
              <span className="product-badge">
                <img
                  src="/assets/branding/finch-logo-icon-light.png"
                  alt=""
                  aria-hidden="true"
                />
                Faster submission
              </span>
            </div>
          </section>
        </div>
      </section>

      <section className="section-band product-overview-band" data-reveal>
        <div className="section-inner">
          <section className="page-section product-intro">
            <p className="eyebrow">The Workflow</p>
            <h2>A guided workflow for intentional applications.</h2>
            <p>
              Finch combines job discovery, tailored materials, and streamlined
              application steps so students can spend less time guessing and more
              time applying well.
            </p>
            <ul className="mini-points">
              <li>Better targeting over blind volume</li>
              <li>Tailored materials per role</li>
              <li>Cleaner submission flow</li>
            </ul>
          </section>
        </div>
      </section>

      <section className="section-band product-flow-band" data-reveal>
        <div className="section-inner">
          <section className="page-section how-it-works-flow">
            <div className="section-head">
              <p className="eyebrow">Step by Step</p>
              <h2>From profile setup to confident submission.</h2>
            </div>
            <div className="product-stepper">
              <div
                className="stepper-tabs"
                role="tablist"
                aria-label="How Finch works"
              >
                {productSteps.map((step, index) => (
                  <button
                    key={step.title}
                    type="button"
                    className={`stepper-tab ${activeStep === index ? 'is-active' : ''}`}
                    onClick={() => setActiveStep(index)}
                    role="tab"
                    aria-selected={activeStep === index}
                  >
                    <span>{index + 1}</span>
                    {step.title}
                  </button>
                ))}
              </div>
              <article className="stepper-panel" key={selected.title}>
                <p className="eyebrow">
                  Step {activeStep + 1} of {productSteps.length}
                </p>
                <h3>{selected.title}</h3>
                <p>{selected.detail}</p>
                <ul className="stepper-points">
                  {selected.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            </div>
          </section>
        </div>
      </section>

      <section className="section-band product-cta-band" data-reveal>
        <div className="section-inner">
          <section className="cta cta-strip">
            <p className="eyebrow">Ready to Try Finch</p>
            <h2>Move from mass applying to intentional momentum.</h2>
            <p>
              Build stronger materials, move faster through repetitive steps, and
              apply to better-fit roles with a student-first workflow.
            </p>
            <div className="hero-actions">
              <button type="button" className="btn btn-primary">
                Get Started
              </button>
              <button type="button" className="btn btn-secondary">
                Download Extension
              </button>
            </div>
          </section>
        </div>
      </section>
    </>
  )
}

export default ProductPage
