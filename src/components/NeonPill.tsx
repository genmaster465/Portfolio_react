
import React from 'react'

export default function NeonPill({ className = '', children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={
        'relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/90 backdrop-blur transition hover:bg-white/10 ' +
        className
      }
      {...props}
    >
      <span className='absolute inset-0 -z-10 rounded-full opacity-60 blur-xl bg-gradient-to-r from-fuchsia-500/40 via-cyan-500/30 to-purple-500/40' />
      {children}
    </div>
  )
}
