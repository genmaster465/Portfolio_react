
import React, { useEffect, useRef } from 'react'
type Particle = { x:number; y:number; vx:number; vy:number; size:number; hue:number; life:number }
export default function PointerBackground({ density = 120, sensitivity = 1.2 }: { density?: number; sensitivity?: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const mouse = useRef({ x: 0, y: 0 })
  const particles = useRef<Particle[]>([])
  const raf = useRef<number | null>(null)
  const last = useRef<number>(performance.now())
  useEffect(() => {
    const c = canvasRef.current!
    const ctx = c.getContext('2d', { alpha: true })!
    const DPR = Math.max(1, devicePixelRatio || 1)
    let w = c.width = window.innerWidth * DPR
    let h = c.height = window.innerHeight * DPR
    c.style.width = window.innerWidth + 'px'
    c.style.height = window.innerHeight + 'px'
    const spawn = (n = density, loc?: {x:number;y:number}) => {
      for (let i=0;i<n;i++){
        const x = loc ? loc.x : Math.random()*w
        const y = loc ? loc.y : Math.random()*h
        particles.current.push({ x, y, vx: (Math.random()-0.5) * 0.25, vy: (Math.random()-0.5) * 0.25, size: Math.random()*2 + 1.2, hue: Math.floor(200 + Math.random()*140), life: 1 })
      }
    }
    spawn(density)
    const onMove = (e: MouseEvent) => { mouse.current.x = (e.clientX) * DPR; mouse.current.y = (e.clientY) * DPR }
    const onClick = (e: MouseEvent) => {
      const x = (e.clientX) * DPR, y = (e.clientY) * DPR
      for (let i=0;i<70;i++){
        const a = Math.random()*Math.PI*2, s = Math.random()*2.2 + 0.8
        particles.current.push({ x, y, vx: Math.cos(a)*s, vy: Math.sin(a)*s, size: Math.random()*2+1.2, hue: Math.floor(180+Math.random()*180), life: 1 })
      }
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mousedown', onClick)
    const onResize = () => { w = c.width = window.innerWidth*DPR; h = c.height = window.innerHeight*DPR; c.style.width = window.innerWidth+'px'; c.style.height = window.innerHeight+'px' }
    window.addEventListener('resize', onResize)
    const step = (now: number) => {
      const dt = Math.min(33, now - last.current); last.current = now
      ctx.globalCompositeOperation = 'source-over'
      const isDark = document.documentElement.classList.contains('dark')
      ctx.fillStyle = isDark ? 'rgba(0,0,0,0.18)' : 'rgba(255,255,255,0.12)'
      ctx.fillRect(0,0,w,h)
      ctx.globalCompositeOperation = 'lighter'
      const mx = mouse.current.x || w/2, my = mouse.current.y || h/2
      for (let i=particles.current.length-1;i>=0;i--){
        const p = particles.current[i]
        const dx = mx - p.x, dy = my - p.y, dist = Math.max(24, Math.hypot(dx, dy))
        const force = sensitivity * 0.06 * (1 / (dist / 180))
        p.vx += dx * force * (dt/16); p.vy += dy * force * (dt/16)
        p.vx += (Math.random()-0.5) * 0.04 * sensitivity; p.vy += (Math.random()-0.5) * 0.04 * sensitivity
        p.vx *= 0.965; p.vy *= 0.965; p.x += p.vx; p.y += p.vy
        const grd = ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.size*24)
        const a1 = isDark ? 0.12 : 0.10, a2 = isDark ? 0.06 : 0.05
        grd.addColorStop(0, `hsla(${p.hue}, 90%, 60%, ${a1})`); grd.addColorStop(1, `hsla(${(p.hue+60)%360}, 90%, 60%, ${a2})`)
        ctx.fillStyle = grd; ctx.beginPath(); ctx.arc(p.x,p.y,p.size*14,0,Math.PI*2); ctx.fill()
        if (p.x < -100 || p.y < -100 || p.x > w+100 || p.y > h+100) particles.current.splice(i,1)
      }
      if (particles.current.length < density) spawn(density - particles.current.length)
      raf.current = requestAnimationFrame(step)
    }
    raf.current = requestAnimationFrame(step)
    return () => { if (raf.current) cancelAnimationFrame(raf.current); window.removeEventListener('mousemove', onMove); window.removeEventListener('mousedown', onClick); window.removeEventListener('resize', onResize) }
  }, [density, sensitivity])
  return <canvas ref={canvasRef} className='fixed inset-0 -z-40 pointer-events-none'></canvas>
}
