import Link from 'next/link'
import type { Metadata } from 'next'

// GitHub Pages serves this as the site's 404 page (static export has no server)
export const metadata: Metadata = {
  title: '404 — Page not found',
}

export default function NotFound() {
  return (
    <main className="min-h-screen bg-ivory flex flex-col items-center justify-center px-6 text-center">
      <p className="text-sm uppercase tracking-[0.2em] text-warm-gray mb-4">404</p>
      <h1 className="font-display text-4xl md:text-5xl text-ink">
        This page wandered off.
      </h1>
      <p className="mt-4 text-ink/70">
        The link you followed doesn&rsquo;t exist — but the rest of the site does.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 bg-ink text-ivory px-6 py-3.5 rounded-full hover:bg-accent transition-colors duration-300"
      >
        Back to top
      </Link>
    </main>
  )
}
