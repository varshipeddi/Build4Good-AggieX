import FAQSection from '../components/FAQSection'
import WaitlistSection from '../components/WaitlistSection'

function HomePage() {
  return (
    <>
      <section className="section-band hero-band" data-reveal>
        <div className="section-inner">
          <div className="hero">
            <div className="hero-grid">
              <div className="hero-main">
                <p className="eyebrow">Intentional Internship Platform</p>
                <h1>Apply to internships intentionally, not blindly.</h1>
                <p>
                  Finch helps students focus on better-fit roles, improve tailored
                  application materials, and increase interview probability.
                </p>
                <div className="hero-actions">
                  <button type="button" className="btn btn-primary">
                    Get Started
                  </button>
                  <button type="button" className="btn btn-secondary">
                    How It Works
                  </button>
                </div>
              </div>

              <aside className="hero-panel" aria-label="Finch value highlights">
                <div className="hero-panel-brand">
                  <img
                    src="/assets/branding/finch-logo-icon-light.png"
                    alt=""
                    aria-hidden="true"
                    className="hero-icon"
                  />
                  <img
                    src="/assets/branding/finch-logo-dark.png"
                    alt="Finch"
                    className="hero-logo-dark"
                  />
                </div>
                <h3>Why Finch</h3>
                <ul className="feature-list">
                  <li>Focus on roles that match your goals.</li>
                  <li>Tailor materials for each application.</li>
                  <li>Apply with confidence, not volume pressure.</li>
                </ul>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="section-band metrics-band" data-reveal>
        <div className="section-inner">
          <div className="stat-band">
            <article className="stat-item">
              <h3>20–30 min → under 60s</h3>
              <p>Autofill repetitive parts of each application workflow.</p>
            </article>
            <article className="stat-item">
              <h3>Fewer apps, more interviews</h3>
              <p>Prioritize fit and quality over mass-apply volume.</p>
            </article>
            <article className="stat-item">
              <h3>Tailored per role</h3>
              <p>Generate resume and cover letter content per opportunity.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-band signals-band" data-reveal>
        <div className="section-inner">
          <div className="signal-strip">
            <article className="signal-card">
              <h3>ATS-aware workflow</h3>
              <p>Built for Greenhouse, Lever, and Workday.</p>
            </article>
            <article className="signal-card">
              <h3>Intentional targeting</h3>
              <p>Better-fit opportunities over mass apply patterns.</p>
            </article>
            <article className="signal-card">
              <h3>Role-specific materials</h3>
              <p>Tailored resume and cover letter for each role.</p>
            </article>
            <article className="signal-card">
              <h3>Faster execution</h3>
              <p>Complete repetitive tasks in under 60 seconds.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-band narrative-band" data-reveal>
        <div className="section-inner">
          <div className="problem-solution">
            <article className="problem">
              <p className="eyebrow">The Problem</p>
              <h2>Mass applying leads to low signal and high frustration.</h2>
              <p>
                Students are often told to mass apply. They send dozens of
                applications, then still deal with low response rates, ghosting, and
                little useful feedback.
              </p>
            </article>
            <article className="solution">
              <p className="eyebrow">The Finch Approach</p>
              <h2>Better targeting and tailored materials drive better outcomes.</h2>
              <p>
                Finch helps students apply with intention: target better-fit roles,
                create tailored materials, and focus on better outcomes instead of
                just higher application volume.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-band flow-band" data-reveal>
        <div className="section-inner">
          <section className="how-it-works home-flow">
            <div className="section-head">
              <p className="eyebrow">Product Flow</p>
              <h2>How Finch works in five practical steps.</h2>
            </div>
            <div className="steps-grid">
              <article className="step-card">
                <h3>1. Sign up and connect LinkedIn</h3>
                <p>Start your profile quickly using your LinkedIn information.</p>
              </article>
              <article className="step-card">
                <h3>2. Browse jobs on major ATS platforms</h3>
                <p>Find internship roles from platforms students already use.</p>
              </article>
              <article className="step-card">
                <h3>3. Generate tailored materials</h3>
                <p>Create a resume and cover letter matched to each role.</p>
              </article>
              <article className="step-card">
                <h3>4. Autofill the application</h3>
                <p>Save time by filling repetitive fields with fewer clicks.</p>
              </article>
              <article className="step-card">
                <h3>5. Review and submit</h3>
                <p>Confirm everything is accurate before sending.</p>
              </article>
            </div>
          </section>
        </div>
      </section>

      <FAQSection />

      <WaitlistSection />

      <section className="section-band cta-band" data-reveal>
        <div className="section-inner">
          <section className="cta cta-strip">
            <p className="eyebrow">Next Step</p>
            <h2>Turn internship effort into better outcomes.</h2>
            <p>
              Start with intentional applications, focus on better-fit roles, and
              move from volume pressure to stronger interview-ready submissions.
            </p>
            <div className="hero-actions cta-actions-strong">
              <button type="button" className="btn btn-primary">
                Get Started
              </button>
              <button type="button" className="btn btn-secondary">
                Download Extension
              </button>
              <button type="button" className="btn btn-secondary">
                Join Waitlist
              </button>
            </div>
            <p className="cta-subnote">
              Built for students who want smarter applications, not just more
              applications.
            </p>
          </section>
        </div>
      </section>
    </>
  )
}

export default HomePage
