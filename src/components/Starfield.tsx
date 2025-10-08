
import React from 'react'
import { motion } from 'framer-motion'

export default function Starfield({ density = 120 }: { density?: number }) {
  const stars = Array.from({ length: density })

  return (
    <div className='pointer-events-none absolute inset-0 -z-10 overflow-hidden'>
      {stars.map((_, i) => (
        <motion.span
          key={i}
          className='absolute h-[2px] w-[2px] rounded-full bg-white/70'
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: Math.random(),
            scale: Math.random() * 0.9 + 0.1,
          }}
          animate={{
            y: ['0%', `${Math.random() * 2 + 98}%`],
            opacity: [0.2, 0.9, 0.2],
          }}
          transition={{ duration: Math.random() * 8 + 8, repeat: Infinity }}
        />
      ))}
    </div>
  )
}
