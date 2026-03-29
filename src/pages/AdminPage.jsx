import { useState } from 'react'
import { loadContent, saveContent, resetContent, DEFAULTS } from '../lib/contentStore'

const AUTH_KEY = 'finch-cms-auth'
const CREDENTIALS = { username: 'admin', password: 'test123' }

function AdminPage() {
  const [authed, setAuthed] = useState(
    () => sessionStorage.getItem(AUTH_KEY) === 'true',
  )
  const [loginError, setLoginError] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [content, setContent] = useState(loadContent)
  const [saved, setSaved] = useState(false)

  function handleLogin(e) {
    e.preventDefault()
    if (
      username === CREDENTIALS.username &&
      password === CREDENTIALS.password
    ) {
      sessionStorage.setItem(AUTH_KEY, 'true')
      setAuthed(true)
      setLoginError('')
    } else {
      setLoginError('Invalid username or password.')
    }
  }

  function handleLogout() {
    sessionStorage.removeItem(AUTH_KEY)
    setAuthed(false)
    setUsername('')
    setPassword('')
  }

  function handleChange(key, value) {
    setContent((prev) => ({ ...prev, [key]: value }))
    setSaved(false)
  }

  function handleSave() {
    saveContent(content)
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  function handleReset() {
    resetContent()
    setContent({ ...DEFAULTS })
    setSaved(false)
  }

  if (!authed) {
    return (
      <div className="admin-page">
        <div className="admin-login-card">
          <h1>Admin Login</h1>
          <form onSubmit={handleLogin} className="admin-login-form">
            <label>
              Username
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                autoFocus
              />
            </label>
            <label>
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </label>
            {loginError && <p className="admin-error">{loginError}</p>}
            <button type="submit" className="btn btn-primary">
              Log In
            </button>
          </form>
        </div>
      </div>
    )
  }

  const fields = [
    { group: 'Homepage — Hero', fields: [
      { key: 'heroEyebrow', label: 'Eyebrow Text', type: 'text' },
      { key: 'heroHeadline', label: 'Headline (before accent)', type: 'text' },
      { key: 'heroHeadlineAccent', label: 'Headline Accent Word', type: 'text' },
      { key: 'heroSubtitle', label: 'Subtitle', type: 'textarea' },
      { key: 'heroCtaText', label: 'CTA Button Text', type: 'text' },
      { key: 'heroCtaUrl', label: 'CTA Button URL', type: 'text' },
      { key: 'heroImage', label: 'Hero Image URL', type: 'text' },
    ]},
    { group: 'Homepage — Bottom CTA', fields: [
      { key: 'ctaHeading', label: 'CTA Heading', type: 'text' },
      { key: 'ctaSubtitle', label: 'CTA Subtitle', type: 'textarea' },
    ]},
    { group: 'About Page', fields: [
      { key: 'aboutDescription', label: 'About Description', type: 'textarea' },
      { key: 'missionText', label: 'Mission Statement', type: 'textarea' },
      { key: 'visionText', label: 'Vision Statement', type: 'textarea' },
    ]},
    { group: 'Product Page', fields: [
      { key: 'productHeroSubtitle', label: 'Product Hero Subtitle', type: 'textarea' },
    ]},
    { group: 'Footer', fields: [
      { key: 'footerTagline', label: 'Footer Tagline', type: 'text' },
    ]},
  ]

  return (
    <div className="admin-page">
      <div className="admin-panel">
        <div className="admin-header">
          <div>
            <h1>Content Editor</h1>
            <p className="admin-hint">
              Edit site content below. Changes are saved in your browser and reflected immediately on the site.
            </p>
          </div>
          <div className="admin-header-actions">
            {saved && <span className="admin-saved-badge">Saved</span>}
            <button type="button" className="btn btn-primary" onClick={handleSave}>
              Save Changes
            </button>
            <button type="button" className="btn btn-secondary" onClick={handleReset}>
              Reset to Defaults
            </button>
            <button type="button" className="btn admin-logout-btn" onClick={handleLogout}>
              Log Out
            </button>
          </div>
        </div>

        <div className="admin-fields">
          {fields.map((section) => (
            <fieldset key={section.group} className="admin-fieldset">
              <legend>{section.group}</legend>
              {section.fields.map((f) => (
                <label key={f.key} className="admin-field">
                  <span className="admin-field-label">{f.label}</span>
                  {f.type === 'textarea' ? (
                    <textarea
                      value={content[f.key] ?? ''}
                      onChange={(e) => handleChange(f.key, e.target.value)}
                      rows={3}
                    />
                  ) : (
                    <input
                      type="text"
                      value={content[f.key] ?? ''}
                      onChange={(e) => handleChange(f.key, e.target.value)}
                    />
                  )}
                </label>
              ))}
            </fieldset>
          ))}
        </div>

        <div className="admin-footer-bar">
          <button type="button" className="btn btn-primary" onClick={handleSave}>
            Save Changes
          </button>
          <button type="button" className="btn btn-secondary" onClick={handleReset}>
            Reset to Defaults
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdminPage
