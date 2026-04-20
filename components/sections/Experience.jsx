'use client'
import { useEffect, useState, useRef } from 'react'

const experiences = [
  {
    company: 'AgriClima AI Consultant',
    period: 'Dec 2025 — Present',
    role: 'Founder & CEO',
    location: 'Hyderabad, Sindh · Self-employed',
    desc: 'Founded AgriClima AI to bring intelligent crop advisory and climate insights to farmers in Sindh. Using AI & data science to transform agriculture and strengthen climate resilience.',
    active: true,
    color: 'var(--accent)',
    colorHex: '#6EE7B7',
    tags: ['AgriTech', 'Climate AI', 'Founding'],
  },
  {
    company: 'Hoopo Canada',
    period: 'Aug 2025 — Present',
    role: 'CNV Ambassador & Tech Innovator',
    location: 'Canada · Remote',
    desc: 'Building digital tools for Carbon Neutral Villages and sustainability systems. SMART computer systems supporting AI-driven decision making for rural communities.',
    active: true,
    color: 'var(--accent-2)',
    colorHex: '#818CF8',
    tags: ['Climate Tech', 'CNV', 'Remote'],
  },
  {
    company: 'CodePro Software & Web Services',
    period: 'Jun 2024 — Jul 2024',
    role: 'Frontend Developer Intern',
    location: 'Hyderabad · On-site',
    desc: 'Worked on responsive web interfaces using HTML, CSS, Bootstrap and JavaScript. Collaborated with senior developers on real client projects.',
    active: false,
    color: 'var(--text-muted)',
    colorHex: '#9896A8',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    company: 'TIME — Institute of Management & Entrepreneurship',
    period: 'Feb 2024 — May 2024',
    role: 'Web Developer',
    location: 'Hyderabad · On-site',
    desc: 'Built digital projects and student-facing web solutions. Web development and tech demo lead for institutional and entrepreneurship initiatives.',
    active: false,
    color: 'var(--text-muted)',
    colorHex: '#9896A8',
    tags: ['Web Dev', 'Education'],
  },
]

function ExperienceCard({ exp, index, inView }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div style={{
      display: 'flex',
      gap: '0',
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(24px)',
      transition: `opacity 0.7s ease ${index * 0.15}s, transform 0.7s ease ${index * 0.15}s`,
    }}>

      {/* Timeline column */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: '24px',
        flexShrink: 0,
      }}>
        {/* Dot */}
        <div style={{
          width: '14px',
          height: '14px',
          borderRadius: '50%',
          background: exp.active ? exp.colorHex : 'var(--bg-surface)',
          border: `2px solid ${exp.colorHex}`,
          boxShadow: exp.active ? `0 0 10px ${exp.colorHex}80` : 'none',
          flexShrink: 0,
          marginTop: '4px',
          transition: 'box-shadow 0.3s',
          animation: exp.active ? 'dotPulse 2s infinite' : 'none',
          zIndex: 1,
        }} />
        {/* Vertical line */}
        {index < experiences.length - 1 && (
          <div style={{
            width: '1px',
            flex: 1,
            background: `linear-gradient(180deg, ${exp.colorHex}60, var(--border))`,
            marginTop: '8px',
            minHeight: '32px',
          }} />
        )}
      </div>

      {/* Card */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          flex: 1,
          background: hovered ? 'var(--bg-surface)' : 'var(--bg-surface)',
          border: `1px solid ${hovered ? exp.colorHex + '60' : 'var(--border)'}`,
          borderRadius: '10px',
          padding: '20px 24px',
          marginBottom: index < experiences.length - 1 ? '16px' : '0',
          transition: 'border-color 0.2s, transform 0.2s',
          transform: hovered ? 'translateX(4px)' : 'translateX(0)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Top accent line on hover */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '2px',
          background: `linear-gradient(90deg, ${exp.colorHex}, transparent)`,
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s',
        }} />

        {/* Header row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '6px',
          flexWrap: 'wrap',
          gap: '8px',
        }}>
          <h3 style={{
            fontSize: '15px',
            fontWeight: 700,
            color: hovered ? exp.colorHex : 'var(--text)',
            margin: 0,
            transition: 'color 0.2s',
            lineHeight: 1.3,
          }}>
            {exp.company}
          </h3>
          <span style={{
            fontSize: '11px',
            color: 'var(--text-muted)',
            fontFamily: '"Courier New", monospace',
            flexShrink: 0,
          }}>
            {exp.period}
          </span>
        </div>

        {/* Role */}
        <div style={{
          fontSize: '13px',
          fontWeight: 600,
          color: exp.colorHex,
          marginBottom: '4px',
        }}>
          {exp.role}
        </div>

        {/* Location */}
        <div style={{
          fontSize: '11px',
          color: 'var(--text-muted)',
          marginBottom: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}>
          <span style={{
            display: 'inline-block',
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            background: 'var(--text-muted)',
          }} />
          {exp.location}
        </div>

        {/* Description */}
        <p style={{
          fontSize: '12px',
          color: 'var(--text-muted)',
          lineHeight: 1.8,
          margin: '0 0 14px',
        }}>
          {exp.desc}
        </p>

        {/* Bottom row: tags + active badge */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '8px',
        }}>
          <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
            {exp.tags.map(tag => (
              <span key={tag} style={{
                fontSize: '9px',
                background: 'var(--bg-surface-2)',
                border: '1px solid var(--border)',
                color: 'var(--text-muted)',
                padding: '2px 8px',
                borderRadius: '3px',
                fontFamily: '"Courier New", monospace',
              }}>
                {tag}
              </span>
            ))}
          </div>
          {exp.active && (
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              background: `${exp.colorHex}15`,
              border: `1px solid ${exp.colorHex}40`,
              borderRadius: '20px',
              padding: '3px 12px',
            }}>
              <span style={{
                width: 5, height: 5,
                borderRadius: '50%',
                background: exp.colorHex,
                display: 'inline-block',
                animation: 'activePulse 2s infinite',
              }} />
              <span style={{
                fontSize: '9px',
                color: exp.colorHex,
                fontWeight: 700,
                letterSpacing: '0.05em',
              }}>
                Active
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  const [inView, setInView] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={sectionRef} style={{ padding: '5rem 2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '48px',
          flexWrap: 'wrap',
          gap: '16px',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}>
          <div>
            <h2 style={{
              fontFamily: 'var(--font-display, Syne), sans-serif',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 800,
              color: 'var(--text)',
              margin: '0 0 6px',
              letterSpacing: '-0.04em',
            }}>
              Experience
            </h2>
            <p style={{
              fontSize: '12px',
              color: 'var(--text-muted)',
              margin: 0,
              background: 'var(--bg-surface-2)',
              border: '1px solid var(--border)',
              display: 'inline-block',
              padding: '4px 12px',
              borderRadius: '6px',
              // fontStyle: 'italic',

            }}>
              From intern to founder in under 2 years.
            </p>
          </div>
          <a
            href="https://linkedin.com/in/kiranshams"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '11px',
              color: 'var(--accent)',
              textDecoration: 'none',
              fontFamily: '"Courier New", monospace',
              letterSpacing: '0.05em',
              border: '1px solid var(--border)',
              padding: '6px 14px',
              borderRadius: '6px',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
          >
            LinkedIn Profile →
          </a>
        </div>

        {/* Timeline */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {experiences.map((exp, i) => (
            <ExperienceCard
              key={exp.company}
              exp={exp}
              index={i}
              inView={inView}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes activePulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 4px currentColor; }
          50% { opacity: 0.6; box-shadow: 0 0 10px currentColor; }
        }
        @keyframes dotPulse {
          0%, 100% { box-shadow: 0 0 10px var(--c, #6EE7B7); }
          50% { box-shadow: 0 0 20px var(--c, #6EE7B7); }
        }
        @media (max-width: 640px) {
          #experience h2 {
            font-size: 2rem !important;
          }
          #experience div[style*="margin-right: 24px"] {
            margin-right: 16px !important;
          }
        }
      `}</style>
    </section>
  )
}