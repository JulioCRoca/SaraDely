import { motion } from 'motion/react'
import { images } from '@/lib/images'
import { useState } from 'react'

interface GalleryImageProps {
  src: string
  alt: string
  gradient: string
  className?: string
  style?: React.CSSProperties
}

function GalleryImage({ src, alt, gradient, className = '', style }: GalleryImageProps) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  return (
    <div className={`relative overflow-hidden group cursor-pointer ${gradient} ${className}`} style={style}>
      {!error && (
        <img
          src={src}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-cover transition-[opacity,transform] duration-700 ease-out group-hover:scale-[1.03] ${loaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      )}
      {/* Subtle image outline */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ boxShadow: 'inset 0 0 0 1px oklch(0 0 0 / 0.06)' }}
        aria-hidden="true"
      />
    </div>
  )
}

const gradients = [
  'bg-gradient-to-br from-beige-light to-blush',
  'bg-gradient-to-br from-blush to-cream',
  'bg-gradient-to-br from-cream to-beige-light',
  'bg-gradient-to-br from-beige to-blush',
  'bg-gradient-to-br from-blush-deep/30 to-beige-light',
]

const alts = [
  'Torta corona dorada sobre base negra — SaraDely Cakes',
  'Torta quinceañera cobre con flores rosas — SaraDely Cakes',
  'Torta de comunión rosa con macarons — SaraDely Cakes',
  'Torta corazón con rosas en relieve — SaraDely Cakes',
  'Torta drip de chocolate con Oreos y Ferrero — SaraDely Cakes',
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function GallerySection() {
  return (
    <section id="creaciones" className="bg-cream py-28 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-14 md:mb-16"
        >
          <div className="flex items-center gap-4 mb-5">
            <span className="block w-12 h-px bg-gold" aria-hidden="true" />
            <p className="font-display italic text-brand text-base tracking-widest">
              Galería
            </p>
          </div>
          <h2
            className="font-display font-light text-brown-dark leading-tight"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}
          >
            Nuestras <span className="italic">creaciones.</span>
          </h2>
        </motion.div>

        {/* Editorial grid — desktop */}
        <motion.div
          className="hidden md:grid gap-3"
          style={{
            gridTemplateColumns: 'repeat(12, 1fr)',
            gridTemplateRows: '340px 280px',
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} style={{ gridColumn: '1/5', gridRow: '1/3' }}>
            <GalleryImage
              src={images.gallery[0]}
              alt={alts[0]}
              gradient={gradients[0]}
              className="w-full h-full"
            />
          </motion.div>
          <motion.div variants={itemVariants} style={{ gridColumn: '5/9', gridRow: '1/2' }}>
            <GalleryImage
              src={images.gallery[1]}
              alt={alts[1]}
              gradient={gradients[1]}
              className="w-full h-full"
            />
          </motion.div>
          <motion.div variants={itemVariants} style={{ gridColumn: '9/13', gridRow: '1/2' }}>
            <GalleryImage
              src={images.gallery[2]}
              alt={alts[2]}
              gradient={gradients[2]}
              className="w-full h-full"
            />
          </motion.div>
          <motion.div variants={itemVariants} style={{ gridColumn: '5/9', gridRow: '2/3' }}>
            <GalleryImage
              src={images.gallery[3]}
              alt={alts[3]}
              gradient={gradients[3]}
              className="w-full h-full"
            />
          </motion.div>
          <motion.div variants={itemVariants} style={{ gridColumn: '9/13', gridRow: '2/3' }}>
            <GalleryImage
              src={images.gallery[4]}
              alt={alts[4]}
              gradient={gradients[4]}
              className="w-full h-full"
            />
          </motion.div>
        </motion.div>

        {/* Mobile grid */}
        <motion.div
          className="md:hidden grid grid-cols-2 gap-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={containerVariants}
        >
          {images.gallery.map((src, i) => (
            <motion.div
              key={src}
              variants={itemVariants}
              className={i === 0 ? 'col-span-2' : ''}
            >
              <GalleryImage
                src={src}
                alt={alts[i] ?? `Creación SaraDely Cakes ${i + 1}`}
                gradient={gradients[i % gradients.length]}
                className="w-full"
                style={{ aspectRatio: i === 0 ? '16/9' : '1/1' }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
