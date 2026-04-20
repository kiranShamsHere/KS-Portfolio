'use client'
import { useEffect, useState, useRef } from 'react'

// Screenshot from live URL — using screenshot API
function getScreenshot(url) {
  if (!url) return null
  return `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`
}

const featuredProjects = [
  {
    name: 'Ecommerce-furnitureWebsite',
    title: 'Furniture E-commerce',
    desc: 'Full ecommerce furniture website designed using HTML, CSS & JS. Inspired by a Behance design, recreated in Figma then built from scratch.',
    live: 'https://kiranshamshere.github.io/Ecommerce-furnitureWebsite',
    github: 'https://github.com/kiranShamsHere/Ecommerce-furnitureWebsite',
    tags: ['HTML', 'CSS', 'JavaScript'],
    color: '#818CF8',
    cat: ['all', 'featured', 'frontend'],
  },
  {
    name: 'restaurantWebsite',
    title: 'Restaurant Website',
    desc: 'Responsive restaurant site with smooth navigation, interactive menu, reservation system and animations.',
    live: 'https://kiranshamshere.github.io/restaurantWebsite',
    github: 'https://github.com/kiranShamsHere/restaurantWebsite',
    tags: ['HTML', 'CSS', 'JavaScript'],
    color: '#6EE7B7',
    cat: ['all', 'featured', 'frontend'],
  },
  {
    name: 'currencyConverter',
    title: 'Currency Converter',
    desc: 'Real-time currency converter using live exchange rate API with a clean minimal UI.',
    live: 'https://kiranshamshere.github.io/currencyConverter',
    github: 'https://github.com/kiranShamsHere/currencyConverter',
    tags: ['JavaScript', 'API'],
    color: '#4ADE80',
    cat: ['all', 'featured', 'frontend', 'tools'],
  },
  {
    name: 'Github-Username-Updater',
    title: 'GitHub Username Updater',
    desc: 'Python + Flask automation tool to find and replace your GitHub username across all repositories. MIT Licensed, open source.',
    live: 'https://github.com/kiranShamsHere/Github-Username-Updater',
    github: 'https://github.com/kiranShamsHere/Github-Username-Updater',
    tags: ['Python', 'Flask', 'Open Source'],
    color: '#818CF8',
    cat: ['all', 'backend', 'tools'],
  },
  {
    name: 'analogClock',
    title: 'Analog Clock',
    desc: 'Analog clock with light/dark mode toggle stored in localStorage. Smooth second-hand animation.',
    live: 'https://kiranshamshere.github.io/analogClock',
    github: 'https://github.com/kiranShamsHere/analogClock',
    tags: ['HTML', 'CSS', 'JS'],
    color: '#6EE7B7',
    cat: ['all', 'frontend', 'uni'],
  },
  {
    name: 'dictionary-app-with-JS',
    title: 'Dictionary App',
    desc: 'Dictionary app built with JavaScript using a public dictionary API. Search any word for definitions, phonetics and examples.',
    live: 'https://kiranshamshere.github.io/dictionary-app-with-JS',
    github: 'https://github.com/kiranShamsHere/dictionary-app-with-JS',
    tags: ['JavaScript', 'API', 'CSS'],
    color: '#6EE7B7',
    cat: ['all', 'frontend', 'tools'],
  },
  {
    name: 'myCoffeeShop',
    title: 'Coffee Shop Website',
    desc: 'A beautiful responsive coffee shop website with menu, gallery and contact section.',
    live: 'https://kiranshamshere.github.io/myCoffeeShop',
    github: 'https://github.com/kiranShamsHere/myCoffeeShop',
    tags: ['HTML', 'CSS', 'JS'],
    color: '#818CF8',
    cat: ['all', 'frontend'],
  },
  {
    name: 'hairSalonWebsite',
    title: 'Hair Salon Website',
    desc: 'Responsive hair salon website with booking section and services showcase.',
    live: 'https://kiranshamshere.github.io/hairSalonWebsite',
    github: 'https://github.com/kiranShamsHere/hairSalonWebsite',
    tags: ['HTML', 'CSS', 'JS'],
    color: '#4ADE80',
    cat: ['all', 'frontend'],
  },
  {
    name: 'text-to-speech-converter',
    title: 'Text to Speech',
    desc: 'Text to speech converter using the Web Speech API. Supports multiple voices and speed control.',
    live: 'https://kiranshamshere.github.io/text-to-speech-converter',
    github: 'https://github.com/kiranShamsHere/text-to-speech-converter',
    tags: ['JavaScript', 'Web API'],
    color: '#6EE7B7',
    cat: ['all', 'frontend', 'tools'],
  },
]

const tabs = [
  { key: 'all', label: 'All' },
  { key: 'featured', label: 'Featured' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'tools', label: 'Tools' },
  { key: 'uni', label: 'Uni Projects' },
]

// ── Project Card ──────────────────────────────────────────────
function ProjectCard({ project, index, inView }) {
  const [hovered, setHovered] = useState(false)
  const [imgLoaded, setImgLoaded] = useState(false)
  const [imgError, setImgError] = useState(false)
  const screenshotUrl = getScreenshot(project.live)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: '10px',
        overflow: 'hidden',
        border: `1px solid ${hovered ? project.color : 'var(--border)'}`,
        background: 'var(--bg-surface)',
        transition: 'all 0.25s',
        transform: inView
          ? hovered ? 'translateY(-4px)' : 'translateY(0)'
          : 'translateY(20px)',
        boxShadow: hovered ? `0 12px 32px ${project.color}20` : 'none',
        opacity: inView ? 1 : 0,
        cursor: 'pointer',
        transitionDelay: `${index * 0.07}s`,
      }}
    >
      {/* Screenshot image area */}
      <div style={{
        width: '100%',
        aspectRatio: '16/9',
        background: 'var(--bg-surface-2)',
        overflow: 'hidden',
        position: 'relative',
      }}>
        {/* Skeleton shimmer while loading */}
        {!imgLoaded && !imgError && (
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(90deg, var(--bg-surface-2) 25%, var(--bg-surface) 50%, var(--bg-surface-2) 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite',
          }} />
        )}

        {screenshotUrl && !imgError ? (
          <img
            src={screenshotUrl}
            alt={project.title}
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', display: 'block',
              transition: 'transform 0.4s, opacity 0.3s',
              transform: hovered ? 'scale(1.05)' : 'scale(1)',
              opacity: imgLoaded ? 1 : 0,
            }}
            onLoad={() => setImgLoaded(true)}
            onError={() => { setImgError(true); setImgLoaded(true) }}
          />
        ) : (
          <div style={{
            width: '100%', height: '100%',
            display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontSize: '36px',
            background: `linear-gradient(135deg, ${project.color}15, var(--bg-surface-2))`,
          }}>🌐</div>
        )}

        {/* Hover overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(10,12,16,0.93)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '12px',
          padding: '18px',
        }}>
          <p style={{
            fontSize: '11px', color: '#E8E6F0',
            textAlign: 'center', lineHeight: 1.75,
            margin: 0,
          }}>
            {project.desc}
          </p>
          <div style={{ display: 'flex', gap: '8px', width: '100%' }}>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              style={{
                flex: 1, textAlign: 'center',
                background: project.color,
                color: ['#4ADE80', '#6EE7B7'].includes(project.color) ? '#0F1117' : '#fff',
                fontSize: '11px', fontWeight: 700,
                padding: '8px', borderRadius: '5px',
                textDecoration: 'none',
              }}
            >
              Live Preview →
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              style={{
                flex: 1, textAlign: 'center',
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#E8E6F0',
                fontSize: '11px',
                padding: '8px', borderRadius: '5px',
                textDecoration: 'none',
              }}
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>

      {/* Card footer */}
      <div style={{ padding: '14px' }}>
        <div style={{
          fontSize: '13px', fontWeight: 700,
          color: 'var(--text)', marginBottom: '7px',
        }}>
          {project.title}
        </div>
        <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
          {project.tags.map(tag => (
            <span key={tag} style={{
              fontSize: '9px',
              background: 'var(--bg-surface-2)',
              border: `1px solid ${project.color}40`,
              color: project.color,
              padding: '2px 7px', borderRadius: '3px',
              fontFamily: '"Courier New", monospace',
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── GitHub Extra Repos ────────────────────────────────────────
function GitHubProjects({ shown }) {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!shown) return
    fetch('https://api.github.com/users/kiranShamsHere/repos?per_page=100&sort=updated')
      .then(r => r.json())
      .then(data => {
        const featuredNames = featuredProjects.map(p => p.name.toLowerCase())
        const withPreview = data
          .filter(r =>
            r.homepage &&
            r.homepage.trim() !== '' &&
            !featuredNames.includes(r.name.toLowerCase())
          )
          .slice(0, 9)
        setRepos(withPreview)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [shown])

  if (!shown) return null

  return (
    <div style={{ marginTop: '40px', borderTop: '1px solid var(--border)', paddingTop: '32px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
        <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text)', margin: 0 }}>
          More from GitHub
        </h3>
        <span style={{
          fontSize: '10px', color: 'var(--accent)',
          fontFamily: '"Courier New", monospace',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border)',
          padding: '2px 8px', borderRadius: '10px',
        }}>
          live projects only
        </span>
      </div>

      {loading ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '12px' }}>
          {[1,2,3].map(i => (
            <div key={i} style={{
              height: '180px', background: 'var(--bg-surface)',
              borderRadius: '10px', border: '1px solid var(--border)',
              animation: 'shimmer 1.5s infinite',
            }} />
          ))}
        </div>
      ) : repos.length === 0 ? (
        <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
          No additional live projects found on GitHub.
        </p>
      ) : (
        <div className="github-grid">
          {repos.map(repo => (
            <GitHubCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}
    </div>
  )
}

function GitHubCard({ repo }) {
  const [hovered, setHovered] = useState(false)
  const [imgLoaded, setImgLoaded] = useState(false)
  const screenshotUrl = getScreenshot(repo.homepage)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--bg-surface)',
        border: `1px solid ${hovered ? 'var(--accent)' : 'var(--border)'}`,
        borderRadius: '10px', overflow: 'hidden',
        transition: 'all 0.2s',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hovered ? '0 8px 24px rgba(110,231,183,0.1)' : 'none',
      }}
    >
      <div style={{
        width: '100%', aspectRatio: '16/9',
        background: 'var(--bg-surface-2)', overflow: 'hidden',
        position: 'relative',
      }}>
        {!imgLoaded && (
          <div style={{
            position: 'absolute', inset: 0,
            animation: 'shimmer 1.5s infinite',
            background: 'linear-gradient(90deg,var(--bg-surface-2) 25%,var(--bg-surface) 50%,var(--bg-surface-2) 75%)',
            backgroundSize: '200% 100%',
          }} />
        )}
        <img
          src={screenshotUrl}
          alt={repo.name}
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover', display: 'block',
            opacity: imgLoaded ? 1 : 0,
            transition: 'opacity 0.3s, transform 0.4s',
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
          }}
          onLoad={() => setImgLoaded(true)}
          onError={e => {
            e.target.style.display = 'none'
            e.target.parentElement.innerHTML += `<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:28px;">🌐</div>`
          }}
        />
      </div>
      <div style={{ padding: '12px' }}>
        <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text)', marginBottom: '4px' }}>
          {repo.name.replace(/-/g, ' ')}
        </div>
        {repo.description && (
          <div style={{ fontSize: '10px', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '10px' }}>
            {repo.description.slice(0, 70)}{repo.description.length > 70 ? '...' : ''}
          </div>
        )}
        <div style={{ display: 'flex', gap: '6px' }}>
          <a href={repo.homepage} target="_blank" rel="noopener noreferrer" style={{
            flex: 1, textAlign: 'center',
            background: 'var(--accent)', color: 'var(--bg)',
            fontSize: '10px', fontWeight: 700,
            padding: '6px', borderRadius: '4px', textDecoration: 'none',
          }}>Live →</a>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer" style={{
            flex: 1, textAlign: 'center',
            background: 'transparent', border: '1px solid var(--border)',
            color: 'var(--text-muted)',
            fontSize: '10px', padding: '6px', borderRadius: '4px', textDecoration: 'none',
          }}>Code ↗</a>
        </div>
      </div>
    </div>
  )
}

// ── Main Section ──────────────────────────────────────────────
export default function Projects() {
  const [activeTab, setActiveTab] = useState('all')
  const [showGitHub, setShowGitHub] = useState(false)
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

  const filtered = featuredProjects.filter(p => p.cat.includes(activeTab))

  return (
    <section id="projects" ref={sectionRef} style={{ padding: '5rem 2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '28px',
          flexWrap: 'wrap', gap: '16px',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}>
          <div>
            <h2 style={{
              fontFamily: 'var(--font-body, DM Sans), sans-serif',
              fontSize: 'clamp(2rem, 5vw, 3.2rem)',
              fontWeight: 800,
              color: 'var(--text)',
              margin: '0 0 4px',
              letterSpacing: '-0.04em',
            }}>
              My Projects
            </h2>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: 0 }}>
              Things I've built — from web apps to AI tools
            </p>
          </div>
          <a
            href="https://github.com/kiranShamsHere"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '11px', color: 'var(--accent)',
              textDecoration: 'none',
              fontFamily: '"Courier New", monospace',
              border: '1px solid var(--border)',
              padding: '6px 14px', borderRadius: '6px',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
          >
            github.com/kiranShamsHere →
          </a>
        </div>

        {/* Filter tabs — scrollable on mobile */}
        <div style={{
          opacity: inView ? 1 : 0,
          transition: 'opacity 0.6s ease 0.1s',
          marginBottom: '24px',
        }}>
          <div
            className="tabs-scroll"
            style={{
              display: 'flex',
              gap: '6px',
              overflowX: 'auto',
              paddingBottom: '4px',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {tabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                style={{
                  padding: '7px 16px',
                  borderRadius: '20px',
                  border: `1px solid ${activeTab === tab.key ? 'var(--accent)' : 'var(--border)'}`,
                  background: activeTab === tab.key ? 'var(--bg-surface)' : 'transparent',
                  color: activeTab === tab.key ? 'var(--accent)' : 'var(--text-muted)',
                  fontSize: '11px',
                  fontWeight: activeTab === tab.key ? 700 : 400,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div
          className="projects-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '14px',
          }}
        >
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={i}
              inView={inView}
            />
          ))}
        </div>

        {/* Explore More button */}
        <div style={{
          textAlign: 'center', marginTop: '40px',
          opacity: inView ? 1 : 0,
          transition: 'opacity 0.6s ease 0.5s',
        }}>
          {!showGitHub ? (
            <button
              onClick={() => setShowGitHub(true)}
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border)',
                color: 'var(--text)',
                padding: '12px 36px',
                borderRadius: '8px',
                fontSize: '13px', fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s',
                display: 'inline-flex',
                alignItems: 'center', gap: '8px',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.color = 'var(--accent)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.color = 'var(--text)'
              }}
            >
              Explore More Projects ↓
            </button>
          ) : (
            <button
              onClick={() => setShowGitHub(false)}
              style={{
                background: 'transparent',
                border: '1px solid var(--border)',
                color: 'var(--text-muted)',
                padding: '10px 28px',
                borderRadius: '8px',
                fontSize: '12px', cursor: 'pointer',
              }}
            >
              Show Less ↑
            </button>
          )}
        </div>

        {/* Live GitHub repos */}
        <GitHubProjects shown={showGitHub} />

      </div>

      <style>{`
        .tabs-scroll::-webkit-scrollbar { display: none; }
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .projects-grid {
          grid-template-columns: repeat(3, 1fr);
        }
        .github-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        @media (max-width: 900px) {
          .projects-grid, .github-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 560px) {
          .projects-grid, .github-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}