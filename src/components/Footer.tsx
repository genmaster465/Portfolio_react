
import React from 'react'

export default function Footer() {
  return (
    <footer className='relative py-10 text-center text-white/50'>
      <div className='container mx-auto px-6'>
        <div className='text-sm'>© {new Date().getFullYear()} Kevin — Crafted with React & Tailwind</div>
      </div>
    </footer>
  )
}
