
import React from 'react'
export default function GlassCard({ children, className = '' }: { children: React.ReactNode; className?: string }){
  return (<div className={'relative rounded-2xl border border-black/10 bg-white/60 p-5 backdrop-blur-xl shadow-sm dark:border-white/10 dark:bg-white/5 ' + className}><div className='pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-black/[.04] via-transparent to-black/[.02] dark:from-white/10 dark:to-white/5'/>{children}</div>)
}
