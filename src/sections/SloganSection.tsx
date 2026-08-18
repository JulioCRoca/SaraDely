import { motion } from 'motion/react'

export default function SloganSection() {
  return (
    <section className="relative bg-blush py-28 md:py-44 px-6 overflow-hidden">

      {/* Degradado superior: Cream → Blush */}
      <div
        className="absolute top-0 left-0 w-full h-32 md:h-40 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, #FFF8F6 0%, #FFF8F6 15%, #FFEBF3 100%)',
        }}
        aria-hidden="true"
      />

      {/* Contenido */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{
            duration: 0.9,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {/* Animated gold top line */}
          <div className="flex justify-center mb-10">
            <motion.div
              className="h-px bg-gold"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 1.2,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.1,
              }}
              style={{
                originX: 0.5,
                width: '120px',
              }}
              aria-hidden="true"
            />
          </div>

          <p className="font-display italic text-brown-mid text-base md:text-lg tracking-widest uppercase mb-8">
            Nuestro slogan
          </p>

          <h2
            className="font-display font-light leading-none text-coral mb-4"
            style={{
              fontSize: 'clamp(3.5rem, 12vw, 9rem)',
            }}
          >
            Bocados
          </h2>

          <h2
            className="font-display font-light leading-none text-coral mb-12"
            style={{
              fontSize: 'clamp(3.5rem, 12vw, 9rem)',
            }}
          >
            de Amor
          </h2>

          {/* Animated gold bottom line */}
          <div className="flex justify-center mb-10">
            <motion.div
              className="h-px bg-gold"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 1.2,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.2,
              }}
              style={{
                originX: 0.5,
                width: '120px',
              }}
              aria-hidden="true"
            />
          </div>

          <p className="font-display italic text-brown-mid text-xl md:text-2xl font-light">
            Cada detalle, hecho con cariño.
          </p>
        </motion.div>
      </div>

      {/* Degradado inferior: Blush → Cream */}
      <div
        className="absolute bottom-0 left-0 w-full h-32 md:h-40 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, #FFEBF3 0%, #FFEBF3 15%, #FFF8F6 100%)',
        }}
        aria-hidden="true"
      />

    </section>
  )
}