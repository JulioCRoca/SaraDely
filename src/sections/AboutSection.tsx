import { motion } from 'motion/react'

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

export default function AboutSection() {
  return (
    <section id="nosotros" className="bg-cream py-28 md:py-36 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div
            variants={reveal}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex items-center justify-center gap-4 mb-10"
          >
            <span
              className="block h-px bg-gold"
              style={{ width: 48 }}
              aria-hidden="true"
            />
            <span className="font-display italic text-brand text-sm tracking-widest">
              SaraDely Cakes
            </span>
            <span
              className="block h-px bg-gold"
              style={{ width: 48 }}
              aria-hidden="true"
            />
          </motion.div>

          <motion.h2
            variants={reveal}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-display text-4xl md:text-5xl text-brown-dark font-light leading-tight mb-8"
            style={{ textWrap: 'balance' } as React.CSSProperties}
          >
            Una torta es más<br />
            <span className="italic">que un postre.</span>
          </motion.h2>

          <motion.p
            variants={reveal}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-brown-mid text-lg leading-relaxed mb-6"
          >
            En SaraDely Cakes cada creación nace de una intención: acompañar
            los momentos que más importan. Detrás de cada capa, cada decoración
            y cada sabor hay dedicación genuina, atención al detalle y mucho amor.
          </motion.p>

          <motion.p
            variants={reveal}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-brown-mid text-lg leading-relaxed"
          >
            Porque los momentos especiales merecen algo hecho especialmente para ellos.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
