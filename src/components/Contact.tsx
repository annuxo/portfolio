'use client'

import { Reveal } from './Reveal'
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react'
import { profile } from '@/data'

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-accent" />
            <span className="text-sm uppercase tracking-[0.2em] text-warm-gray">
              Contact
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl text-ink leading-[1.05] text-balance mb-12">
            Let&rsquo;s <span className="italic text-accent">connect.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-lg md:text-xl text-ink/80 max-w-2xl leading-relaxed mb-12">
            I&rsquo;m actively seeking internship and entry-level roles in Finance, Business Analytics, and Marketing Strategy. If you think I&rsquo;d be a good fit, I&rsquo;d love to hear from you.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
              { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
              { icon: Linkedin, label: 'LinkedIn', value: 'annu-priya', href: profile.linkedin },
              { icon: Github, label: 'GitHub', value: 'annuxo', href: profile.github },
            ].map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.label !== 'Email' && contact.label !== 'Phone' ? '_blank' : undefined}
                rel={contact.label !== 'Email' && contact.label !== 'Phone' ? 'noopener noreferrer' : undefined}
                className="group flex flex-col gap-2 p-5 rounded-2xl border border-light-gray hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
              >
                <span className="text-warm-gray text-xs uppercase tracking-widest">
                  {contact.label}
                </span>
                <span className="text-sm text-ink group-hover:text-accent transition-colors duration-300">
                  {contact.value}
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        {/* Testimonials placeholder */}
        <Reveal delay={0.35}>
          <div className="mb-16">
            <h3 className="font-display text-2xl md:text-3xl text-ink mb-8">
              Kind <span className="italic text-accent">words.</span>
            </h3>
            <div className="bg-light-gray/60 rounded-2xl p-8 md:p-12 border border-light-gray border-dashed flex flex-col items-center text-center max-w-2xl mx-auto">
              <span className="text-4xl text-accent mb-6">&ldquo;</span>
              <p className="text-lg md:text-xl text-ink/70 italic leading-relaxed">
                [ADD: testimonial from a manager, professor, or mentor here. A quote + name + role + photo placeholder.]
              </p>
              <span className="mt-6 text-sm text-warm-gray">
                — [Name], [Role], [Organisation]
              </span>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Footer */}
      <footer className="border-t border-light-gray">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <span className="text-xs text-warm-gray">
              © {new Date().getFullYear()} Annu Priya
            </span>
            <span className="text-xs text-warm-gray/50">
              · {profile.location}
            </span>
          </div>
          <div className="flex items-center gap-1 text-xs text-warm-gray/60">
            <span>Designed &amp; built with care</span>
          </div>
        </div>
      </footer>
    </section>
  )
}
