
import React from 'react'
import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import GlassCard from './GlassCard'
import { skills } from '@data/skills'
const radius = 44
const circumference = 2 * Math.PI * radius
function Ring({ value, label }: { value: number; label: string }) {
  const dash = circumference * (1 - value / 100)
  return (
    <div className='flex items-center gap-4 p-3 rounded-xl bg-white/60 border border-black/10 hover:bg-white/70 transition dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10'>
      <svg width='110' height='110' viewBox='0 0 110 110' className='shrink-0'>
        <defs><linearGradient id='g' x1='0%' y1='0%' x2='100%' y2='0%'><stop offset='0%' stopColor='#e879f9'/><stop offset='50%' stopColor='#22d3ee'/><stop offset='100%' stopColor='#818cf8'/></linearGradient></defs>
        <circle cx='55' cy='55' r={radius} stroke='rgba(0,0,0,0.08)' strokeWidth='10' fill='none' className='dark:stroke-[rgba(255,255,255,0.08)]' />
        <motion.circle cx='55' cy='55' r={radius} stroke='url(#g)' strokeWidth='10' fill='none' strokeLinecap='round'
          initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: dash }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 1.2 }}
          style={{ strokeDasharray: circumference }}
        />
        <text x='55' y='60' textAnchor='middle' fill='currentColor' fontSize='18' fontWeight='700'>{value}%</text>
      </svg>
      <div><div className='font-semibold'>{label}</div><div className='text-xs opacity-60'>Proficiency</div></div>
    </div>
  )
}
export default function SkillsPro(){
  return (
    <section id='skills' className='relative py-20'>
      <div className='container mx-auto px-6'>
        <SectionTitle icon={<span className='h-4 w-4 block rounded-full bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-indigo-400' />} title='Core Tech & Skills' subtitle='Capabilities' />
        <div className='grid gap-6 md:grid-cols-2'>
          {skills.map((s:any) => (<GlassCard key={s.name}><Ring value={s.level} label={s.name} /></GlassCard>))}
        </div>
      </div>
    </section>
  )
}
