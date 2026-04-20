'use client'
import { useState, useEffect } from 'react'

// desktopHide: true = only shows in mobile drawer, not desktop nav
const navLinks = [
  { label: 'Home',       href: '#home',       desktopHide: false },
  { label: 'About',      href: '#about',      desktopHide: false },
  { label: 'Skills',     href: '#skills',     desktopHide: false },
  { label: 'Experience', href: '#experience', desktopHide: false },
  { label: 'Projects',   href: '#projects',   desktopHide: false },
  { label: 'Education',  href: '#education',  desktopHide: false },
  { label: 'Services',   href: '#services',   desktopHide: false },
  { label: 'Blog',       href: '#blog',       desktopHide: false },
  { label: 'Contact',    href: '#contact',    desktopHide: false },
]

export default function Navbar() {
  const [theme, setTheme]           = useState(null)
  const [scrolled, setScrolled]     = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  // Detect system theme preference on mount
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const systemTheme = prefersDark ? 'dark' : 'light'
    setTheme(systemTheme)
    document.documentElement.setAttribute('data-theme', systemTheme)

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e) => {
      const newTheme = e.matches ? 'dark' : 'light'
      setTheme(newTheme)
      document.documentElement.setAttribute('data-theme', newTheme)
    }
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!drawerOpen) return
    const handler = (e) => {
      if (
        !e.target.closest('#side-drawer') &&
        !e.target.closest('#hamburger-btn')
      ) setDrawerOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [drawerOpen])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
  }

  return (
    <>
      {/* ── TOP NAVBAR ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: '64px', padding: '0 2rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(15,17,23,0.92)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        transition: 'all 0.3s ease',
      }}>

        {/* Logo */}
        <a href="#home" style={{
          fontFamily: 'var(--font-display, Syne), sans-serif',
          fontSize: '1.4rem', fontWeight: 800,
          color: 'var(--accent)', textDecoration: 'none',
          letterSpacing: '-0.02em', flexShrink: 0,
        }}>
          KS<span style={{ color: 'var(--text)', opacity: 0.25 }}>.</span>
        </a>

        {/* Desktop links — only shows non-hidden links */}
        <ul id="desktop-nav" style={{
          display: 'flex', gap: '1.2rem',
          listStyle: 'none', margin: 0, padding: 0, alignItems: 'center',
        }}>
          {navLinks.filter(l => !l.desktopHide).map(link => (
            <li key={link.label}>
              <a href={link.href} style={{
                color: 'var(--text-muted)', textDecoration: 'none',
                fontSize: '0.82rem', fontWeight: 500,
                letterSpacing: '0.03em', transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>

          {/* Theme toggle — desktop only */}
          <button id="theme-btn-desktop" onClick={toggleTheme} style={{
            background: 'rgba(15,17,23,0.6)', border: '1px solid rgba(110,231,183,0.2)',
            borderRadius: '50px', padding: '6px 14px', cursor: 'pointer',
            color: theme === 'light' ? '#6EE7B7' : 'var(--text)', fontSize: '13px',
            display: 'flex', alignItems: 'center', gap: '6px', transition: 'all 0.3s',
          }}
            onMouseEnter={e => {
              if (theme === 'light') {
                e.currentTarget.style.boxShadow = '0 0 12px rgba(110,231,183,0.6)'
                e.currentTarget.style.borderColor = 'rgba(110,231,183,0.5)'
              }
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.borderColor = 'rgba(110,231,183,0.2)'
            }}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
            <span style={{ color: theme === 'light' ? '#6EE7B7' : 'var(--text-muted)', fontSize: '12px' }}>
              {theme === 'dark' ? 'Light' : 'Dark'}
            </span>
          </button>

          {/* Hire Me — always visible */}
          <a href="#contact" style={{
            background: 'var(--accent)', color: 'var(--bg)',
            padding: '8px 18px', borderRadius: '6px',
            textDecoration: 'none', fontSize: '13px', fontWeight: 700,
            whiteSpace: 'nowrap', transition: 'opacity 0.2s',
          }}
            onMouseEnter={e => e.target.style.opacity = '0.85'}
            onMouseLeave={e => e.target.style.opacity = '1'}
          >
            Hire Me
          </a>

          {/* Hamburger — mobile only */}
          <button id="hamburger-btn" onClick={() => setDrawerOpen(v => !v)} style={{
            display: 'none',
            background: 'rgba(15,17,23,0.6)', border: '1px solid rgba(110,231,183,0.2)',
            borderRadius: '6px', width: '38px', height: '38px',
            cursor: 'pointer', color: theme === 'light' ? '#6EE7B7' : 'var(--text)', fontSize: '1.1rem',
            alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.3s',
          }}
            onMouseEnter={e => {
              if (theme === 'light') {
                e.currentTarget.style.boxShadow = '0 0 12px rgba(110,231,183,0.6)'
                e.currentTarget.style.borderColor = 'rgba(110,231,183,0.5)'
              }
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.borderColor = 'rgba(110,231,183,0.2)'
            }}
          >
            {drawerOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* ── BACKDROP ── */}
      <div onClick={() => setDrawerOpen(false)} style={{
        position: 'fixed', inset: 0, zIndex: 150,
        background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(3px)',
        opacity: drawerOpen ? 1 : 0,
        pointerEvents: drawerOpen ? 'all' : 'none',
        transition: 'opacity 0.3s ease',
      }} />

      {/* ── SIDE DRAWER (mobile) ── */}
      <aside id="side-drawer" style={{
        position: 'fixed', top: 0, right: 0, bottom: 0,
        width: '270px', zIndex: 200,
        background: 'var(--bg-surface)',
        borderLeft: '1px solid var(--border)',
        display: 'flex', flexDirection: 'column',
        padding: '1.5rem',
        transform: drawerOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
        boxShadow: drawerOpen ? '-24px 0 60px rgba(0,0,0,0.5)' : 'none',
      }}>

        {/* Drawer header */}
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', marginBottom: '2rem',
        }}>
          <span style={{
            fontFamily: 'var(--font-display, Syne), sans-serif',
            fontWeight: 800, fontSize: '1.3rem', color: 'var(--accent)',
          }}>KS.</span>
          <button onClick={() => setDrawerOpen(false)} style={{
            background: 'var(--bg-surface-2)', border: '1px solid var(--border)',
            borderRadius: '6px', width: '32px', height: '32px',
            cursor: 'pointer', color: 'var(--text)', fontSize: '1rem',
          }}>✕</button>
        </div>

        {/* All links in drawer */}
        <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}
              onClick={() => setDrawerOpen(false)}
              style={{
                color: 'var(--text-muted)', textDecoration: 'none',
                fontSize: '0.95rem', fontWeight: 500,
                padding: '0.7rem 1rem', borderRadius: '8px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                transition: 'background 0.15s, color 0.15s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--bg-surface-2)'
                e.currentTarget.style.color = 'var(--accent)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = 'var(--text-muted)'
              }}
            >
              <span>{link.label}</span>
              <span style={{ color: 'var(--accent)', opacity: 0.5, fontSize: '0.75rem' }}>→</span>
            </a>
          ))}
        </nav>

        {/* Theme toggle at drawer bottom */}
        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: '1.25rem', marginTop: '1rem',
        }}>
          <p style={{
            fontSize: '11px', color: 'var(--text-muted)', marginBottom: '0.6rem',
            textTransform: 'uppercase', letterSpacing: '0.1em',
          }}>Theme</p>
          <button onClick={toggleTheme} style={{
            width: '100%', background: 'var(--bg-surface-2)',
            border: '1px solid var(--border)', borderRadius: '8px',
            padding: '10px 14px', cursor: 'pointer', color: 'var(--text)',
            fontSize: '13px', display: 'flex', alignItems: 'center',
            justifyContent: 'space-between', transition: 'border-color 0.2s',
          }}>
            <span>{theme === 'dark' ? '☀️  Switch to Light' : '🌙  Switch to Dark'}</span>
            <span style={{
              background: 'var(--accent)', color: 'var(--bg)',
              fontSize: '10px', fontWeight: 800,
              padding: '2px 8px', borderRadius: '4px', letterSpacing: '0.05em',
            }}>
              {theme === 'dark' ? 'LIGHT' : 'DARK'}
            </span>
          </button>
        </div>
      </aside>

      {/* ── RESPONSIVE CSS ── */}
      <style>{`
        @media (max-width: 1024px) {
          #desktop-nav       { display: none !important; }
          #theme-btn-desktop { display: none !important; }
          #hamburger-btn     { display: flex !important; }
        }
      `}</style>
    </>
  )
}