'use client'

import { Reveal } from './Reveal'
import { skills } from '@/data'

// The skills section sits on the off-black background, so chips alternate
// between gold and ivory treatments to stay readable on dark.
const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  'Technical': { bg: 'bg-accent/10', text: 'text-accent-light', border: 'border-accent/30' },
  'Finance & Compliance': { bg: 'bg-ivory/8', text: 'text-ivory', border: 'border-ivory/25' },
  'Marketing & Design': { bg: 'bg-accent/10', text: 'text-accent-light', border: 'border-accent/30' },
  'Soft Skills': { bg: 'bg-ivory/8', text: 'text-ivory', border: 'border-ivory/25' },
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-ink text-ivory relative overflow-hidden">
      {/* Subtle noise/gradient bg */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-accent" />
            <span className="text-sm uppercase tracking-[0.2em] text-warm-gray">
              Skills
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance mb-16">
            Tools I <span className="italic text-accent">work with.</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {skills.map((group, i) => {
            const colors = categoryColors[group.category] || categoryColors['Technical']
            return (
              <Reveal key={group.category} delay={0.15 + i * 0.08}>
                <div>
                  <h3 className="text-sm uppercase tracking-[0.15em] text-warm-gray mb-5">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className={`inline-block px-3.5 py-1.5 rounded-full text-sm border transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-default ${
                          colors.bg
                        } ${colors.text} ${colors.border}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
