import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { loadContent } from '../lib/contentStore'

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
  const [content] = useState(loadContent)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem(THEME_KEY, theme)
  }, [theme])

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
            width="120"
            height="34"
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
              {isDark ? '\u2600' : '\u263E'}
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
                width="120"
                height="24"
              />
              <p className="footer-tagline">{content.footerTagline}</p>
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
                <a href="https://applyfinch.com" className="footer-action">
                  Try Finch Free
                </a>
                <a href="https://applyfinch.com" className="footer-action">
                  Download Extension
                </a>
              </div>
            </section>
          </div>

          <p className="footer-bottom">
            &copy; {new Date().getFullYear()} Finch &mdash; Intentional
            internship platform. Sponsored by AggieX, Aggies Create, and Meloy
            Entrepreneurship.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default SiteLayout
