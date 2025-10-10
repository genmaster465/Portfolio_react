
import React, { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle(){
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true
    const stored = localStorage.getItem('theme')
    stored === 'dark'
    if (stored) return stored === 'dark'
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  useEffect(() => {
    const root = document.documentElement
    if (dark) { root.classList.add('dark'); localStorage.setItem('theme','dark') }
    else { root.classList.remove('dark'); localStorage.setItem('theme','light') }
  }, [dark])
  // return (
  //   <button onClick={() => setDark(d=>!d)} className='inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white/60 px-3 py-2 text-xs font-medium text-black/80 hover:bg-white/80 dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10'>
  //     {dark ? <Moon className='h-4 w-4'/> : <Sun className='h-4 w-4'/>}
  //     <span className='hidden sm:inline'>{dark ? 'Dark' : 'Light'}</span>
  //   </button>
  // )
}
