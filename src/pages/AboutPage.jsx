import { useRef, useState } from 'react'
import { gsap, useGSAP } from '../lib/gsap'
import { loadContent } from '../lib/contentStore'
import ContactSection from '../components/ContactSection'

function AboutPage() {
  const pageRef = useRef(null)
  const [content] = useState(loadContent)

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches
      if (prefersReduced) return

      gsap.from('.about-hero > *', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
      })

      gsap.utils.toArray('.about-card').forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: 'top 88%' },
          y: 28,
          opacity: 0,
          duration: 0.5,
          delay: i * 0.1,
          ease: 'power2.out',
        })
      })

      gsap.from('.founder-story', {
        scrollTrigger: { trigger: '.founder-story', start: 'top 85%' },
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
      })

      gsap.utils.toArray('.team-card').forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: 'top 88%' },
          y: 24,
          opacity: 0,
          scale: 0.96,
          duration: 0.5,
          delay: i * 0.1,
          ease: 'back.out(1.4)',
        })
      })
    },
    { scope: pageRef },
  )

  return (
    <div ref={pageRef}>
      <section className="section-band about-intro-band">
        <div className="section-inner">
          <section className="page-hero about-hero">
            <p className="eyebrow">Our Story</p>
            <h1>About Finch</h1>
            <p>{content.aboutDescription}</p>
          </section>
        </div>
      </section>

      <section className="section-band about-mission-band">
        <div className="section-inner">
          <div className="about-split">
            <article className="page-section about-card surface-soft">
              <p className="eyebrow">Purpose</p>
              <h2>Mission</h2>
              <p>{content.missionText}</p>
            </article>
            <article className="page-section about-card surface-tint">
              <p className="eyebrow">Direction</p>
              <h2>Vision</h2>
              <p>{content.visionText}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-band audience-band">
        <div className="section-inner">
          <section className="page-section audience-section">
            <p className="eyebrow">Who We Serve</p>
            <h2>Built for students who deserve better outcomes.</h2>
            <div className="audience-grid">
              <div className="audience-item">
                <strong>Ages 19&ndash;23</strong>
                <p>Undergraduate students</p>
              </div>
              <div className="audience-item">
                <strong>CS, Engineering &amp; Quantitative Majors</strong>
                <p>Actively pursuing competitive internships</p>
              </div>
              <div className="audience-item">
                <strong>50&ndash;200 Applications Per Cycle</strong>
                <p>High volume with low response rates</p>
              </div>
              <div className="audience-item">
                <strong>Digitally Native &amp; Time-Constrained</strong>
                <p>Outcome-driven, seeking efficiency</p>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="section-band founder-band">
        <div className="section-inner">
          <section className="page-section origin-story">
            <div className="founder-story">
              <img
                src="/assets/team/carlos.jpg"
                alt="Carlos Luna Pena, CTO and Co-founder of Finch"
                className="founder-photo"
                width="150"
                height="150"
              />
              <div>
                <p className="eyebrow">Why Finch Exists</p>
                <h2>Origin Story</h2>
                <p className="founder-name">Carlos Luna Pena, CTO &amp; Co-founder</p>
                <p>
                  Carlos was trying to apply to internships as a CS major and was
                  not getting any responses from mass applications. He understood
                  his own pain points and thought of a more efficient way to
                  approach the process. He built a functioning backend that
                  minimized the number of applications he had to fill out while
                  maximizing his success rate for interviews. That&rsquo;s how
                  Finch was born.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="section-band team-band">
        <div className="section-inner">
          <section className="page-section team-section">
            <p className="eyebrow">The Team</p>
            <h2>Built by students who understand the process.</h2>
            <div className="team-grid">
              <article className="team-card">
                <img
                  src="/assets/team/nicanor.png"
                  alt="Nicanor Garza-Zazueta"
                  className="team-photo"
                  width="88"
                  height="88"
                />
                <h3>Nicanor Garza-Zazueta</h3>
                <p className="team-role">CEO &amp; Co-founder</p>
                <p className="team-bio">
                  Industrial Distribution Engineering student at Texas A&amp;M.
                  Meloy Fellows Grant recipient operating at the intersection of
                  entrepreneurship, strategy, and execution.
                </p>
                <a href="mailto:nicanor14gz@tamu.edu" className="team-email">
                  nicanor14gz@tamu.edu
                </a>
              </article>
              <article className="team-card">
                <img
                  src="/assets/team/jose.jpg"
                  alt="Jose Tirado"
                  className="team-photo"
                  width="88"
                  height="88"
                />
                <h3>Jose Tirado</h3>
                <p className="team-role">CTO &amp; Co-founder</p>
                <p className="team-bio">
                  Industrial Engineering student at Texas A&amp;M focused on
                  streamlining operations. Thrives on nuanced problems that need
                  outside-the-box solutions.
                </p>
                <a href="mailto:jmtirador@tamu.edu" className="team-email">
                  jmtirador@tamu.edu
                </a>
              </article>
              <article className="team-card">
                <img
                  src="/assets/team/carlos.jpg"
                  alt="Carlos Luna Pena"
                  className="team-photo"
                  width="88"
                  height="88"
                />
                <h3>Carlos Luna Pena</h3>
                <p className="team-role">CTO &amp; Co-founder</p>
                <p className="team-bio">
                  Junior CS student at Texas A&amp;M with cybersecurity minor.
                  Technical lead for AIPHRODITE, 2nd place Accenture Case
                  Competition. Built Finch&rsquo;s core backend.
                </p>
                <a href="mailto:carlunpen@tamu.edu" className="team-email">
                  carlunpen@tamu.edu
                </a>
              </article>
            </div>
          </section>
        </div>
      </section>

      <ContactSection />
    </div>
  )
}

export default AboutPage
