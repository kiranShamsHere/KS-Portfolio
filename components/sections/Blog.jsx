'use client'
import { useEffect, useState, useRef } from 'react'

const featured = {
  label: 'Featured · LinkedIn',
  labelColor: '#6EE7B7',
  title: '"The world is not short of solutions. It is short of commitment."',
  desc: 'Breaking down all 17 Sustainable Development Goals — what each means, where we stand today, and why only 15% will be met by 2030. A call to act, not watch.',
  tags: ['SDGs', 'Climate', 'Sustainability'],
  tagColors: ['#6EE7B7', '#818CF8', '#9896A8'],
  link: 'https://linkedin.com/in/kiranshams',
  date: '2 weeks ago',
}

const sidePosts = [
  {
    label: 'LinkedIn · 5mo ago',
    labelColor: '#818CF8',
    title: 'Hoopo Graze To Own — from donation to dividend',
    link: 'https://linkedin.com/in/kiranshams',
    live: true,
  },
  {
    label: 'Coming Soon',
    labelColor: '#6EE7B7',
    title: 'How I built AgriClima AI — the story behind the idea',
    link: null,
    live: false,
  },
  {
    label: 'Coming Soon',
    labelColor: '#4ADE80',
    title: 'What is n8n and why every developer needs to know it',
    link: null,
    live: false,
  },
  {
    label: 'Coming Soon',
    labelColor: '#9896A8',
    title: 'From intern to founder in under 2 years',
    link: null,
    live: false,
  },
]

export default function Blog() {
  const [inView, setInView] = useState(true)
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
    <section id="blog" ref={sectionRef} style={{ padding: '5rem 2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '48px',
          flexWrap: 'wrap',
          gap: '12px',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}>
          <div>
            <h2 style={{
              fontFamily: 'var(--font-display, Syne), sans-serif',
              fontSize: 'clamp(2rem, 5vw, 3.2rem)',
              fontWeight: 800,
              color: 'var(--text)',
              margin: '0 0 6px',
              letterSpacing: '-0.04em',
            }}>
              Writing
            </h2>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: 0 }}>
              Thoughts on tech, climate & building things that matter.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Full blog</span>
            <span style={{
              fontSize: '10px',
              background: 'var(--bg-surface)',
              border: '1px solid #4ADE8040',
              color: '#4ADE80',
              padding: '4px 12px',
              borderRadius: '20px',
              fontFamily: '"Courier New", monospace',
            }}>
              Coming Soon
            </span>
          </div>
        </div>

        {/* Main content — two columns */}
        <div className="blog-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: '0',
          opacity: inView ? 1 : 0,
          transition: 'opacity 0.6s ease 0.15s',
        }}>

          {/* Left — featured post */}
          <FeaturedPost post={featured} inView={inView} />

          {/* Right — side list */}
          <div style={{
            borderLeft: '1px solid var(--border)',
            paddingLeft: '36px',
          }}>
            {sidePosts.map((post, i) => (
              <SidePost key={i} post={post} index={i} inView={inView} />
            ))}
          </div>
        </div>

        {/* Bottom link */}
        <div style={{
          marginTop: '36px',
          paddingTop: '24px',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          opacity: inView ? 1 : 0,
          transition: 'opacity 0.6s ease 0.4s',
        }}>
          <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontStyle: 'italic' }}>
            More articles dropping on Hashnode — stay tuned.
          </span>
          <a
            href="https://linkedin.com/in/kiranshams"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '11px',
              color: 'var(--accent)',
              textDecoration: 'none',
              fontFamily: '"Courier New", monospace',
              border: '1px solid var(--border)',
              padding: '6px 14px',
              borderRadius: '6px',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
          >
            Read all posts on LinkedIn →
          </a>
        </div>

      </div>

      <style>{`
        .blog-grid {
          grid-template-columns: 1.4fr 1fr;
        }
        @media (max-width: 768px) {
          .blog-grid {
            grid-template-columns: 1fr !important;
          }
          .blog-grid > div:last-child {
            border-left: none !important;
            padding-left: 0 !important;
            border-top: 1px solid var(--border);
            padding-top: 32px;
            margin-top: 32px;
          }
        }
      `}</style>
    </section>
  )
}

function FeaturedPost({ post, inView }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        paddingRight: '36px',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
      }}
    >
      {/* Top accent line */}
      <div style={{
        width: '100%',
        height: '2px',
        background: `linear-gradient(90deg, ${post.labelColor}, transparent)`,
        marginBottom: '20px',
        opacity: hovered ? 1 : 0.5,
        transition: 'opacity 0.3s',
      }} />

      {/* Label + date */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '16px',
      }}>
        <span style={{
          fontSize: '9px',
          color: post.labelColor,
          fontFamily: '"Courier New", monospace',
          letterSpacing: '0.12em',
          fontWeight: 700,
          textTransform: 'uppercase',
        }}>
          {post.label}
        </span>
        <span style={{
          fontSize: '10px',
          color: 'var(--text-muted)',
          fontFamily: '"Courier New", monospace',
        }}>
          {post.date}
        </span>
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: 'var(--font-display, Syne), sans-serif',
        fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
        fontWeight: 800,
        color: hovered ? 'var(--text)' : 'var(--text)',
        margin: '0 0 14px',
        lineHeight: 1.3,
        letterSpacing: '-0.02em',
        transition: 'color 0.2s',
      }}>
        {post.title}
      </h3>

      {/* Description */}
      <p style={{
        fontSize: '12px',
        color: 'var(--text-muted)',
        lineHeight: 1.85,
        margin: '0 0 20px',
      }}>
        {post.desc}
      </p>

      {/* Tags */}
      <div style={{
        display: 'flex',
        gap: '6px',
        flexWrap: 'wrap',
        marginBottom: '24px',
      }}>
        {post.tags.map((tag, i) => (
          <span key={tag} style={{
            fontSize: '9px',
            color: post.tagColors[i],
            borderBottom: `1px solid ${post.tagColors[i]}60`,
            paddingBottom: '1px',
            fontFamily: '"Courier New", monospace',
          }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Read link */}
      <a
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: '12px',
          color: hovered ? post.labelColor : 'var(--text-muted)',
          textDecoration: 'none',
          fontFamily: '"Courier New", monospace',
          letterSpacing: '0.04em',
          transition: 'color 0.2s',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        Read on LinkedIn
        <span style={{
          transition: 'transform 0.2s',
          transform: hovered ? 'translateX(4px)' : 'translateX(0)',
          display: 'inline-block',
        }}>→</span>
      </a>
    </div>
  )
}

function SidePost({ post, index, inView }) {
  const [hovered, setHovered] = useState(false)
  const isLast = index === 3

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        paddingTop: index === 0 ? '0' : '20px',
        paddingBottom: isLast ? '0' : '20px',
        borderBottom: isLast ? 'none' : '1px solid var(--border)',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(16px)',
        transition: `opacity 0.6s ease ${0.2 + index * 0.1}s, transform 0.6s ease ${0.2 + index * 0.1}s`,
        cursor: post.live ? 'pointer' : 'default',
      }}
    >
      {/* Label */}
      <div style={{
        fontSize: '9px',
        color: post.live
          ? (hovered ? post.labelColor : 'var(--text-muted)')
          : post.labelColor,
        fontFamily: '"Courier New", monospace',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        marginBottom: '8px',
        transition: 'color 0.2s',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
      }}>
        {!post.live && (
          <span style={{
            width: '5px',
            height: '1px',
            background: post.labelColor,
            display: 'inline-block',
            opacity: 0.6,
          }} />
        )}
        {post.label}
      </div>

      {/* Title */}
      <div style={{
        fontSize: '13px',
        fontWeight: 600,
        color: post.live
          ? (hovered ? 'var(--text)' : 'var(--text)')
          : 'var(--text-muted)',
        lineHeight: 1.45,
        marginBottom: post.live ? '8px' : '0',
        transition: 'color 0.2s',
        opacity: post.live ? 1 : 0.6,
      }}>
        {post.title}
      </div>

      {/* Link or draft indicator */}
      {post.live ? (
        <a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: '10px',
            color: hovered ? post.labelColor : 'var(--text-muted)',
            textDecoration: 'none',
            fontFamily: '"Courier New", monospace',
            transition: 'color 0.2s',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          Read
          <span style={{
            transition: 'transform 0.2s',
            transform: hovered ? 'translateX(3px)' : 'translateX(0)',
            display: 'inline-block',
          }}>→</span>
        </a>
      ) : (
        <span style={{
          fontSize: '10px',
          color: 'var(--text-muted)',
          fontFamily: '"Courier New", monospace',
          opacity: 0.4,
          fontStyle: 'italic',
        }}>
          Draft in progress...
        </span>
      )}
    </div>
  )
}