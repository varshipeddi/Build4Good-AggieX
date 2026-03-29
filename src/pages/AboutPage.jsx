import ContactSection from '../components/ContactSection'

function AboutPage() {
  return (
    <>
      <section className="section-band about-intro-band" data-reveal>
        <div className="section-inner">
          <section className="page-hero about-hero">
            <p className="eyebrow">Our Story</p>
            <h1>About Finch</h1>
            <p>
              Finch is an intentional internship platform for students who want
              better outcomes than mass applying can provide.
            </p>
          </section>
        </div>
      </section>

      <section className="section-band about-mission-band" data-reveal>
        <div className="section-inner">
          <div className="about-split">
            <article className="page-section about-card surface-soft">
              <p className="eyebrow">Purpose</p>
              <h2>Mission</h2>
              <p>
                Help students apply to internships with strategy, not guesswork, by
                focusing on better role targeting and stronger applications.
              </p>
            </article>
            <article className="page-section about-card surface-tint">
              <p className="eyebrow">Direction</p>
              <h2>Vision</h2>
              <p>
                Build a future where undergraduate students can navigate internship
                recruiting with clarity, confidence, and a higher probability of
                interviews.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-band founder-band" data-reveal>
        <div className="section-inner">
          <section className="page-section origin-story">
            <div className="founder-story">
              <img
                src="/assets/team/carlos.jpg"
                alt="Carlos"
                className="founder-photo"
              />
              <div>
                <p className="eyebrow">Why Finch Exists</p>
                <h2>Origin Story</h2>
                <p className="founder-name">Carlos, Founder</p>
                <p>
                  Finch started from Carlos&apos;s own internship application pain.
                  After sending many applications with limited responses, he set out
                  to build a better process that helps students apply intentionally
                  and improve results.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="section-band team-band" data-reveal>
        <div className="section-inner">
          <section className="page-section team-section">
            <p className="eyebrow">Team</p>
            <h2>Built by students who understand the process.</h2>
            <div className="team-grid">
              <article className="team-card">
                <img
                  src="/assets/team/carlos.jpg"
                  alt="Carlos"
                  className="team-photo"
                />
                <h3>Carlos</h3>
                <p>Finch Team</p>
              </article>
              <article className="team-card">
                <img
                  src="/assets/team/jose.jpg"
                  alt="Jose"
                  className="team-photo"
                />
                <h3>Jose</h3>
                <p>Finch Team</p>
              </article>
              <article className="team-card">
                <img
                  src="/assets/team/nicanor.png"
                  alt="Nicanor"
                  className="team-photo"
                />
                <h3>Nicanor</h3>
                <p>Finch Team</p>
              </article>
            </div>
          </section>
        </div>
      </section>

      <ContactSection />
    </>
  )
}

export default AboutPage
