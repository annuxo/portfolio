'use client'

import { Reveal } from './Reveal'
import { profile } from '@/data'
import { Trophy, Palette, BookOpen } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="section-padding bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-accent" />
            <span className="text-sm uppercase tracking-[0.2em] text-warm-gray">
              About
            </span>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-12 gap-12 lg:gap-16">
          <div className="md:col-span-7">
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05] text-balance">
                Where the ledger ends,{' '}
                <span className="italic text-accent">the story begins.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-8 text-lg md:text-xl text-ink/80 leading-relaxed">
                {profile.bio}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="mt-6 text-base md:text-lg text-warm-gray leading-relaxed italic">
                When I&rsquo;m not wrangling spreadsheets, you&rsquo;ll find me at the table tennis table, on a tennis court, or sketching in a corner of Art Villa. I believe the best analysts are well-rounded people — the curiosity that drives a campaign is the same curiosity that surfaces an anomaly in the data.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <Reveal delay={0.4}>
              <div className="bg-light-gray/60 rounded-2xl p-8 md:p-10 border border-light-gray">
                <h3 className="font-display text-2xl text-ink mb-6">Beyond the desk</h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <span className="mt-1 flex items-center justify-center w-9 h-9 rounded-full bg-accent/15 text-accent shrink-0">
                      <Trophy size={16} />
                    </span>
                    <div>
                      <div className="font-medium text-ink">Table Tennis Captain</div>
                      <div className="text-sm text-warm-gray mt-1">
                        Captain of Bharati College&rsquo;s squad — 2nd in Intra-College Sports Day &amp; IHE Jazba tournament.
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="mt-1 flex items-center justify-center w-9 h-9 rounded-full bg-accent/15 text-accent shrink-0">
                      <Palette size={16} />
                    </span>
                    <div>
                      <div className="font-medium text-ink">Visual Arts</div>
                      <div className="text-sm text-warm-gray mt-1">
                        Member of Art Villa — campus exhibitions &amp; promotional creative.
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="mt-1 flex items-center justify-center w-9 h-9 rounded-full bg-accent/15 text-accent shrink-0">
                      <BookOpen size={16} />
                    </span>
                    <div>
                      <div className="font-medium text-ink">Lifelong Learner</div>
                      <div className="text-sm text-warm-gray mt-1">
                        Currently exploring Generative AI applications for business analytics &amp; operations workflows.
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
