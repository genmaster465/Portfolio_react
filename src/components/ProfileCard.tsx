
import React, { useRef } from 'react'

export default function ProfileCard(){
  const ref = useRef<HTMLDivElement | null>(null)
  function onMove(e: React.MouseEvent){
    const el = ref.current!
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    const rx = (+py * 12).toFixed(2)
    const ry = (-px * 16).toFixed(2)
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(18px)`
    el.style.boxShadow = `${-px*20}px ${py*20}px 60px rgba(236,72,153,0.35), ${px*20}px ${-py*20}px 60px rgba(14,165,233,0.35)`
  }
  function onLeave(){
    const el = ref.current!
    el.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)`
    el.style.boxShadow = `0 0 0 rgba(0,0,0,0)`
  }
  return (
    <div id='profile' className='grid place-items-center relative py-8'>
      <div className='[perspective:1200px] w-full max-w-sm'>
        <div
          ref={ref}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          className='relative rounded-2xl overflow-hidden border border-black/10 bg-white shadow-xl transition-transform duration-200 dark:border-white/10 dark:bg-white/5'
          style={{ transformStyle: 'preserve-3d' }}
        >
          <img src='/profile.png' alt='Profile' className='w-full h-72 object-cover' style={{ transform: 'translateZ(40px)' }} />
          <div className='absolute inset-0 pointer-events-none' style={{ transform: 'translateZ(60px)' }}>
            <div className='absolute inset-0 bg-gradient-to-tr from-fuchsia-500/20 to-cyan-500/20 mix-blend-screen'></div>
          </div>
          <div className='absolute bottom-0 left-0 right-0 p-4 backdrop-blur-md bg-white/40 text-black dark:bg-black/40 dark:text-white' style={{ transform: 'translateZ(50px)' }}>
            <div className='text-lg font-semibold'>Kevin Toh</div>
            <div className='text-sm opacity-80'>Senior Software, Data & ML Engineer | Full-Stack | Cloud | AI Systems</div>
          </div>
        </div>
      </div>
    </div>
  )
}
