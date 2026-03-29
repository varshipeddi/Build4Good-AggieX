import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

const THEME_KEY = 'finch-theme'

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light'

  const storedTheme = window.localStorage.getItem(THEME_KEY)
  if (storedTheme === 'light' || storedTheme === 'dark') return storedTheme

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function SiteLayout() {
  const { pathname } = useLocation()
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('[data-reveal]'))
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    sections.forEach((section, index) => {
      section.style.setProperty(
        '--reveal-delay',
        `${Math.min(index * 60, 240)}ms`,
      )
    })

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      sections.forEach((s) => s.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [pathname])

  const isDark = theme === 'dark'

  function toggleTheme() {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="homepage">
      <header className="navbar">
        <NavLink to="/" className="brand">
          <img
            src="/assets/branding/finch-logo.png"
            alt="Finch"
            className="brand-logo"
          />
        </NavLink>
        <div className="nav-controls">
          <nav className="nav-links" aria-label="Primary">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/product">Product</NavLink>
          </nav>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={isDark}
          >
            <span className="theme-toggle-icon" aria-hidden="true">
              {isDark ? '☀' : '☾'}
            </span>
            <span>{isDark ? 'Light' : 'Dark'}</span>
          </button>
        </div>
      </header>

      <main className="page-content">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="section-inner">
          <div className="footer-grid">
            <section className="footer-col footer-brand-col" aria-label="Finch brand">
              <img
                src="/assets/branding/finch-logo.png"
                alt="Finch"
                className="footer-logo"
              />
              <p className="footer-tagline">
                Intentional internship applications for students pursuing better-fit
                roles and better outcomes.
              </p>
            </section>

            <section className="footer-col" aria-label="Footer navigation">
              <p className="footer-title">Navigate</p>
              <nav className="footer-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/product">Product</NavLink>
              </nav>
            </section>

            <section className="footer-col" aria-label="Contact emails">
              <p className="footer-title">Contact</p>
              <div className="footer-contact">
                <a href="mailto:nicanor14gz@tamu.edu">nicanor14gz@tamu.edu</a>
                <a href="mailto:jmtirador@tamu.edu">jmtirador@tamu.edu</a>
                <a href="mailto:carlunpen@tamu.edu">carlunpen@tamu.edu</a>
              </div>
            </section>

            <section className="footer-col" aria-label="Quick actions">
              <p className="footer-title">Quick Actions</p>
              <div className="footer-actions">
                <button type="button" className="footer-action">
                  Follow on Social
                </button>
                <button type="button" className="footer-action">
                  Share Finch
                </button>
                <button type="button" className="footer-action">
                  Download Extension
                </button>
              </div>
            </section>
          </div>

          <p className="footer-bottom">Finch — Intentional internship platform.</p>
        </div>
      </footer>
    </div>
  )
}

export default SiteLayout
