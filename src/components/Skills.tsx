
import React from 'react'
import { motion } from 'framer-motion'
import { Cpu } from 'lucide-react'
import SectionTitle from './SectionTitle'
import GlassCard from './GlassCard'
import { skills } from '@data/skills'
import { nebulaColors } from '@data/projects'

export default function Skills() {
  return (
    <section id='skills' className='relative py-20'>
      <div className='container mx-auto px-6'>
        <SectionTitle icon={<Cpu className='h-4 w-4' />} title='Core Tech & Skills' subtitle='Capabilities' />
        <div className='grid gap-6 md:grid-cols-2'>
          {skills.map((s, idx) => (
            <GlassCard key={s.name as string}>
              <div className='flex items-center justify-between'>
                <span className='text-white'>{s.name as string}</span>
                <span className='text-white/70'>{(s as any).level}%</span>
              </div>
              <div className='mt-3 h-2 w-full rounded-full bg-white/10'>
                <motion.div
                  className={`h-2 rounded-full bg-gradient-to-r ${nebulaColors[idx % nebulaColors.length]}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(s as any).level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.1 }}
                />
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
