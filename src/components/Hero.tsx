
import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Rocket, Sparkles } from 'lucide-react'
import NeonPill from './NeonPill'
import Starfield from './Starfield'
import ProfileCard from './ProfileCard'

const shimmer = {
  initial: { backgroundPosition: '0% 50%' },
  animate: { backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'], transition: { duration: 12, repeat: Infinity, ease: 'linear' } },
}
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { delay, duration: 0.6 },
})

export default function Hero() {
  return (
    <section className='relative min-h-[86vh] grid place-items-center overflow-hidden'>
      <motion.div variants={shimmer} initial='initial' animate='animate' className='pointer-events-none absolute -inset-40 -z-20 bg-[length:200%_200%] bg-gradient-to-r from-fuchsia-700/30 via-cyan-700/30 to-indigo-700/30 blur-3xl' />
      {/* <motion.div className='pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-br from-fuchsia-500/60 to-rose-500/30 blur-2xl' animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 40, ease: 'linear' }} /> */}
      <motion.div className='pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-br from-cyan-500/60 to-blue-500/30 blur-2xl' animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 50, ease: 'linear' }} />

      <div className='container mx-auto px-6 py-20'>
        <div className='mx-auto max-w-3xl text-center'>
          <NeonPill className='mb-5'>
            <Rocket className='h-4 w-4' />
            <span>AI/ML Engineer • Automation Specialist</span>
          </NeonPill>
          <motion.h1 {...fadeUp(0.05)} className='bg-gradient-to-r from-fuchsia-300 via-cyan-200 to-indigo-300 bg-clip-text text-5xl font-black tracking-tight text-transparent md:text-7xl'>
            Tom Toh 
            {/* Wei Ming(卓伟明) */}
          </motion.h1>
          {/* <motion.p {...fadeUp(0.15)} className='mt-5 text-lg leading-relaxed text-white/80 md:text-xl'>
            Singaporean Chinese 🇸🇬,
          </motion.p> */}
          <motion.p {...fadeUp(0.15)} className='mt-5 text-lg leading-relaxed text-white/80 md:text-xl'>
            Senior Software, Data & ML Engineer | Full-Stack | Cloud | AI Systems
          </motion.p>
          
          <motion.div {...fadeUp(0.25)} className='mt-8 flex items-center justify-center gap-3'>
            <a href='#projects' className='group inline-flex items-center gap-2 rounded-xl border border-fuchsia-400/40 bg-fuchsia-500/20 px-5 py-3 text-fuchsia-100 hover:bg-fuchsia-500/30'>
              <Sparkles className='h-5 w-5 transition group-hover:rotate-12' />
              <span>See Projects</span>
            </a>
            <a href='#contact' className='group inline-flex items-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-500/20 px-5 py-3 text-cyan-100 hover:bg-cyan-500/30'>
              <Mail className='h-5 w-5' />
              <span>Contact Me</span>
            </a>
          </motion.div>
          
          {/* <motion.div {...fadeUp(0.35)} className='mt-8 flex items-center justify-center gap-4 text-white/80'>
            <a href='https://github.com/genmaster465' target='_blank' rel='noreferrer' className='hover:text-white'><Github /></a>
            <a href='https://linkedin.com/' target='_blank' rel='noreferrer' className='hover:text-white'><Linkedin /></a>
            <a href='#contact' className='hover:text-white'><Mail /></a>
          </motion.div> */}
        </div>
      </div> 
      
      <Starfield density={160} />
    </section>
  )
}
