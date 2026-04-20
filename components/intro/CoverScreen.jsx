'use client'
import { useEffect, useState } from 'react'

const lines = [
  { text: '> Initializing Kiran Shams...', delay: 0 },
  { text: '> Status: Full Stack Developer', delay: 600 },
  { text: '> Role: Founder & CEO @ AgriClima AI', delay: 1200 },
  { text: '> Mission: CNV Ambassador @ Hoopo Canada', delay: 1800 },
  { text: '> Stack: HTML · CSS · JS · PHP · Python', delay: 2400 },
  { text: '> Loading portfolio', delay: 3000 },
]

const progressItems = [
  { label: 'Web Development', percent: 85, delay: 3200 },
  { label: 'AI Consulting', percent: 78, delay: 3500 },
  { label: 'Climate Tech', percent: 90, delay: 3800 },
]

export default function CoverScreen({ onComplete }) {
  const [visibleLines, setVisibleLines] = useState([])
  const [progressValues, setProgressValues] = useState([0, 0, 0])
  const [showStatus, setShowStatus] = useState(false)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    // Show lines one by one
    lines.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines(prev => [...prev, i])
      }, line.delay)
    })

    // Animate progress bars
    progressItems.forEach((item, i) => {
      setTimeout(() => {
        let current = 0
        const interval = setInterval(() => {
          current += 2
          setProgressValues(prev => {
            const next = [...prev]
            next[i] = Math.min(current, item.percent)
            return next
          })
          if (current >= item.percent) clearInterval(interval)
        }, 18)
      }, item.delay)
    })

    // Show ready status
    setTimeout(() => setShowStatus(true), 4600)

    // Start exit animation
    setTimeout(() => setExiting(true), 5400)

    // Call onComplete after exit
    setTimeout(() => {
     if (onComplete) onComplete()
    }, 6200)
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: '#0A0C10',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
        opacity: exiting ? 0 : 1,
        transform: exiting ? 'scale(1.03)' : 'scale(1)',
        pointerEvents: exiting ? 'none' : 'all',
      }}
    >
      {/* Scanline overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)',
      }} />

      {/* Terminal window */}
      <div style={{
        width: '100%', maxWidth: '640px', margin: '0 20px',
        border: '1px solid #2a2d3e',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 0 60px rgba(110,231,183,0.08)',
        fontFamily: '"Courier New", Courier, monospace',
      }}>
        {/* Title bar */}
        <div style={{
          background: '#1a1d27',
          padding: '10px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          borderBottom: '1px solid #2a2d3e',
        }}>
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5F57', display: 'inline-block' }} />
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#FEBC2E', display: 'inline-block' }} />
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#28C840', display: 'inline-block' }} />
          <span style={{ marginLeft: 8, color: '#9896A8', fontSize: '13px' }}>kiran@portfolio ~ bash</span>
        </div>

        {/* Terminal body */}
        <div style={{
          background: '#0D0F18',
          padding: '24px',
          minHeight: '320px',
        }}>
          {lines.map((line, i) => (
            <div
              key={i}
              style={{
                color: i === 0 ? '#6EE7B7' : i === 5 ? '#818CF8' : '#E8E6F0',
                fontSize: '14px',
                lineHeight: '1.8',
                opacity: visibleLines.includes(i) ? 1 : 0,
                transition: 'opacity 0.3s ease',
              }}
            >
              {line.text}
              {i === 5 && visibleLines.includes(i) && (
                <span style={{ color: '#6EE7B7' }}> .</span>
              )}
            </div>
          ))}

          {/* Progress bars */}
          {progressItems.map((item, i) => (
            <div
              key={i}
              style={{
                marginTop: i === 0 ? '12px' : '6px',
                opacity: progressValues[i] > 0 ? 1 : 0,
                transition: 'opacity 0.3s',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#9896A8', marginBottom: 4 }}>
                <span style={{ color: '#818CF8' }}>{'>'} {item.label}</span>
                <span style={{ color: '#6EE7B7' }}>{progressValues[i]}%</span>
              </div>
              <div style={{ height: 4, background: '#1A1D27', borderRadius: 2, overflow: 'hidden' }}>
                <div style={{
                  height: '100%',
                  width: `${progressValues[i]}%`,
                  background: 'linear-gradient(90deg, #6EE7B7, #818CF8)',
                  borderRadius: 2,
                  transition: 'width 0.05s',
                }} />
              </div>
            </div>
          ))}

          {/* Ready status */}
          {showStatus && (
            <div style={{
              marginTop: '20px',
              color: '#6EE7B7',
              fontSize: '15px',
              fontWeight: 'bold',
              animation: 'fadeIn 0.4s ease',
            }}>
              {'>'} STATUS: <span style={{ color: '#fff' }}>READY TO HIRE</span> ✓
              <span className="cursor-blink" style={{ marginLeft: 4, color: '#6EE7B7' }}>█</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}