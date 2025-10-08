
import React from 'react'
import { Globe, Zap, Code2, TerminalSquare } from 'lucide-react'
import SectionTitle from './SectionTitle'
import GlassCard from './GlassCard'
import NeonPill from './NeonPill'
import { motion } from 'framer-motion'

const float = {
  animate: { y: [0, -8, 0], transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' } },
}

export default function About() {
  return (
    <section id='about' className='relative py-20'>
      <div className='container mx-auto px-6'>
        <SectionTitle icon={<TerminalSquare className='h-4 w-4' />} title='About Me' subtitle='Profile' />
        <div className='grid items-stretch gap-6 md:grid-cols-2'>
          <GlassCard>
            <p className='text-white/80 leading-relaxed'>
              I’m an AI/ML engineer and automation specialist. I build full‑stack apps, agents, and data systems that look sci‑fi yet ship like clockwork.
              I love neon gradients, clean APIs, and shaving seconds off user journeys. 
              I enjoy solving problems with clean code, modern frameworks, and creative design. 
            </p>
            <div className='mt-6 flex flex-wrap gap-3'>
              <NeonPill><Zap className='h-4 w-4' /> FastAPI • Flask</NeonPill>
              <NeonPill><Code2 className='h-4 w-4' /> React • TS • Tailwind</NeonPill>
              <NeonPill><Globe className='h-4 w-4' /> RAG • LangChain • n8n</NeonPill>
            </div>
          </GlassCard>
          <GlassCard>
            <motion.div className='relative h-56 w-full overflow-hidden rounded-xl' {...float}>
              <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(236,72,153,0.35),transparent_45%),radial-gradient(ellipse_at_bottom_right,rgba(14,165,233,0.35),transparent_45%)]' />
              <div className='absolute inset-0 grid place-items-center text-center'>
                <div>
                  <div className='text-5xl font-black text-white tracking-tight'>6<span className='text-fuchsia-300'>+</span></div>
                  <div className='mt-1 text-sm uppercase tracking-widest text-white/70'>Years Experience</div>
                </div>
              </div>
            </motion.div>
            <p className='mt-4 text-white/80'>
              Previously at EXL, BlackRock, TCS, and Polaris I/O. I thrive in ambiguous problem spaces and love partnering with product‑minded folks.
              {/* I build responsive, high-performance web applications using modern frameworks and technologies (React, Node.js, Next.js, .NET, etc.). From front-end interfaces to back-end APIs and databases, I deliver secure and scalable solutions.
              I design and deploy AI-powered applications, including predictive analytics, natural language processing (NLP), computer vision, and recommendation systems — helping businesses leverage data for smarter decisions.
              I create intuitive, cross-platform mobile applications (iOS & Android) with seamless user experiences. Whether it’s consumer-facing apps or enterprise-grade solutions, I focus on performance, security, and usability.  
              I architect scalable, reliable, and maintainable systems tailored to business needs. From cloud-native microservices to enterprise-level solutions, I ensure long-term stability and growth.
              I help organizations define technology strategies, optimize development processes, and implement best practices such as Agile, CI/CD, and TDD. */}
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
