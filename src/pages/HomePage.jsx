import { useRef, useState } from 'react'
import { gsap, useGSAP } from '../lib/gsap'
import { loadContent } from '../lib/contentStore'
import FAQSection from '../components/FAQSection'
import WaitlistSection from '../components/WaitlistSection'
import PaperPlaneAnimation from '../components/PaperPlaneAnimation'

function HomePage() {
  const heroRef = useRef(null)
  const [content] = useState(loadContent)

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches
      if (prefersReduced) return

      gsap.from('.hero-main > *', {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
      })

      gsap.from('.hero-mockup', {
        y: 60,
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        delay: 0.3,
        ease: 'power3.out',
      })

      gsap.utils.toArray('.stat-item').forEach((item, i) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 88%',
          },
          y: 30,
          opacity: 0,
          duration: 0.5,
          delay: i * 0.08,
          ease: 'power2.out',
        })
      })

      gsap.utils.toArray('.signal-card').forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
          },
          y: 24,
          opacity: 0,
          duration: 0.45,
          delay: i * 0.06,
          ease: 'power2.out',
        })
      })

      gsap.from('.problem', {
        scrollTrigger: { trigger: '.problem', start: 'top 85%' },
        x: -40,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
      })
      gsap.from('.solution', {
        scrollTrigger: { trigger: '.solution', start: 'top 85%' },
        x: 40,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
      })

      gsap.utils.toArray('.step-card').forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
          },
          scale: 0.92,
          opacity: 0,
          duration: 0.5,
          delay: i * 0.07,
          ease: 'back.out(1.4)',
        })
      })

      gsap.from('.cta-strip', {
        scrollTrigger: { trigger: '.cta-strip', start: 'top 85%' },
        scale: 0.96,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
      })
    },
    { scope: heroRef },
  )

  return (
    <div ref={heroRef}>
      <section className="section-band hero-band">
        <div className="section-inner">
          <div className="hero">
            <div className="hero-grid">
              <div className="hero-main">
                <p className="eyebrow">{content.heroEyebrow}</p>
                <h1>
                  {content.heroHeadline}{' '}
                  <span className="gradient-text">{content.heroHeadlineAccent}</span>
                </h1>
                <p>{content.heroSubtitle}</p>
                <div className="hero-actions">
                  <a href={content.heroCtaUrl} className="btn btn-primary">
                    {content.heroCtaText}
                  </a>
                  <a href="/product" className="btn btn-secondary">
                    How It Works
                  </a>
                </div>
              </div>

              <div className="hero-mockup">
                <img
                  src={content.heroImage}
                  alt="Finch dashboard showing job search and application interface"
                  className="hero-screenshot"
                  width="560"
                  height="350"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-band metrics-band">
        <div className="section-inner">
          <div className="stat-band">
            <article className="stat-item">
              <h3>Under 60 Seconds</h3>
              <p>
                What takes 20-30 minutes per application now takes under a
                minute with autofill and tailored materials.
              </p>
            </article>
            <article className="stat-item">
              <h3>Fewer Apps, More Interviews</h3>
              <p>
                Stop mass applying. Prioritize fit and quality to actually
                increase your response rate.
              </p>
            </article>
            <article className="stat-item">
              <h3>Tailored Per Role</h3>
              <p>
                AI-generated resume and cover letter matched to each specific
                role in seconds.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-band signals-band">
        <div className="section-inner">
          <div className="signal-strip">
            <article className="signal-card">
              <h3>ATS-Aware Workflow</h3>
              <p>Built for Greenhouse, Lever, and Workday.</p>
            </article>
            <article className="signal-card">
              <h3>Intentional Targeting</h3>
              <p>High-signal roles over mass-apply patterns.</p>
            </article>
            <article className="signal-card">
              <h3>Role-Specific Materials</h3>
              <p>Tailored resume and cover letter for each role.</p>
            </article>
            <article className="signal-card">
              <h3>Chrome Extension</h3>
              <p>Detects applications and autofills as you browse.</p>
            </article>
          </div>
        </div>
      </section>

      <PaperPlaneAnimation />

      <section className="section-band narrative-band">
        <div className="section-inner">
          <div className="problem-solution">
            <article className="problem">
              <p className="eyebrow">The Problem</p>
              <h2>Mass applying leads to low signal and high frustration.</h2>
              <p>
                Students submit 100-200 applications per cycle with minimal
                response. The advice is always &ldquo;apply more&rdquo; and
                &ldquo;network more&rdquo; &mdash; but with no system to
                actually improve outcomes. Ghosting, no feedback, and wasted
                hours.
              </p>
            </article>
            <article className="solution">
              <p className="eyebrow">The Finch Approach</p>
              <h2>
                Replace volume with intention. Optimize for interviews, not
                applications.
              </h2>
              <p>
                Finch is not an auto-apply tool &mdash; it&rsquo;s a
                response-optimization platform. Target high-signal roles, tailor
                materials strategically, and increase visibility with
                decision-makers.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-band flow-band">
        <div className="section-inner">
          <section className="how-it-works home-flow">
            <div className="section-head">
              <p className="eyebrow">How It Works</p>
              <h2>From sign-up to submission in five steps.</h2>
            </div>
            <div className="steps-grid">
              <article className="step-card">
                <span className="step-number">1</span>
                <h3>Sign Up &amp; Connect LinkedIn</h3>
                <p>
                  AI analysis generates a rich candidate profile from your
                  LinkedIn automatically.
                </p>
              </article>
              <article className="step-card">
                <span className="step-number">2</span>
                <h3>Browse Jobs on Major ATS Platforms</h3>
                <p>
                  The Chrome extension works across Greenhouse, Lever, Workday,
                  detecting applications as you browse.
                </p>
              </article>
              <article className="step-card">
                <span className="step-number">3</span>
                <h3>Tailored Resume &amp; Cover Letter</h3>
                <p>
                  For each job, Finch generates materials matched to that
                  specific role in seconds.
                </p>
              </article>
              <article className="step-card">
                <span className="step-number">4</span>
                <h3>Autofill the Entire Application</h3>
                <p>
                  The extension fills the form including file uploads, stopping
                  at final review so you stay in control.
                </p>
              </article>
              <article className="step-card">
                <span className="step-number">5</span>
                <h3>Submit With Confidence</h3>
                <p>
                  What normally takes 20-30 minutes now takes under 60 seconds
                  without sacrificing quality.
                </p>
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
                <span className="showcase-label">How It Works</span>
                <h3>A cleaner workflow from search to apply</h3>
                <p>
                  Paste a LinkedIn search URL, choose how many jobs to run, and
                  launch. Track generation, review from cards, and apply
                  directly.
                </p>
              </div>
              <div className="showcase-img">
                <img
                  src="/assets/product/product-2.png"
                  alt="Finch workflow showing search to apply pipeline"
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
                  alt="AI resume builder with ATS alignment score"
                  width="520"
                  height="325"
                  loading="lazy"
                />
              </div>
            </article>
          </div>
        </div>
      </section>

      <FAQSection />

      <WaitlistSection />

      <section className="section-band cta-band">
        <div className="section-inner">
          <section className="cta cta-strip">
            <p className="eyebrow">Ready to Start</p>
            <h2>{content.ctaHeading}</h2>
            <p>{content.ctaSubtitle}</p>
            <div className="hero-actions cta-actions-strong">
              <a href="https://applyfinch.com" className="btn btn-primary">
                Get Started Free
              </a>
              <a href="/product" className="btn btn-secondary">
                Download Extension
              </a>
            </div>
            <p className="cta-subnote">
              Built for students who want smarter applications, not just more
              applications.
            </p>
          </section>
        </div>
      </section>
    </div>
  )
}

export default HomePage
