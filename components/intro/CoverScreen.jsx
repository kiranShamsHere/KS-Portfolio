'use client'
import { useEffect, useState } from 'react'

export default function CoverScreen({ onComplete }) {
  const [lineHeight, setLineHeight]   = useState(0)    // top line grows down
  const [lineHeight2, setLineHeight2] = useState(0)    // bottom line grows down
  const [nameVisible, setNameVisible] = useState(false)
  const [subVisible, setSubVisible]   = useState(false)
  const [footerVisible, setFooterVisible] = useState(false)
  const [exiting, setExiting]         = useState(false)

  useEffect(() => {
    // Step 1 — top line draws down (0 → 40px)
    let h = 0
    const t1 = setInterval(() => {
      h += 2
      setLineHeight(h)
      if (h >= 40) { clearInterval(t1); step2() }
    }, 12)

    function step2() {
      // Step 2 — name fades in
      setNameVisible(true)
      setTimeout(step3, 600)
    }

    function step3() {
      // Step 3 — bottom line draws down
      let h2 = 0
      const t3 = setInterval(() => {
        h2 += 2
        setLineHeight2(h2)
        if (h2 >= 40) { clearInterval(t3); step4() }
      }, 12)
    }

    function step4() {
      // Step 4 — subtitle + footer appear
      setSubVisible(true)
      setTimeout(() => setFooterVisible(true), 300)
      setTimeout(step5, 1800)
    }

    function step5() {
      // Step 5 — exit: slide up
      setExiting(true)
      setTimeout(() => onComplete(), 800)
    }

    return () => clearInterval(t1)
  }, [])

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: '#0A0C10',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'transform 0.8s cubic-bezier(0.76, 0, 0.24, 1)',
      transform: exiting ? 'translateY(-100%)' : 'translateY(0)',
    }}>

      {/* Subtle scanline texture */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.01) 3px, rgba(255,255,255,0.01) 4px)',
      }} />

      {/* Center content */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 0,
      }}>

        {/* Top vertical line */}
        <div style={{
          width: '1px',
          height: `${lineHeight}px`,
          background: 'linear-gradient(180deg, transparent, #6EE7B7)',
          transition: 'height 0.05s linear',
        }} />

        {/* Name block */}
        <div style={{
          padding: '28px 0',
          textAlign: 'center',
          opacity: nameVisible ? 1 : 0,
          transform: nameVisible ? 'translateY(0)' : 'translateY(10px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}>
          <div style={{
            fontSize: 'clamp(1.6rem, 5vw, 3rem)',
            fontWeight: 300,
            color: '#F0F0F0',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-display, Syne), sans-serif',
            lineHeight: 1,
          }}>
            Kiran Shams
          </div>
        </div>

        {/* Bottom vertical line */}
        <div style={{
          width: '1px',
          height: `${lineHeight2}px`,
          background: 'linear-gradient(180deg, #818CF8, transparent)',
          transition: 'height 0.05s linear',
        }} />
      </div>

    </div>
  )
}