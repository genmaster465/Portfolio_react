
import React from 'react'
import { Globe, Zap, Code2, TerminalSquare, Server, Brain, Database } from 'lucide-react'
import SectionTitle from './SectionTitle'
import GlassCard from './GlassCard'
import NeonPill from './NeonPill'
import { motion } from 'framer-motion'

const float = {
  animate: { y: [0, -8, 0], transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' } },
}

export default function About() {
  return (
    <section id='about' className='relative py-20'>
      <div className='container mx-auto px-6'>
        <SectionTitle icon={<TerminalSquare className='h-4 w-4' />} title='About Me' subtitle='Profile' />
        <div className='grid items-stretch gap-6 md:grid-cols-2'>
          <GlassCard>

            <p className="text-gray-300 leading-relaxed">
              I’m a Software Development Engineer with 7+ years of experience designing, building, and maintaining
              distributed systems and cloud-native applications. Proficient in C#/.NET, PowerShell scripting, and
              Azure platform services including Azure SQL, Service Fabric, and Data Factory.
            </p>

            <p className="text-gray-400 mt-4 leading-relaxed">
              I have a strong foundation in data structures, algorithms, and CI/CD automation, with hands-on experience
              across the full SDLC in Agile/SCRUM environments. Focused on delivering reliable, scalable backend systems
              and automating deployment pipelines for efficient delivery.
            </p>

            <div className='mt-6 flex flex-wrap gap-3'>
              <NeonPill><Zap className='h-4 w-4' /> FastAPI • Flask</NeonPill>
              <NeonPill><Code2 className='h-4 w-4' /> React • TypeScript • Tailwind</NeonPill>
              <NeonPill><Server className='h-4 w-4' /> .NET • Azure • Terraform</NeonPill>
              <NeonPill><Brain className='h-4 w-4' /> AI • ML • NLP</NeonPill>
              <NeonPill><Globe className='h-4 w-4' /> RAG • LangChain • n8n</NeonPill>
              <NeonPill><Database className='h-4 w-4' /> SQL • PowerBI • MongoDB</NeonPill>
            </div>
          </GlassCard>
          <GlassCard>
            <motion.div className='relative h-56 w-full overflow-hidden rounded-xl' {...float}>
              <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(236,72,153,0.35),transparent_45%),radial-gradient(ellipse_at_bottom_right,rgba(14,165,233,0.35),transparent_45%)]' />
              <div className='absolute inset-0 grid place-items-center text-center'>
                <div>
                  <div className='text-5xl font-black text-white tracking-tight'>10<span className='text-fuchsia-300'>+</span></div>
                  <div className='mt-1 text-sm uppercase tracking-widest text-white/70'>Years Experience</div>
                </div>
              </div>
            </motion.div>
            <h3 className="text-xl font-semibold text-white mb-1">Data & ML Engineer | Full-Stack | Cloud | AI Systems</h3>
            <p className="text-sm text-gray-400 mb-4">2016 – Present</p>
            <p className="text-gray-300 mb-4">
              I build scalable apps and automation pipelines using <span className="text-blue-400">.NET Core</span>, <span className="text-teal-400">React</span>, and <span className="text-yellow-400">Python</span> — bridging clean code with cloud efficiency.
            </p>

            <ul className="grid sm:grid-cols-2 gap-2 text-gray-400 mb-4">
              <li>🖥️ <span className="text-white">Backend:</span> ASP.NET Core, FastAPI, Flask</li>
              <li>🎨 <span className="text-white">Frontend:</span> React, TypeScript, Tailwind</li>
              <li>☁️ <span className="text-white">Cloud:</span> Azure, AWS, Terraform, Docker</li>
              <li>🧠 <span className="text-white">Data:</span> SQL, MongoDB, PowerBI, KQL</li>
              <li>⚙️ <span className="text-white">DevOps:</span> Azure DevOps, GitHub Actions</li>
            </ul>

            <p className="text-sm text-gray-400 italic">
              🚀 Cut downtime 60% through Azure microservices  •  ⚙️ CI/CD reduced deploys from days → minutes  •  📊 Built live dashboards with React + PowerBI
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
