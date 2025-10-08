
import React from 'react'
import { ExternalLink } from 'lucide-react'

export default function LinkIcon({ href }: { href: string }) {
  return (
    <a href={href} target='_blank' rel='noreferrer' className='inline-flex items-center gap-1 text-sm text-cyan-300 hover:text-cyan-200'>
      <span>Visit</span>
      <ExternalLink className='h-4 w-4' />
    </a>
  )
}
