'use client'

import { useState } from 'react'
import { Reveal } from './Reveal'
import { education, certifications, leadership } from '@/data'
import { GraduationCap, Award, Users, FileText, ArrowUpRight } from 'lucide-react'
import CertificateModal from './CertificateModal'

export default function Education() {
  const [viewer, setViewer] = useState<{ title: string; src: string } | null>(null)
  const openViewer = (title: string, src: string) => setViewer({ title, src })

  return (
    <section id="education" className="section-padding bg-light-gray/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-accent" />
            <span className="text-sm uppercase tracking-[0.2em] text-warm-gray">
              Education & Leadership
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05] text-balance mb-16">
            Degrees, <span className="italic text-accent">credentials &amp; drive.</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h3 className="flex items-center gap-2 font-display text-xl text-ink mb-8">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/15 text-accent">
                <GraduationCap size={16} />
              </span>
              Education
            </h3>
            <div className="space-y-0">
              {education.map((edu) => (
                <Reveal key={edu.degree}>
                  <div className="relative py-6 border-b border-light-gray last:border-b-0">
                    <div className="text-sm text-accent font-medium mb-1">
                      {edu.year}
                    </div>
                    <div className="font-display text-lg text-ink">{edu.degree}</div>
                    <div className="text-sm text-warm-gray mt-1">{edu.institution}</div>
                    <div className="text-sm text-ink/70 mt-0.5">{edu.score}</div>
                  </div>
                </Reveal>
              ))}
            </div>

            <h3 className="flex items-center gap-2 font-display text-xl text-ink mt-12 mb-8">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/15 text-accent">
                <Award size={16} />
              </span>
              Certifications
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {certifications.map((cert) => {
                const clickable = Boolean(cert.file)
                const inner = (
                  <>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-sm font-medium text-ink transition-colors duration-300 group-hover/cert:text-accent">
                          {cert.name}
                        </div>
                        <div className="text-xs text-warm-gray mt-1">
                          {cert.issuer} · {cert.year}
                        </div>
                      </div>
                      {clickable ? (
                        <span className="mt-1 flex items-center gap-1 text-xs font-medium text-accent shrink-0">
                          <FileText size={13} />
                          <span className="hidden sm:inline">View</span>
                          <ArrowUpRight
                            size={12}
                            className="transition-transform duration-300 group-hover/cert:translate-x-0.5 group-hover/cert:-translate-y-0.5"
                          />
                        </span>
                      ) : (
                        <span className="mt-1 text-xs text-warm-gray/50 shrink-0">PDF soon</span>
                      )}
                    </div>
                  </>
                )
                return (
                  <Reveal key={cert.name}>
                    {clickable ? (
                      <button
                        type="button"
                        onClick={() => openViewer(cert.name, cert.file!)}
                        aria-label={`View ${cert.name} certificate`}
                        className="group/cert w-full text-left bg-ivory rounded-xl px-4 py-3 border border-light-gray hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 cursor-pointer"
                      >
                        {inner}
                      </button>
                    ) : (
                      <div className="group/cert bg-ivory rounded-xl px-4 py-3 border border-light-gray/70 transition-colors duration-300">
                        {inner}
                      </div>
                    )}
                  </Reveal>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="flex items-center gap-2 font-display text-xl text-ink mb-8">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/15 text-accent">
                <Users size={16} />
              </span>
              Leadership & Extracurriculars
            </h3>
            <div className="space-y-0">
              {leadership.map((role) => (
                <Reveal key={role.role}>
                  <div className="relative py-6 border-b border-light-gray last:border-b-0">
                    <div className="text-sm text-accent font-medium mb-1">
                      {role.period}
                    </div>
                    <div className="font-display text-lg text-ink">{role.role}</div>
                    <div className="text-sm text-warm-gray mt-1">{role.organisation}</div>
                    <ul className="mt-3 space-y-1.5">
                      {role.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 text-sm text-ink/75">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
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
