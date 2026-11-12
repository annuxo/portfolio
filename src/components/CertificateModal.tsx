'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Download, ExternalLink, X } from 'lucide-react'
import { useEffect, useRef } from 'react'

interface CertificateModalProps {
  open: boolean
  title: string
  src: string
  onClose: () => void
}

// In-page certificate viewer: shows the PDF in an elegant overlay
// with download + open-full-size actions. Escape or overlay click closes.
export default function CertificateModal({ open, title, src, onClose }: CertificateModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden' // lock background scroll
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open, onClose])

  const iconBtn =
    'p-2 rounded-full text-warm-gray hover:text-ink hover:bg-light-gray/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent'

  return (
    <AnimatePresence>
      {open && src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] overflow-y-auto bg-ink/70 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`View ${title} certificate`}
        >
          <div className="flex min-h-full items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-4xl bg-ivory rounded-2xl overflow-hidden shadow-2xl shadow-ink/40 flex flex-col"
            >
            <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-light-gray">
              <div className="min-w-0">
                <div className="text-[11px] uppercase tracking-[0.2em] text-warm-gray">Certificate</div>
                <div className="font-display text-lg text-ink truncate">{title}</div>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <a
                  href={src}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download certificate PDF"
                  className={iconBtn}
                >
                  <Download size={16} />
                </a>
                <a
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open certificate in new tab"
                  className={iconBtn}
                >
                  <ExternalLink size={16} />
                </a>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={onClose}
                  aria-label="Close certificate viewer"
                  className={iconBtn}
                >
                  <X size={18} />
                </button>
              </div>
            </div>
            <iframe
              src={src}
              title={title}
              className="w-full h-[70vh] bg-white"
            />
          </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
