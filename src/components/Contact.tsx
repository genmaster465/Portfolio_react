
import React from 'react'
import { Mail, Rocket } from 'lucide-react'
import SectionTitle from './SectionTitle'
import GlassCard from './GlassCard'

export default function Contact() {
  return (
    <section id='contact' className='relative py-20'>
      <div className='container mx-auto px-6'>
        <SectionTitle icon={<Mail className='h-4 w-4' />} title='Let’s Build Something Wild' subtitle='Contact' />
        <div className='grid gap-6 md:grid-cols-3'>
          <GlassCard className='md:col-span-2'>
            <form onSubmit={(e) => e.preventDefault()} className='grid grid-cols-1 gap-4 md:grid-cols-2'>
              <input placeholder='Your name' className='rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-fuchsia-400/50' />
              <input placeholder='Email' className='rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-cyan-400/50' />
              <input placeholder='Company (optional)' className='md:col-span-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-indigo-400/50' />
              <textarea placeholder='Tell me about your idea…' rows={5} className='md:col-span-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-fuchsia-400/50' />
              <button className='group inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-gradient-to-r from-fuchsia-500/30 via-cyan-500/30 to-indigo-500/30 px-5 py-3 font-medium text-white hover:from-fuchsia-500/40 hover:via-cyan-500/40 hover:to-indigo-500/40'>
                <Rocket className='h-5 w-5' />
                <span>Send transmission</span>
              </button>
            </form>
          </GlassCard>
          <GlassCard>
            <div className='space-y-3 text-white/80'>
              <p>Prefer email? <a className='text-cyan-300 hover:text-cyan-200' href='mailto:paliyanrajat@gmail.com'>paliyanrajat@gmail.com</a></p>
              <p>Across timezones — primarily EST friendly.</p>
              <div className='flex gap-4 pt-2 text-white/80'>
                <a href='https://github.com/genmaster465' target='_blank' rel='noreferrer' className='hover:text-white'>GitHub</a>
                <a href='https://linkedin.com/' target='_blank' rel='noreferrer' className='hover:text-white'>LinkedIn</a>
                <a href='mailto:paliyanrajat@gmail.com' className='hover:text-white'>Email</a>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
