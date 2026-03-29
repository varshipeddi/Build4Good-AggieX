const STORAGE_KEY = 'finch-cms-content'

export const DEFAULTS = {
  heroEyebrow: 'Intentional Internship Platform',
  heroHeadline: 'Turn Applications Into',
  heroHeadlineAccent: 'Interviews.',
  heroSubtitle:
    'Stop guessing and start applying with strategy. Finch helps you target the right internships, tailor your applications intelligently, and increase your interview rate without spending more time applying.',
  heroCtaText: 'Get Started',
  heroCtaUrl: 'https://applyfinch.com',
  heroImage: '/assets/product/product-1.png',

  aboutDescription:
    'Finch is an intentional internship platform built for engineering, computer science, and high-volume student applicants who are tired of mass applying with little return. Instead of helping students submit more applications, Finch optimizes for interview probability.',
  missionText:
    'To transform the internship application process from a frustrating numbers game into an intentional, data-driven strategy that helps students earn the opportunities they deserve \u2014 while Finch streamlines, optimizes, and strengthens their path to interviews.',
  visionText:
    'To become the default infrastructure for intentional early-career recruiting \u2014 replacing cold, volume-based application systems with a smarter, outcome-driven approach where students are evaluated more efficiently and the path from education to experience is transparent and merit-based.',

  ctaHeading: 'Turn internship effort into better outcomes.',
  ctaSubtitle:
    'Start with intentional applications, focus on better-fit roles, and move from volume pressure to stronger interview-ready submissions.',

  productHeroSubtitle:
    'A cleaner, more intentional internship application process from discovery to submission.',

  footerTagline:
    'Fewer applications. More interviews. The intentional internship platform for students.',
}

export function loadContent() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (!stored) return { ...DEFAULTS }
    return { ...DEFAULTS, ...JSON.parse(stored) }
  } catch {
    return { ...DEFAULTS }
  }
}

export function saveContent(next) {
  const overrides = {}
  for (const key of Object.keys(next)) {
    if (next[key] !== DEFAULTS[key]) {
      overrides[key] = next[key]
    }
  }
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides))
}

export function resetContent() {
  window.localStorage.removeItem(STORAGE_KEY)
}
