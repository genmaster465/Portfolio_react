
import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Stars, ArrowRight } from 'lucide-react'
import GlassCard from './GlassCard'
import SectionTitle from './SectionTitle'
import LinkIcon from './LinkIcon'
import { projects, nebulaColors } from '@data/projects'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { delay, duration: 0.6 },
})

export default function Projects() {
  return (
    <section id='projects' className='relative min-h-screen py-20'>
      <div className='container mx-auto px-6'>
        <SectionTitle icon={<Code2 className='h-4 w-4' />} title='Selected Projects' subtitle='Showcase' />
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {projects.map((p, idx) => (
            <motion.div key={p.title} {...fadeUp(idx * 0.05)}>
              <div className="h-full bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 bg-gradient-to-br ${nebulaColors[idx % nebulaColors.length]}">
                <img
                  className="w-full h-48 p-2 mr-3 rounded-[0.7rem] object-cover"
                  src={p.img}
                  alt=""
                />
                <div className="p-5">
                  <div className='flex items-start justify-between gap-4'>
                    <h3 className='text-xl font-semibold text-white'>{p.title}</h3>
                    <div className='px-3 py-1 text-[10px]'><span className='rounded-full bg-white/10 px-2 py-1 text-[10px] text-white/80'>LIVE</span></div>
                  </div>
                  <p className='mt-2 text-sm leading-relaxed text-white/80'>{p.blurb}</p>
                  <div className='mt-4 flex flex-wrap gap-2'>
                    {p.tags.map((t) => (<span key={t} className='rounded-full bg-white/10 px-2 py-1 text-[11px] text-white/80'>{t}</span>))}
                  </div>
                  <div className='mt-5 flex items-center justify-between'>
                    <LinkIcon href={p.link} />
                    <a href={p.link} target='_blank' rel='noreferrer' className='group inline-flex items-center gap-1 text-fuchsia-300 hover:text-fuchsia-200'>
                      <span>Details</span>
                      <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-0.5' />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
