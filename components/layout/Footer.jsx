'use client'
import { useState } from 'react'

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState(null)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const links = [
    { label: 'GitHub', href: 'https://github.com/kiranShamsHere' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/kiranshams' },
    { label: 'Email', href: 'mailto:kiranshamsdhiloo@gmail.com' },
  ]

  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '0 2rem',
      background: 'var(--bg)',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px',
        gap: '16px',
        flexWrap: 'wrap',
      }}>

        {/* Logo + copyright */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span
            onClick={scrollToTop}
            style={{
              fontFamily: 'var(--font-display, Syne), sans-serif',
              fontSize: '1.1rem',
              fontWeight: 800,
              color: 'var(--accent)',
              cursor: 'pointer',
              letterSpacing: '-0.02em',
            }}
          >
            KS.
          </span>
          <span style={{
            width: '1px',
            height: '14px',
            background: 'var(--border)',
            display: 'inline-block',
          }} />
          <span style={{
            fontSize: '11px',
            color: 'var(--text-muted)',
            fontFamily: '"Courier New", monospace',
          }}>
            © 2026 Kiran Shams
          </span>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredLink(link.label)}
              onMouseLeave={() => setHoveredLink(null)}
              style={{
                fontSize: '11px',
                color: hoveredLink === link.label ? 'var(--accent)' : 'var(--text-muted)',
                textDecoration: 'none',
                fontFamily: '"Courier New", monospace',
                letterSpacing: '0.04em',
                transition: 'color 0.2s',
              }}
            >
              {link.label}
            </a>
          ))}

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border)',
              borderRadius: '6px',
              width: '30px',
              height: '30px',
              cursor: 'pointer',
              color: 'var(--text-muted)',
              fontSize: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'border-color 0.2s, color 0.2s',
              marginLeft: '4px',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--accent)'
              e.currentTarget.style.color = 'var(--accent)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.color = 'var(--text-muted)'
            }}
            title="Back to top"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  )
}