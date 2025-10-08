
import React from 'react'
export default function SectionTitle({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle?: string }){
  return (<div className='mb-8 space-y-1'><div className='flex items-center gap-2 text-fuchsia-600 dark:text-fuchsia-300'>{icon}<span className='text-xs tracking-widest uppercase'>{subtitle ?? 'Section'}</span></div><h2 className='text-3xl md:text-4xl font-bold tracking-tight'>{title}</h2></div>)
}
