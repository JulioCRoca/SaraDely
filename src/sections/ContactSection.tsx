import { motion } from 'motion/react'

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.25, 0.1, 0.25, 1], delay },
  }),
}

export default function ContactSection() {
  return (
    <section id="contacto" className="bg-cream py-28 md:py-36 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p
            custom={0}
            variants={reveal}
            className="font-display italic text-brand text-base tracking-widest mb-6"
          >
            Contacto
          </motion.p>

          <motion.h2
            custom={0.1}
            variants={reveal}
            className="font-display font-light text-brown-dark leading-tight mb-6"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', textWrap: 'balance' } as React.CSSProperties}
          >
            ¿Tienes un momento especial
            <span className="italic"> en mente?</span>
          </motion.h2>

          <motion.p
            custom={0.2}
            variants={reveal}
            className="text-brown-mid text-lg md:text-xl leading-relaxed mb-12"
          >
            Cuéntanos qué imaginas.
          </motion.p>

          <motion.div custom={0.3} variants={reveal}>
            <a
              href={`https://wa.me/59170821793?text=${encodeURIComponent(
    "Hola SaraDely Cakes, quisiera hacer un pedido. ¿Podrían brindarme información sobre los productos disponibles?"
  )}`}
              aria-label="Haz tu pedido a SaraDely Cakes"
              className="inline-flex items-center gap-3 bg-brand text-cream px-10 py-4 font-body text-sm tracking-widest uppercase transition-[transform,box-shadow] duration-200 ease-out hover:bg-brand-light active:scale-[0.96]"
              style={{
                boxShadow: '0 4px 24px rgba(132,60,12,0.18)',
              }}
            >
              Haz tu pedido
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Contact placeholders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {[
            {
              label: 'Teléfono / WhatsApp',
              value: '70821793',
              icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M3 5a2 2 0 012-2h1.5a1 1 0 01.95.68l1 3a1 1 0 01-.23 1.05L7.2 8.8a11 11 0 004 4l1.08-1.02a1 1 0 011.05-.23l3 1a1 1 0 01.68.95V15a2 2 0 01-2 2C6.84 17 3 10.16 3 5z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
            },
            {
              label: 'Instagram',
              value: 'Saradely Cakes',
              icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <rect x="3" y="3" width="14" height="14" rx="4" />
                  <circle cx="10" cy="10" r="3.5" />
                  <circle cx="14.5" cy="5.5" r="0.75" fill="currentColor" stroke="none" />
                </svg>
              ),
            },
            {
              label: 'Correo electrónico',
              value: '[Tu email]',
              icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <rect x="2" y="4" width="16" height="12" rx="2" />
                  <path d="M2 7l8 5.5L18 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
            },
          ].map(({ label, value, icon }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 py-7 px-5 border border-beige-light/60"
              style={{ borderStyle: value.includes('[') ? 'dashed' : 'solid' }}
            >
              <span className="text-gold">{icon}</span>
              <span className="font-body text-xs tracking-widest uppercase text-brown-mid">{label}</span>
              <span
                className={`font-display italic text-base ${
                  value.includes('[') ? 'text-beige' : 'text-brown-dark'
                }`}
              >
                {value}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
