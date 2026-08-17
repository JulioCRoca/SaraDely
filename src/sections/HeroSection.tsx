import { motion } from 'motion/react'
import { images } from '@/lib/images'
import { useState } from 'react'

function HeroImage() {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  return (
    <div className="relative w-full h-full">
      {/* Gradient placeholder always behind */}
      <div className="absolute inset-0 bg-gradient-to-br from-beige-light via-blush to-cream" />
      {!error && (
        <img
          src={images.hero}
          alt="Torta artesanal SaraDely Cakes"
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      )}
      {/* Outline for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ boxShadow: 'inset 0 0 0 1px oklch(0 0 0 / 0.06)' }}
        aria-hidden="true"
      />
    </div>
  )
}

const ease = [0.25, 0.1, 0.25, 1] as const

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-cream flex flex-col md:flex-row overflow-hidden pt-20"
      aria-label="Hero SaraDely Cakes"
    >
      {/* Text column */}
      <div className="relative z-10 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 md:py-0 w-full md:w-[55%] shrink-0">
        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.3 }}
        >
          <motion.span
            className="block h-px bg-gold"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, ease, delay: 0.3 }}
            style={{ originX: 0, width: 40 }}
            aria-hidden="true"
          />
          <span className="font-display italic text-brand text-sm md:text-base tracking-widest">
            SaraDely Cakes
          </span>
        </motion.div>

        {/* Headline */}
        <div className="overflow-hidden mb-1">
          <motion.h1
            className="font-display font-light text-brown-dark leading-none"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 7rem)' }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease, delay: 0.5 }}
          >
            Bocados
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            className="font-display italic font-light text-brown-dark leading-none"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 7rem)' }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease, delay: 0.65 }}
          >
            de Amor.
          </motion.h1>
        </div>

        {/* Tagline */}
        <motion.p
          className="text-brown-mid text-lg md:text-xl leading-relaxed max-w-sm mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease, delay: 0.8 }}
        >
          Cada torta que creamos lleva dedicación, cuidado y el amor de quien
          la imagina y de quien la hace.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 1.0 }}
          className="flex items-center gap-6"
        >
          <a
            href="#creaciones"
            className="inline-flex items-center gap-3 bg-brand text-cream px-8 py-4 text-sm font-body tracking-widest uppercase transition-[transform,box-shadow] duration-200 ease-out hover:bg-brand-light active:scale-[0.96]"
            style={{ boxShadow: '0 4px 24px rgba(132,60,12,0.18)' }}
          >
            Conócenos
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#nosotros"
            className="font-display italic text-brand text-base border-b border-gold/50 pb-px hover:border-gold transition-colors duration-200"
          >
            Nuestra historia
          </a>
        </motion.div>
      </div>

      {/* Image column — desktop */}
      <motion.div
        className="hidden md:block absolute right-0 top-0 bottom-0 w-[48%]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease, delay: 0 }}
      >
        <HeroImage />
        {/* Soft left fade so it bleeds into text column */}
        <div
          className="absolute inset-y-0 left-0 w-32 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #FFF8F6, transparent)' }}
          aria-hidden="true"
        />
      </motion.div>

      {/* Image — mobile (stacked above) */}
      <motion.div
        className="md:hidden w-full h-72 order-first"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, ease, delay: 0 }}
      >
        <HeroImage />
      </motion.div>
    </section>
  )
}
