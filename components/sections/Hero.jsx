'use client'
import { useEffect, useState } from 'react'

const stack = ['HTML', 'CSS', 'JS', 'PHP', 'Python', 'Bootstrap', 'MySQL', 'React', 'Next.js', 'Git']

const carouselItems = [
  { label: 'Role', value: 'Founder & CEO', sub: 'AgriClima AI Consultant', color: '#6EE7B7' },
  { label: 'Mission', value: 'CNV Ambassador', sub: 'Hoopo Canada', color: '#818CF8' },
  { label: 'Education', value: 'BSCS Student', sub: 'SAU Tandojam', color: '#6EE7B7' },
  { label: 'Status', value: '● Available', sub: 'Open to hire', color: '#4ADE80' },
  { label: 'Currently Learning', value: 'AI Automation', sub: 'n8n · LangChain · Agents', color: '#818CF8' },
  { label: 'Goal', value: 'AI Engineer', sub: 'Building smart systems', color: '#6EE7B7' },
  { label: 'Focus', value: 'Climate Tech', sub: 'AgriClima · Hoopo Canada', color: '#818CF8' },
  { label: 'Stack', value: 'Full Stack', sub: 'HTML → Next.js → Python', color: '#6EE7B7' },
  { label: 'Internship', value: 'CodePro', sub: 'Frontend Developer', color: '#818CF8' },
  { label: 'Certifications', value: 'Google AI', sub: 'Essentials · Prompting', color: '#6EE7B7' },
  { label: 'Based In', value: 'Hyderabad', sub: 'Sindh, Pakistan 🇵🇰', color: '#818CF8' },
  { label: 'Open To', value: 'Remote Work', sub: 'Worldwide opportunities', color: '#4ADE80' },
]

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setVisible(true), 100)
  }, [])

  // Duplicate for seamless loop
  const items = [...carouselItems, ...carouselItems]

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Subtle background grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(var(--border) 1px, transparent 1px),
          linear-gradient(90deg, var(--border) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        opacity: 0.18,
      }} />

      {/* Glow */}
      <div style={{
        position: 'absolute', top: '30%', left: '50%',
        transform: 'translateX(-50%)',
        width: '600px', height: '400px', pointerEvents: 'none',
        background: 'radial-gradient(ellipse, rgba(110,231,183,0.05) 0%, transparent 70%)',
      }} />

      {/* ── MAIN CONTENT ── */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '80px 2rem 2rem',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}>

        {/* Available badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border)',
          borderRadius: '50px',
          padding: '5px 16px',
          marginTop: '-65px',
          marginBottom: '1.3rem',
          fontSize: '12px',
          color: 'var(--text-muted)',
          fontFamily: 'var(--font-body, DM Sans), sans-serif',
        }}>
          <span style={{
            width: 7, height: 7, borderRadius: '50%',
            background: '#4ADE80', display: 'inline-block',
            boxShadow: '0 0 6px #4ADE80',
            animation: 'pulse 2s infinite',
          }} />
          Available for hire · Open to work
        </div>

        {/* Name + location — small, monospace */}
        <div style={{
          fontSize: '11px',
          color: 'var(--text-muted)',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: '1.2rem',
          fontFamily: '"Courier New", monospace',
          display: 'flex', alignItems: 'center', gap: '10px',
          flexWrap: 'wrap', justifyContent: 'center',
        }}>
          <span>Kiran Shams</span>
          <span style={{ opacity: 0.3 }}>·</span>
          <span>Hyderabad, Pakistan</span>
        </div>

        {/* Main headline — DM Sans, not too heavy */}
        <h1 style={{
          fontFamily: 'var(--font-body, DM Sans), sans-serif',
          fontSize: 'clamp(1.9rem, 4vw, 3.2rem)',
          fontWeight: 900,
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
          marginBottom: '1rem',
          color: 'var(--text)',
          maxWidth: '680px',
        }}>
          I Build Things for the{' '}
          <span style={{ color: 'var(--accent)', fontWeight: 700 }}>Web</span>
          {' '}&amp; the{' '}
          <span style={{ color: 'var(--accent-2)', fontWeight: 700 }}>Future.</span>
        </h1>

        {/* Tagline */}
        <p style={{
          fontFamily: 'var(--font-body, DM Sans), sans-serif',
          fontSize: '0.95rem',
          fontWeight: 400,
          color: 'var(--text-muted)',
          maxWidth: '500px',
          lineHeight: 1.8,
          marginTop: '-0.2rem',
          marginBottom: '1.5rem',
        }}>
          Full Stack Developer building responsive web apps, AI-powered tools,
          and climate-tech solutions — with code that actually ships.
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex', gap: '10px', flexWrap: 'wrap',
          justifyContent: 'center', marginBottom: '1rem',
        }}>
          <a href="#projects" style={{
            background: 'var(--accent)', color: 'var(--bg)',
            padding: '10px 24px', borderRadius: '7px',
            textDecoration: 'none', fontWeight: 600, fontSize: '13px',
            fontFamily: 'var(--font-body, DM Sans), sans-serif',
            display: 'inline-block', transition: 'opacity 0.2s, transform 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            See My Work →
          </a>
          <a href="#contact" style={{
            background: 'transparent', color: 'var(--text)',
            padding: '10px 24px', borderRadius: '7px',
            textDecoration: 'none', fontWeight: 600, fontSize: '13px',
            fontFamily: 'var(--font-body, DM Sans), sans-serif',
            border: '1px solid var(--border)', display: 'inline-block',
            transition: 'border-color 0.2s, transform 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Hire Me
          </a>
          <a href="/resume.pdf" target="_blank" style={{
            background: 'transparent', color: 'var(--text-muted)',
            padding: '10px 24px', borderRadius: '7px',
            textDecoration: 'none', fontWeight: 600, fontSize: '13px',
            fontFamily: 'var(--font-body, DM Sans), sans-serif',
            border: '1px solid var(--border)', display: 'inline-block',
            transition: 'color 0.2s, border-color 0.2s, transform 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent-2)'; e.currentTarget.style.borderColor = 'var(--accent-2)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Download CV ↓
          </a>
        </div>
      </div>

      {/* ── INFINITE CAROUSEL ── */}
      <div style={{
        borderTop: '1px solid var(--border)',
        overflow: 'hidden',
        position: 'relative',
        opacity: visible ? 1 : 0,
        transition: 'opacity 1s ease 0.5s',
      }}>
        {/* Fade edges */}
        <div style={{
          position: 'absolute', top: 0, left: 0, bottom: 0,
          width: '80px', zIndex: 2, pointerEvents: 'none',
          background: 'linear-gradient(90deg, var(--bg), transparent)',
        }} />
        <div style={{
          position: 'absolute', top: 0, right: 0, bottom: 0,
          width: '80px', zIndex: 2, pointerEvents: 'none',
          background: 'linear-gradient(270deg, var(--bg), transparent)',
        }} />

        {/* Scrolling track */}
        <div style={{
          display: 'flex',
          animation: 'scroll 35s linear infinite',
          width: 'max-content',
        }}>
          {items.map((item, i) => (
            <div key={i} style={{
              flexShrink: 0,
              padding: '1rem 1.5rem',
              borderRight: '1px solid var(--border)',
              textAlign: 'center',
              minWidth: '160px',
              transition: 'background 0.2s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--bg-surface)'
                e.currentTarget.parentElement.style.animationPlayState = 'paused'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.parentElement.style.animationPlayState = 'running'
              }}
            >
              <div style={{
                fontSize: '10px', color: 'var(--text-muted)',
                textTransform: 'uppercase', letterSpacing: '0.1em',
                marginBottom: '5px',
                fontFamily: 'var(--font-body, DM Sans), sans-serif',
              }}>
                {item.label}
              </div>
              <div style={{
                fontSize: '13px', fontWeight: 600,
                color: item.color, marginBottom: '3px',
                fontFamily: 'var(--font-body, DM Sans), sans-serif',
              }}>
                {item.value}
              </div>
              <div style={{
                fontSize: '11px', color: 'var(--text-muted)',
                fontFamily: 'var(--font-body, DM Sans), sans-serif',
              }}>
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 6px #4ADE80; }
          50%       { opacity: 0.5; box-shadow: 0 0 14px #4ADE80; }
        }
        @keyframes scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}