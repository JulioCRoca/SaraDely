import { motion } from 'motion/react'

const ease = [0.25, 0.1, 0.25, 1] as const

const testimonials = [
  {
    name: 'Cecilia Rivero',
    quote: 'Gracias a ud q siempre nos deleita con sus riquisimas tortitas.',
  },
  {
    name: 'Nancy Tito',
    quote: 'La torta rica, causo sensacion.',
  },
  {
    name: 'Franco Rocha',
    quote:
      'Todo excelente, les gustó a los invitados. Ya pa otro cumpleañitos le via estar pidiendo otra.',
  },
  {
    name: 'Katherine Suárez',
    quote: 'Todas sus tortas son ricas, a mi familia les gusta.',
  },
  {
    name: 'Wilma Salas',
    quote:
      'Muchísimas gracias, estaba rica la torta, todos querían llevarse en el bolsillo.',
  },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease,
    },
  },
}

interface CardProps {
  name: string
  quote: string
}

function TestimonialCard({ name, quote }: CardProps) {
  return (
    <article className="flex flex-col gap-4 py-8 px-7 bg-cream border border-beige-light/50">
      {/* Decorative quote mark */}
      <span
        className="font-display text-gold/50 leading-none select-none"
        style={{
          fontSize: '3.5rem',
          lineHeight: 1,
        }}
        aria-hidden="true"
      >
        "
      </span>

      <p className="font-body text-brown-mid leading-relaxed text-base flex-1">
        {quote}
      </p>

      <div className="flex items-center gap-3 pt-2">
        <span
          className="block w-6 h-px bg-gold"
          aria-hidden="true"
        />

        <span className="font-display italic text-brown-dark text-base">
          {name}
        </span>
      </div>
    </article>
  )
}

export default function TestimonialsSection() {
  const left = testimonials.slice(0, 2)
  const center = testimonials[2]
  const right = testimonials.slice(3, 5)

  return (
    <section
      className="relative bg-blush py-28 md:py-36 px-6 overflow-hidden"
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
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: '-80px',
          }}
          transition={{
            duration: 0.9,
            ease,
          }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-4 mb-5">
            <span
              className="block w-12 h-px bg-gold"
              aria-hidden="true"
            />

            <p className="font-display italic text-brand text-base tracking-widest">
              Lo que dicen
            </p>
          </div>

          <h2
            className="font-display font-light text-brown-dark leading-tight"
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            }}
          >
            Nuestros <span className="italic">clientes.</span>
          </h2>
        </motion.div>

        {/* =====================================================
            DESKTOP
            3-column editorial layout
            ===================================================== */}
        <motion.div
          className="hidden md:grid grid-cols-3 gap-5 items-center"
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            margin: '-60px',
          }}
          variants={containerVariants}
        >

          {/* Left column */}
          <div className="flex flex-col gap-5">
            {left.map(({ name, quote }) => (
              <motion.div
                key={name}
                variants={itemVariants}
              >
                <TestimonialCard
                  name={name}
                  quote={quote}
                />
              </motion.div>
            ))}
          </div>

          {/* Center featured */}
          <motion.div
            variants={itemVariants}
            className="self-center"
          >
            <div className="relative">

              <div
                className="absolute -inset-1 pointer-events-none"
                style={{
                  boxShadow:
                    '0 0 0 1px rgba(212,171,84,0.3)',
                }}
                aria-hidden="true"
              />

              <TestimonialCard
                name={center.name}
                quote={center.quote}
              />

            </div>
          </motion.div>

          {/* Right column */}
          <div className="flex flex-col gap-5">
            {right.map(({ name, quote }) => (
              <motion.div
                key={name}
                variants={itemVariants}
              >
                <TestimonialCard
                  name={name}
                  quote={quote}
                />
              </motion.div>
            ))}
          </div>

        </motion.div>

        {/* =====================================================
            MOBILE
            Single column
            ===================================================== */}
        <motion.div
          className="md:hidden flex flex-col gap-5"
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            margin: '-60px',
          }}
          variants={containerVariants}
        >
          {testimonials.map(({ name, quote }) => (
            <motion.div
              key={name}
              variants={itemVariants}
            >
              <TestimonialCard
                name={name}
                quote={quote}
              />
            </motion.div>
          ))}
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