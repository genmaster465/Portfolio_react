import React from 'react'
import ThemeToggle from './ThemeToggle'
import { Link } from 'react-scroll';
export default function Navbar() {
  return (
    <div className='sticky top-4 z-50 mx-auto w-full max-w-6xl px-6'>
      <div className='relative flex items-center justify-between rounded-2xl border border-black/10 bg-white/60 px-4 py-3 backdrop-blur-xl shadow-sm dark:border-white/10 dark:bg-black/40'>
        <a href='#' className='flex items-center gap-2'>
          {/* <div className='h-6 w-6 rounded-md bg-gradient-to-br from-fuchsia-500/70 to-cyan-500/70' /> */}
          <span className='bg-gradient-to-r from-black via-fuchsia-700 to-cyan-700 bg-clip-text text-sm font-semibold tracking-wider text-transparent dark:from-white dark:via-fuchsia-100 dark:to-cyan-100'>Kevin</span>
        </a>
        <nav className='hidden items-center gap-6 text-sm text-black/70 dark:text-white/70 md:flex'>
          <Link to="home" smooth={true} duration={800} offset={-50} className="cursor-pointer hover:text-blue-400">
            Home
          </Link>
          <Link to="projects" smooth={true} duration={800} offset={-50} className="cursor-pointer hover:text-blue-400">
            Projects
          </Link>
          <Link to="skills" smooth={true} duration={800} offset={-50} className="cursor-pointer hover:text-blue-400">
            Skills
          </Link>
          <Link to="about" smooth={true} duration={800} offset={-50} className="cursor-pointer hover:text-blue-400">
            About
          </Link>
          <Link to="contact" smooth={true} duration={800} offset={-50} className="cursor-pointer hover:text-blue-400">
            Contact
          </Link>
        </nav>
        <ThemeToggle />
      </div>
    </div>
  )
}