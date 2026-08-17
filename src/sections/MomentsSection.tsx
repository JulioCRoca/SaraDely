import { motion } from 'motion/react'
import { images } from '@/lib/images'
import { useState } from 'react'

interface MomentImageProps {
  src: string
  alt: string
  gradient: string
}

function MomentImage({ src, alt, gradient }: MomentImageProps) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)
  return (
    <div className={`relative overflow-hidden aspect-[4/3] ${gradient}`}>
      {!error && (
        <img
          src={src}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      )}
    </div>
  )
}

const moments = [
  {
    title: 'Cumpleaños',
    description: 'Un año más que celebrar merece una torta hecha con el corazón.',
    image: images.moments[0],
    alt: 'Torta para cumpleaños SaraDely Cakes',
    gradient: 'bg-gradient-to-br from-beige-light to-blush',
  },
  {
    title: 'Celebraciones',
    description: 'Bodas, graduaciones, reuniones — los logros grandes y pequeños.',
    image: images.moments[1],
    alt: 'Torta para celebración SaraDely Cakes',
    gradient: 'bg-gradient-to-br from-blush to-beige-light',
  },
  {
    title: 'Momentos especiales',
    description: 'Porque a veces solo quieres regalar algo hecho con amor.',
    image: images.moments[2],
    alt: 'Postre especial SaraDely Cakes',
    gradient: 'bg-gradient-to-br from-beige-light to-cream',
  },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function MomentsSection() {
  return (
    <section className="bg-cream py-28 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16 md:mb-20"
        >
          <p className="font-display italic text-brand text-base tracking-widest mb-4">
            Para cada ocasión
          </p>
          <h2
            className="font-display font-light text-brown-dark leading-tight"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}
          >
            Creamos <span className="italic">momentos.</span>
          </h2>
          <p className="text-brown-mid text-lg mt-5 max-w-lg leading-relaxed">
            Hay momentos que merecen algo especial. Nosotros los acompañamos con sabor, detalle y cariño.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={containerVariants}
        >
          {moments.map(({ title, description, image, alt, gradient }) => (
            <motion.article key={title} variants={itemVariants} className="group">
              <div className="overflow-hidden mb-6">
                <MomentImage src={image} alt={alt} gradient={gradient} />
              </div>

              <div className="flex items-center gap-3 mb-3">
                <span className="block w-8 h-px bg-gold" aria-hidden="true" />
                <h3 className="font-display italic text-xl text-brown-dark">{title}</h3>
              </div>
              <p className="text-brown-mid leading-relaxed text-sm">{description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
