
import React from 'react'
import PointerBackground from '@components/PointerBackground'
import SkillsPro from '@components/SkillsPro'
import Navbar from '@components/Navbar'
import Hero from '@components/Hero'
import Projects from '@components/Projects'
import Skills from '@components/Skills'
import About from '@components/About'
import ProfileCard from '@components/ProfileCard'
import Contact from '@components/Contact'
import Footer from '@components/Footer'

export default function App(){
  return (
    <div className='min-h-screen scroll-smooth bg-white text-black antialiased dark:bg-black dark:text-white relative'>
      <PointerBackground density={130} sensitivity={1.3} />
      <div className='pointer-events-none fixed inset-0 -z-30 bg-grid invert-[.06] dark:invert-0' />
      <Navbar />
      <section id='home' className='relative'></section>
      {/* <main className='container mx-auto px-6 py-16'>
        <h1 className='text-5xl font-black bg-gradient-to-r from-fuchsia-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent dark:from-fuchsia-300 dark:via-cyan-200 dark:to-indigo-300'>Hi,  I'm Tom.</h1>
        <p className='mt-4 text-black/70 dark:text-white/70'>Senior Software, Data & ML Engineer | Full-Stack | Cloud | AI Systems
        </p>
        <ProfileCard />
      </main> */}
      <Hero />
      <About />
      <Projects />
      {/* <SkillsPro /> */}
      
      <Contact />
      <Footer />
    </div>
  )
}
