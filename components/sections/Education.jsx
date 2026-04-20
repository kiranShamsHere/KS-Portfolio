'use client'
import { useEffect, useState, useRef } from 'react'

const degrees = [
  {
    level: 'UNIVERSITY',
    degree: 'BS Computer Science',
    institution: 'Sindh Agriculture University',
    location: 'Tandojam, Sindh',
    period: 'Jan 2025 — Present',
    active: true,
    color: '#6EE7B7',
    size: 'large',
    // Decorative: abstract lines pattern
    pattern: 'university',
  },
  {
    level: 'COLLEGE',
    degree: 'Intermediate',
    institution: 'Govt. Girls Degree College',
    location: 'Hyderabad, Sindh',
    period: 'Completed',
    active: false,
    color: '#818CF8',
    size: 'small',
    pattern: 'college',
  },
  {
    level: 'SCHOOL',
    degree: 'Matriculation',
    institution: 'The Educatore School',
    location: 'Hyderabad, Sindh',
    period: 'Completed',
    active: false,
    color: '#9896A8',
    size: 'small',
    pattern: 'school',
  },
]

// SVG decorative patterns — abstract, no emojis
const PatternUniversity = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
    <circle cx="40" cy="40" r="35" stroke="#6EE7B730" strokeWidth="1"/>
    <circle cx="40" cy="40" r="24" stroke="#6EE7B750" strokeWidth="1"/>
    <circle cx="40" cy="40" r="12" stroke="#6EE7B770" strokeWidth="1.5"/>
    <circle cx="40" cy="40" r="4" fill="#6EE7B7"/>
    <line x1="40" y1="5" x2="40" y2="20" stroke="#6EE7B760" strokeWidth="1"/>
    <line x1="40" y1="60" x2="40" y2="75" stroke="#6EE7B760" strokeWidth="1"/>
    <line x1="5" y1="40" x2="20" y2="40" stroke="#6EE7B760" strokeWidth="1"/>
    <line x1="60" y1="40" x2="75" y2="40" stroke="#6EE7B760" strokeWidth="1"/>
  </svg>
)

const PatternCollege = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
    <rect x="8" y="8" width="44" height="44" rx="4" stroke="#818CF830" strokeWidth="1"/>
    <rect x="16" y="16" width="28" height="28" rx="3" stroke="#818CF850" strokeWidth="1"/>
    <rect x="24" y="24" width="12" height="12" rx="2" fill="#818CF830" stroke="#818CF870" strokeWidth="1.5"/>
    <circle cx="30" cy="30" r="3" fill="#818CF8"/>
  </svg>
)

const PatternSchool = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
    <polygon points="30,8 52,22 52,38 30,52 8,38 8,22" stroke="#9896A830" strokeWidth="1" fill="none"/>
    <polygon points="30,16 44,24 44,36 30,44 16,36 16,24" stroke="#9896A850" strokeWidth="1" fill="none"/>
    <circle cx="30" cy="30" r="5" fill="#9896A840" stroke="#9896A8" strokeWidth="1.5"/>
  </svg>
)

function EducationCard({ deg, index, inView }) {
  const [hovered, setHovered] = useState(false)
  const isLarge = deg.size === 'large'

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        background: 'var(--bg-surface)',
        border: `1px solid ${hovered ? deg.color : 'var(--border)'}`,
        borderRadius: '14px',
        padding: isLarge ? '28px' : '22px',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        transform: inView
          ? hovered ? 'translateY(-5px)' : 'translateY(0)'
          : 'translateY(30px)',
        opacity: inView ? 1 : 0,
        transitionDelay: `${index * 0.12}s`,
        boxShadow: hovered ? `0 16px 40px ${deg.color}18` : 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: isLarge ? '220px' : '180px',
      }}
    >
      {/* Top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '2px',
        background: `linear-gradient(90deg, ${deg.color}, transparent)`,
        opacity: hovered ? 1 : 0.4,
        transition: 'opacity 0.3s',
      }} />

      {/* Background pattern — top right corner */}
      <div style={{
        position: 'absolute',
        top: isLarge ? '20px' : '14px',
        right: isLarge ? '20px' : '14px',
        opacity: hovered ? 0.7 : 0.3,
        transition: 'opacity 0.3s',
      }}>
        {deg.pattern === 'university' && <PatternUniversity />}
        {deg.pattern === 'college' && <PatternCollege />}
        {deg.pattern === 'school' && <PatternSchool />}
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Level label */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          marginBottom: isLarge ? '20px' : '14px',
        }}>
          <span style={{
            fontSize: '9px',
            fontFamily: '"Courier New", monospace',
            letterSpacing: '0.12em',
            color: deg.color,
            fontWeight: 600,
          }}>
            {deg.level}
          </span>
          {deg.active && (
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '4px',
              background: `${deg.color}18`,
              border: `1px solid ${deg.color}40`,
              borderRadius: '20px',
              padding: '2px 8px',
            }}>
              <span style={{
                width: 5, height: 5, borderRadius: '50%',
                background: deg.color, display: 'inline-block',
                marginRight: '3px',
                animation: 'activeDot 2s infinite',
              }} />
              <span style={{ fontSize: '9px', color: deg.color, fontWeight: 600 }}>
                Enrolled
              </span>
            </span>
          )}
        </div>

        {/* Degree name */}
        <h3 style={{
          fontFamily: 'var(--font-display, Syne), sans-serif',
          fontSize: isLarge ? '1.4rem' : '1.1rem',
          fontWeight: 800,
          color: hovered ? 'var(--text)' : 'var(--text)',
          margin: '0 0 6px',
          letterSpacing: '-0.02em',
          lineHeight: 1.2,
          maxWidth: '70%',
        }}>
          {deg.degree}
        </h3>

        {/* Institution */}
        <div style={{
          fontSize: isLarge ? '13px' : '12px',
          color: deg.color,
          fontWeight: 600,
          marginBottom: '4px',
          transition: 'color 0.2s',
        }}>
          {deg.institution}
        </div>
      </div>

      {/* Bottom: location + period */}
      <div style={{
        position: 'relative', zIndex: 1,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginTop: '16px',
        paddingTop: '12px',
        borderTop: `1px solid ${hovered ? deg.color + '30' : 'var(--border)'}`,
        transition: 'border-color 0.3s',
      }}>
        <span style={{
          fontSize: '11px',
          color: 'var(--text-muted)',
        }}>
          {deg.location}
        </span>
        <span style={{
          fontSize: '10px',
          color: deg.active ? deg.color : 'var(--text-muted)',
          fontFamily: '"Courier New", monospace',
          letterSpacing: '0.04em',
        }}>
          {deg.period}
        </span>
      </div>
    </div>
  )
}

export default function Education() {
  const [inView, setInView] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="education" ref={sectionRef} style={{ padding: '5rem 2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Heading */}
        <div style={{
          marginBottom: '36px',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}>
          <h2 style={{
            fontFamily: 'var(--font-display, Syne), sans-serif',         
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: 900,
            color: 'var(--text)',
            margin: '0 0 6px',
            letterSpacing: '-0.04em',
          }}>
            Education
          </h2>
          <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: 0 }}>
            From school to university — building the foundation.
          </p>
        </div>

        {/* Cards grid — large + 2 small */}
        <div className="edu-grid">
          {degrees.map((deg, i) => (
            <EducationCard
              key={deg.degree}
              deg={deg}
              index={i}
              inView={inView}
            />
          ))}
        </div>

      </div>

      <style>{`
        @keyframes activeDot {
          0%, 100% { opacity: 1; box-shadow: 0 0 5px currentColor; }
          50% { opacity: 0.5; box-shadow: 0 0 10px currentColor; }
        }
        .edu-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 14px;
        }
        @media (max-width: 768px) {
          .edu-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}