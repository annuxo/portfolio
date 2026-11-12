'use client'

import { useState } from 'react'
import { Reveal } from './Reveal'
import { experience } from '@/data'
import { Briefcase, FileText, ArrowUpRight } from 'lucide-react'
import CertificateModal from './CertificateModal'

export default function Experience() {
  const [viewer, setViewer] = useState<{ title: string; src: string } | null>(null)
  const openViewer = (title: string, src: string) => setViewer({ title, src })

  return (
    <section id="experience" className="section-padding bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-accent" />
            <span className="text-sm uppercase tracking-[0.2em] text-warm-gray">
              Experience
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05] text-balance mb-16">
            Where I&rsquo;ve <span className="italic text-accent">built things.</span>
          </h2>
        </Reveal>

        <div className="space-y-0">
          {experience.map((job, i) => (
            <Reveal key={i} delay={0.15 + i * 0.1}>
              <article className="group relative py-10 border-b border-light-gray last:border-b-0">
                <div className="grid md:grid-cols-12 gap-6 md:gap-10">
                  {/* Left: company + meta */}
                  <div className="md:col-span-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/15 text-accent">
                        <Briefcase size={14} />
                      </span>
                      <h3 className="font-display text-xl md:text-2xl text-ink group-hover:text-accent transition-colors duration-300">
                        {job.company}
                      </h3>
                    </div>
                    <p className="text-warm-gray text-sm mt-1 pl-11">
                      {job.title}
                    </p>
                    <span className="inline-block mt-2 pl-11 text-xs uppercase tracking-widest text-warm-gray/70">
                      {job.period}
                    </span>
                  </div>

                  {/* Right: achievements */}
                  <div className="md:col-span-8">
                    <p className="text-ink/80 leading-relaxed mb-4">
                      {job.summary}
                    </p>
                    <ul className="space-y-2.5">
                      {job.achievements.map((achievement, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm md:text-base text-ink/75 leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                    {job.certificate && (
                      <button
                        type="button"
                        onClick={() =>
                          openViewer(
                            `${job.title} — ${job.company}`,
                            job.certificate!
                          )
                        }
                        aria-label={`View ${job.title} certificate`}
                        className="mt-5 inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-dark transition-colors group/link cursor-pointer"
                      >
                        <FileText size={15} />
                        <span>Certificate</span>
                        <ArrowUpRight
                          size={14}
                          className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                        />
                      </button>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <CertificateModal
        open={viewer !== null}
        title={viewer?.title ?? ''}
        src={viewer?.src ?? ''}
        onClose={() => setViewer(null)}
      />
    </section>
  )
}
