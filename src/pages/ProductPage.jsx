import { useMemo, useRef, useState } from 'react'
import { gsap, useGSAP } from '../lib/gsap'
import { loadContent } from '../lib/contentStore'

const productSteps = [
  {
    title: 'Connect LinkedIn',
    detail:
      'Sign up and connect your LinkedIn profile. Advanced AI analysis generates a rich candidate profile automatically.',
    points: [
      'Start from real experience data, not blank forms.',
      'Build a clean base for tailored materials.',
    ],
    image: '/assets/product/product-1.png',
  },
  {
    title: 'Browse Jobs on ATS Platforms',
    detail:
      'The Chrome extension works across Greenhouse, Lever, Workday, and other major platforms — detecting applications as you browse.',
    points: [
      'Focus on role fit instead of mass-apply volume.',
      'Stay aligned with where real internships are posted.',
    ],
    image: '/assets/product/product-2.png',
  },
  {
    title: 'Tailored Resume & Cover Letter',
    detail:
      'For each job, Finch generates a tailored resume and cover letter matched to that specific role in seconds.',
    points: [
      'Adjust content for each job rather than reusing one generic set.',
      'Highlight relevant projects and skills by role.',
    ],
    image: '/assets/product/product-3.png',
  },
  {
    title: 'Autofill the Application',
    detail:
      'The extension fills the entire form including file uploads — stopping at the final review page so you stay in control.',
    points: [
      'Cut repeated form work from 20-30 minutes to under 60 seconds.',
      'Spend time refining content instead of retyping details.',
    ],
    image: '/assets/product/product-4.png',
  },
  {
    title: 'Submit With Confidence',
    detail:
      'Review everything before submitting. What normally takes 20-30 minutes now takes under 60 seconds — without sacrificing quality.',
    points: [
      'Final pass before submission for accuracy and clarity.',
      'Fewer, stronger applications for better outcomes.',
    ],
    image: '/assets/product/product-1.png',
  },
]

const subscriptionTiers = [
  {
    name: 'Starter',
    price: '$3.99',
    period: '/mo',
    apps: '15 apps/month',
    desc: '0-10 apps per cycle',
    highlight: false,
  },
  {
    name: 'Core',
    price: '$6.99',
    period: '/mo',
    apps: '40 apps/month',
    desc: '10-50 apps per cycle',
    highlight: true,
    badge: 'Most Popular',
  },
  {
    name: 'Pro',
    price: '$9.99',
    period: '/mo',
    apps: '75 apps/month',
    desc: '50-75 apps per cycle',
    highlight: false,
  },
  {
    name: 'Max',
    price: '$12.99',
    period: '/mo',
    apps: '120 apps/month',
    desc: '75-100+ apps per cycle',
    highlight: false,
  },
]

const bundleTiers = [
  { name: 'Trial', price: '$1.99', apps: '5 applications' },
  { name: 'Standard', price: '$4.99', apps: '20 applications' },
  { name: 'Plus', price: '$8.99', apps: '50 applications' },
]

function ProductPage() {
  const [activeStep, setActiveStep] = useState(0)
  const selected = useMemo(() => productSteps[activeStep], [activeStep])
  const pageRef = useRef(null)
  const [content] = useState(loadContent)

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches
      if (prefersReduced) return

      gsap.from('.product-hero > *', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
      })

      gsap.from('.pricing-card', {
        scrollTrigger: {
          trigger: '.pricing-grid',
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'back.out(1.3)',
      })
    },
    { scope: pageRef },
  )

  return (
    <div ref={pageRef}>
      <section className="section-band product-intro-band">
        <div className="section-inner">
          <section className="page-hero product-hero">
            <p className="eyebrow">Product Overview</p>
            <h1>How Finch Works</h1>
            <p>{content.productHeroSubtitle}</p>
            <div className="product-badges">
              <span className="product-badge">Intentional Flow</span>
              <span className="product-badge">Tailored Materials</span>
              <span className="product-badge">Faster Submission</span>
            </div>
          </section>
        </div>
      </section>

      <section className="section-band product-overview-band">
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

      <section className="section-band product-flow-band">
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
                <img
                  src={selected.image}
                  alt={`Step ${activeStep + 1}: ${selected.title}`}
                  className="stepper-screenshot"
                  width="480"
                  height="300"
                  loading="lazy"
                />
              </article>
            </div>
          </section>
        </div>
      </section>

      <section className="section-band showcase-band">
        <div className="section-inner">
          <div className="section-head">
            <p className="eyebrow">Feature Showcase</p>
            <h2>Everything you need to land your next role.</h2>
          </div>
          <div className="showcase-grid">
            <article className="showcase-card">
              <div className="showcase-text">
                <span className="showcase-label">Autofill Applications</span>
                <h3>Autofill repetitive job application questions</h3>
                <p>
                  Install the Finch browser extension and finish repetitive forms
                  in seconds with profile-aware answers.
                </p>
              </div>
              <div className="showcase-img">
                <img
                  src="/assets/product/product-3.png"
                  alt="Autofill application interface with resume builder"
                  width="520"
                  height="325"
                  loading="lazy"
                />
              </div>
            </article>
            <article className="showcase-card showcase-card--reverse">
              <div className="showcase-text">
                <span className="showcase-label">AI Resume Builder</span>
                <h3>Craft a tailored resume for every role</h3>
                <p>
                  Generate role-specific resume versions, improve ATS alignment,
                  and close keyword gaps before you submit.
                </p>
              </div>
              <div className="showcase-img">
                <img
                  src="/assets/product/product-4.png"
                  alt="Resume builder with ATS score and keyword gap analysis"
                  width="520"
                  height="325"
                  loading="lazy"
                />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-band pricing-band">
        <div className="section-inner">
          <div className="pricing-section">
            <div className="section-head">
              <p className="eyebrow">Pricing</p>
              <h2>Plans that scale with your recruiting cycle.</h2>
              <p>
                We&rsquo;re finalizing plan details and billing. For now, the
                service is free.
              </p>
            </div>

            <h3 className="pricing-category">
              Monthly Subscriptions
            </h3>
            <div className="pricing-grid">
              {subscriptionTiers.map((tier) => (
                <article
                  key={tier.name}
                  className={`pricing-card ${tier.highlight ? 'pricing-card--featured' : ''}`}
                >
                  {tier.badge && (
                    <span className="pricing-badge">{tier.badge}</span>
                  )}
                  <h4>{tier.name}</h4>
                  <div className="pricing-price">
                    {tier.price}
                    <span>{tier.period}</span>
                  </div>
                  <p className="pricing-apps">{tier.apps}</p>
                  <p className="pricing-desc">{tier.desc}</p>
                  <button type="button" className="btn btn-primary pricing-btn">
                    Coming Soon
                  </button>
                </article>
              ))}
            </div>

            <h3 className="pricing-category">
              One-Time Bundles
            </h3>
            <div className="pricing-grid pricing-grid--bundles">
              {bundleTiers.map((tier) => (
                <article key={tier.name} className="pricing-card pricing-card--bundle">
                  <h4>{tier.name}</h4>
                  <div className="pricing-price">{tier.price}</div>
                  <p className="pricing-apps">{tier.apps}</p>
                  <button type="button" className="btn btn-secondary pricing-btn">
                    Coming Soon
                  </button>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-band product-cta-band">
        <div className="section-inner">
          <section className="cta cta-strip">
            <p className="eyebrow">Ready to Try Finch</p>
            <h2>Move from mass applying to intentional momentum.</h2>
            <p>
              Build stronger materials, move faster through repetitive steps, and
              apply to better-fit roles with a student-first workflow.
            </p>
            <div className="hero-actions">
              <a href="https://applyfinch.com" className="btn btn-primary">
                Get Started Free
              </a>
              <a href="https://applyfinch.com" className="btn btn-secondary">
                Download Extension
              </a>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}

export default ProductPage
