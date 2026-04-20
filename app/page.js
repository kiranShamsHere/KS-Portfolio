'use client'
import { useState } from 'react'
import CoverScreen from '@/components/intro/CoverScreen'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Education from '@/components/sections/Education'
import Services from '@/components/sections/Services'
import Blog from '@/components/sections/Blog'
import Contact from '@/components/sections/Contact'

export default function Home() {
  const [showPortfolio, setShowPortfolio] = useState(false)
  return (
    <>
      {!showPortfolio && <CoverScreen onComplete={() => setShowPortfolio(true)} />}
      {showPortfolio && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Services />
            <Blog />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  )
}