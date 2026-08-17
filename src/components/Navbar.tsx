import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import BrandLogo from '@/components/BrandLogo'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Creaciones', href: '#creaciones' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => setMobileOpen(false)

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow] duration-400 ease-out"
        style={{
          backgroundColor: scrolled ? 'rgba(255,248,246,0.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          boxShadow: scrolled ? '0 1px 0 rgba(216,174,137,0.25)' : 'none',
        }}
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
      >
        <nav
          className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 h-20"
          aria-label="Navegación principal"
        >
          {/* Logo */}
          <a href="#inicio" aria-label="SaraDely Cakes — Inicio">
            <BrandLogo variant="dark" size="md" className="rounded-[18px]" />
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="font-body text-sm tracking-widest uppercase text-brown-mid hover:text-brown-dark transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contacto"
            className="hidden md:inline-flex items-center gap-2 border border-brand text-brand px-5 py-2.5 text-xs font-body tracking-widest uppercase hover:bg-brand hover:text-cream transition-[background-color,color] duration-200 active:scale-[0.96]"
          >
            Haz tu pedido
          </a>

          {/* Hamburger */}
          <button
            type="button"
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span
              className="block w-6 h-px bg-brown-dark transition-transform duration-300 origin-center"
              style={{ transform: mobileOpen ? 'rotate(45deg) translateY(4px)' : 'none' }}
            />
            <span
              className="block w-4 h-px bg-brown-dark transition-[width,opacity] duration-300"
              style={{ width: mobileOpen ? 0 : 16, opacity: mobileOpen ? 0 : 1 }}
            />
            <span
              className="block w-6 h-px bg-brown-dark transition-transform duration-300 origin-center"
              style={{ transform: mobileOpen ? 'rotate(-45deg) translateY(-4px)' : 'none' }}
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 bg-cream flex flex-col justify-center px-8"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <nav aria-label="Menú móvil">
              <ul className="flex flex-col gap-8" role="list">
                {navLinks.map(({ label, href }, i) => (
                  <motion.li
                    key={href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.06 }}
                  >
                    <a
                      href={href}
                      onClick={handleLinkClick}
                      className="font-display italic text-3xl text-brown-dark hover:text-brand transition-colors duration-200"
                    >
                      {label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-12">
                <a
                  href="#contacto"
                  onClick={handleLinkClick}
                  className="inline-flex items-center gap-2 bg-brand text-cream px-8 py-4 text-sm font-body tracking-widest uppercase"
                >
                  Haz tu pedido
                </a>
              </div>
            </nav>

            <p className="absolute bottom-10 left-8 font-display italic text-beige text-sm">
              "Bocados de Amor"
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
