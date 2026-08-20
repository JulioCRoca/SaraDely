import { motion } from 'motion/react'

const ease = [0.25, 0.1, 0.25, 1] as const

const paragraphs = [
  'Todo comenzó con el amor por el arte, la repostería y la pasión por la búsqueda de un buen pastel. Fue en el año 2015 que encontramos verdaderamente en la pastelería personalizada la felicidad de ver la satisfacción en los ojos de nuestros clientes.',
  'Las personalizaciones realizadas solo para ellos nos impulsaron a cambiar la marcha y centrarnos cada vez más en una buena experiencia y en un viaje de sensaciones. No ofrecemos solo un pastel: ofrecemos la oportunidad de enamorar a sus seres queridos con una obra gastronómica que se convertirá en el corazón de su celebración, cautivando los sentidos y atesorando recuerdos inolvidables.',
]

export default function HistoriaSection() {
  return (
    <section
      id="historia"
      className="relative bg-blush py-28 md:py-40 px-6 overflow-hidden"
    >

      {/* =========================================================
          FONDO CENTRAL
          ========================================================= */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 45%, #FFD8E8 0%, #FFEBF3 45%, #FFEBF3 100%)',
        }}
        aria-hidden="true"
      />

      {/* =========================================================
          DEGRADADO SUPERIOR
          Cream → Blush
          ========================================================= */}
      <div
        className="absolute top-0 left-0 w-full h-32 md:h-40 pointer-events-none z-[1]"
        style={{
          background:
            'linear-gradient(to bottom, #FFF8F6 0%, #FFF8F6 10%, #FFEBF3 100%)',
        }}
        aria-hidden="true"
      />

      {/* =========================================================
          CONTENIDO
          ========================================================= */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >

          {/* Eyebrow */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
              },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.85,
                  ease,
                },
              },
            }}
            className="flex items-center justify-center gap-4 mb-10"
          >
            <motion.span
              className="block h-px bg-gold"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease,
                delay: 0.1,
              }}
              style={{
                originX: 0.5,
                width: 48,
              }}
              aria-hidden="true"
            />

            <span className="font-display italic text-brand text-sm tracking-widest">
              SaraDely Cakes
            </span>

            <motion.span
              className="block h-px bg-gold"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease,
                delay: 0.1,
              }}
              style={{
                originX: 0.5,
                width: 48,
              }}
              aria-hidden="true"
            />
          </motion.div>

          {/* Título */}
          <motion.h2
            variants={{
              hidden: {
                opacity: 0,
                y: 24,
              },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.9,
                  ease,
                },
              },
            }}
            className="font-display font-light text-brown-dark leading-tight mb-12"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            }}
          >
            Nuestra <span className="italic">Historia</span>
          </motion.h2>

          {/* Texto */}
          <div className="space-y-6">
            {paragraphs.map((text, i) => (
              <motion.p
                key={i}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.85,
                      ease,
                    },
                  },
                }}
                className="text-brown-mid text-lg md:text-xl leading-relaxed"
              >
                {text}
              </motion.p>
            ))}
          </div>

          {/* Detalle decorativo inferior */}
          <motion.div
            initial={{
              opacity: 0,
              scaleX: 0,
            }}
            whileInView={{
              opacity: 1,
              scaleX: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              ease,
              delay: 0.4,
            }}
            className="mx-auto mt-12 h-px bg-gold"
            style={{
              width: '80px',
            }}
            aria-hidden="true"
          />

        </motion.div>
      </div>

      {/* =========================================================
          DEGRADADO INFERIOR
          Blush → Cream
          ========================================================= */}
      <div
        className="absolute bottom-0 left-0 w-full h-32 md:h-40 pointer-events-none z-[1]"
        style={{
          background:
            'linear-gradient(to bottom, #FFEBF3 0%, #FFEBF3 10%, #FFF8F6 100%)',
        }}
        aria-hidden="true"
      />

    </section>
  )
}