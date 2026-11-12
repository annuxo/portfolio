'use client'

import { Reveal } from './Reveal'
import { projects } from '@/data'
import { ArrowUpRight } from 'lucide-react'

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-accent" />
            <span className="text-sm uppercase tracking-[0.2em] text-warm-gray">
              Projects
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05] text-balance mb-16">
            Selected <span className="italic text-accent">work.</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, i) => (
            <Reveal key={i} delay={0.15 + i * 0.1}>
              <article className="group h-full flex flex-col rounded-2xl border border-light-gray bg-ivory hover:border-accent/40 transition-all duration-500 hover:shadow-xl hover:shadow-accent/5">
                {/* Placeholder visual */}
                <div className="relative aspect-[16/9] bg-light-gray/50 rounded-t-2xl overflow-hidden flex items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <span className="font-display text-2xl text-accent">AP</span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs uppercase tracking-widest text-warm-gray bg-ivory/90 px-3 py-1 rounded-full backdrop-blur-sm">
                      {project.period}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <div className="mb-3">
                    <h3 className="font-display text-2xl md:text-3xl text-ink group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-warm-gray mt-1">{project.subtitle}</p>
                  </div>

                  <div className="space-y-4 flex-1">
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-accent mb-1.5">
                        Problem
                      </h4>
                      <p className="text-sm text-ink/75 leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-accent mb-1.5">
                        Approach
                      </h4>
                      <p className="text-sm text-ink/75 leading-relaxed">{project.approach}</p>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-accent mb-1.5">
                        Outcome
                      </h4>
                      <p className="text-sm text-ink/75 leading-relaxed">{project.outcome}</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-light-gray flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs uppercase tracking-wider text-warm-gray bg-light-gray/60 px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-dark transition-colors group/link"
                    >
                      <span>View project</span>
                      <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                  {!project.link && (
                    <span className="mt-5 text-xs text-warm-gray/60 italic">
                      [ADD: project link]
                    </span>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
