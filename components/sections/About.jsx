'use client'
import { useEffect, useState, useRef } from 'react'

const phases = [
  {
    tag: 'INTRO',
    color: '#9896A8',
    heading: 'Two roles. One mission.',
    body: "I'm Kiran Shams — a Full Stack Developer and Climate Tech Founder from Hyderabad, Sindh. My work lives at the intersection of code and climate, where technology becomes a tool for real-world impact.",
    accentBar: 'linear-gradient(90deg,#6EE7B7,#818CF8)',
    lineColor: '#6EE7B7',
    duration: 3500,
  },
  {
    tag: 'TECH',
    color: '#6EE7B7',
    heading: 'I build for the web.',
    body: 'Full Stack Developer crafting responsive, modern web applications using HTML, CSS, JavaScript, PHP, Python & Bootstrap. Currently leveling up with Next.js, React, and AI automation tools — building smarter systems with n8n, LangChain & agentic workflows.',
    accentBar: 'linear-gradient(90deg,#6EE7B7,transparent)',
    lineColor: '#6EE7B7',
    duration: 4500,
  },
  {
    tag: 'CLIMATE',
    color: '#818CF8',
    heading: 'I build for the planet.',
    body: 'Founded AgriClima AI Consultant — bringing AI-driven climate intelligence and crop advisory to farmers in Sindh. Contributing as CNV Ambassador at Hoopo Canada, developing digital tools for Carbon Neutral Villages and sustainable agriculture at scale.',
    accentBar: 'linear-gradient(90deg,#818CF8,transparent)',
    lineColor: '#818CF8',
    duration: 4500,
  },
]

export default function About() {
  const [phaseIndex, setPhaseIndex] = useState(0)
  const [visible, setVisible] = useState(false)
  const [textVisible, setTextVisible] = useState(true)
  const [inView, setInView] = useState(false)
  const sectionRef = useRef(null)
  const timerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (inView) setTimeout(() => setVisible(true), 100)
  }, [inView])

  useEffect(() => {
    if (!inView) return
    timerRef.current = setTimeout(() => {
      setTextVisible(false)
      setTimeout(() => {
        setPhaseIndex(i => (i + 1) % phases.length)
        setTextVisible(true)
      }, 400)
    }, phases[phaseIndex].duration)
    return () => clearTimeout(timerRef.current)
  }, [phaseIndex, inView])

  const phase = phases[phaseIndex]

  return (
    <section id="about" ref={sectionRef} style={{
      padding: '4rem 2rem',
      position: 'relative',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Section label */}
        <div style={{
          fontSize: '11px', color: 'var(--text-muted)',
          fontFamily: '"Courier New", monospace',
          letterSpacing: '0.15em', textTransform: 'uppercase',
          paddingTop: '0.6rem',
          marginBottom: '1.3rem',
          display: 'flex', alignItems: 'center', gap: '12px',
          opacity: visible ? 1 : 0, transition: 'opacity 0.6s ease',
        }}>
          <span style={{ color: 'var(--accent)' }}>02</span>
          <span style={{ width: '40px', height: '1px', background: 'var(--border)' }} />
          About Me
        </div>

        {/* Main grid */}
        <div className="about-grid" style={{
          border: '1px solid var(--border)',
          borderRadius: '12px',
          overflow: 'hidden',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}>

          {/* ── LEFT: animated content ── */}
          <div style={{
            padding: '36px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            background: 'var(--bg-surface)',
          }}>
            <div>
              {/* Top accent bar */}
              <div style={{
                width: '36px', height: '2px',
                background: phase.accentBar,
                marginBottom: '18px',
                transition: 'background 0.6s ease',
              }} />

              {/* ABOUT. */}
              <h2 style={{
                fontFamily: 'var(--font-body, DM Sans), sans-serif',
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                fontWeight: 800,
                color: 'var(--text)',
                margin: '0 0 4px',
                letterSpacing: '-0.04em',
                lineHeight: 1,
              }}>
                ABOUT.
              </h2>
              <div style={{
                width: '70px', height: '2px',
                background: phase.accentBar,
                marginBottom: '28px',
                transition: 'background 0.6s ease',
              }} />

              {/* Animated text */}
              <div style={{
                minHeight: '160px',
                opacity: textVisible ? 1 : 0,
                transform: textVisible ? 'translateY(0)' : 'translateY(8px)',
                transition: 'opacity 0.4s ease, transform 0.4s ease',
              }}>
                <div style={{
                  fontSize: '9px', color: phase.color,
                  fontFamily: '"Courier New", monospace',
                  letterSpacing: '0.14em', marginBottom: '10px',
                }}>
                  [ {phase.tag} ]
                </div>
                <p style={{
                  fontSize: '14px', fontWeight: 700,
                  color: 'var(--text)',
                  margin: '0 0 12px', lineHeight: 1.4,
                }}>
                  {phase.heading}
                </p>
                <p style={{
                  fontSize: '13px', color: 'var(--text-muted)',
                  lineHeight: 1.85, margin: 0,
                }}>
                  {phase.body}
                </p>
              </div>

              {/* Phase dots */}
              <div style={{
                display: 'flex', gap: '6px',
                marginTop: '24px', alignItems: 'center',
              }}>
                {phases.map((p, i) => (
                  <button key={i} onClick={() => {
                    clearTimeout(timerRef.current)
                    setTextVisible(false)
                    setTimeout(() => { setPhaseIndex(i); setTextVisible(true) }, 300)
                  }} style={{
                    width: i === phaseIndex ? '20px' : '6px',
                    height: '6px', borderRadius: '3px',
                    background: i === phaseIndex ? phase.lineColor : 'var(--border)',
                    border: 'none', cursor: 'pointer', padding: 0,
                    transition: 'all 0.3s ease',
                  }} />
                ))}
                <span style={{
                  fontSize: '9px', color: 'var(--text-muted)',
                  fontFamily: '"Courier New", monospace',
                  marginLeft: '6px', letterSpacing: '0.1em',
                }}>
                  {phaseIndex + 1}/{phases.length}
                </span>
              </div>
            </div>

            {/* Tags */}
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '32px' }}>
              {['Web Dev', 'AI Automation', 'Climate Tech', 'Founder'].map((tag, i) => (
                <span key={tag} style={{
                  border: `1px solid ${i % 2 === 0 ? 'var(--accent)' : 'var(--accent-2)'}`,
                  color: i % 2 === 0 ? 'var(--accent)' : 'var(--accent-2)',
                  fontSize: '10px', padding: '3px 10px', borderRadius: '3px',
                  fontFamily: '"Courier New", monospace',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* ── RIGHT: full height photo ── */}
          <div className="about-photo" style={{
            position: 'relative',
            minHeight: '400px',
            overflow: 'hidden',
          }}>
            {/* Full cover image */}
            <img
              src="/images/kiran.jpg"
              alt="Kiran Shams"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
              }}
            />

            {/* Gradient overlay at bottom */}
            <div style={{
              position: 'absolute',
              bottom: 0, left: 0, right: 0,
              height: '50%',
              background: 'linear-gradient(0deg, rgba(10,12,16,0.85) 0%, transparent 100%)',
              pointerEvents: 'none',
            }} />

            {/* Corner accent — Style 5 top right */}
            <div style={{
              position: 'absolute', top: 0, right: 0,
              width: 0, height: 0, borderStyle: 'solid',
              borderWidth: '0 52px 52px 0',
              borderColor: 'transparent var(--accent) transparent transparent',
              zIndex: 2,
            }} />

            {/* Bottom left accent line */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0,
              width: '52px', height: '3px',
              background: 'var(--accent-2)', zIndex: 2,
            }} />

            {/* Name + available badge over photo */}
            <div style={{
              position: 'absolute', bottom: '20px', left: '20px',
              zIndex: 3,
            }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '5px',
                background: 'rgba(10,12,16,0.7)',
                border: '1px solid rgba(74,222,128,0.4)',
                backdropFilter: 'blur(8px)',
                borderRadius: '20px',
                padding: '4px 12px',
                fontSize: '10px', color: '#4ADE80',
              }}>
                <span style={{
                  width: 6, height: 6, borderRadius: '50%',
                  background: '#4ADE80', display: 'inline-block',
                  animation: 'pulse 2s infinite',
                }} />
                Kiran Shams
              </div>
            </div>

            {/* Fallback if no photo */}
            <div style={{
              position: 'absolute', inset: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'var(--bg-surface-2)',
              fontSize: '48px', fontWeight: 800,
              color: 'var(--accent)',
              fontFamily: 'var(--font-display, Syne), sans-serif',
              zIndex: -1,
            }}>
              KS
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 6px #4ADE80; }
          50%       { opacity: 0.5; box-shadow: 0 0 14px #4ADE80; }
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
        }
        .about-photo {
          border-left: 1px solid var(--border);
        }
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
          .about-photo {
            border-left: none !important;
            border-top: 1px solid var(--border) !important;
            min-height: 300px !important;
          }
        }
      `}</style>
    </section>
  )
}