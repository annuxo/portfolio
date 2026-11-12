'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import { profile } from '@/data'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Subtle background grid + radial accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-ivory via-ivory to-light-gray/40" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="h-px w-12 bg-accent" />
            <span className="text-sm uppercase tracking-[0.2em] text-warm-gray">
              Portfolio · 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-6xl md:text-8xl lg:text-9xl font-medium tracking-tight text-ink leading-[0.95] text-balance"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-2xl md:text-3xl lg:text-4xl text-warm-gray italic mt-6 leading-snug text-balance"
          >
            {profile.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 text-lg md:text-xl text-ink/80 max-w-2xl leading-relaxed text-balance"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-ink text-ivory px-6 py-3.5 rounded-full hover:bg-accent transition-colors duration-300"
            >
              <Mail size={18} />
              <span className="text-sm font-medium">Get in touch</span>
            </a>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-ivory transition-all duration-300"
            >
              <span className="text-sm font-medium">View work</span>
            </a>
          </motion.div>

          {/* Stat strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl"
          >
            {[
              { value: '3', label: 'Internships' },
              { value: '100%', label: 'Payroll accuracy' },
              { value: '8.0', label: 'CGPA' },
              { value: '7', label: 'Certifications' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl md:text-4xl text-ink">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-warm-gray mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-warm-gray"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}
