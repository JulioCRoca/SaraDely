import BrandLogo from '@/components/BrandLogo'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Creaciones', href: '#creaciones' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  return (
    <footer className="bg-brown-dark text-cream/80 py-16 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 pb-12 border-b border-cream/10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <BrandLogo variant="light" size="md" />
            <p className="font-display italic text-gold text-sm mt-1">"Bocados de Amor"</p>
            <p className="text-sm leading-relaxed text-cream/60 max-w-xs">
              Repostería artesanal hecha con dedicación, cuidado y amor.
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Navegación del footer">
            <p className="text-xs tracking-widest uppercase text-cream/40 mb-5 font-body">Navegación</p>
            <ul className="flex flex-col gap-3" role="list">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-cream/70 hover:text-cream transition-colors duration-200 font-body tracking-wide"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact placeholder */}
          <div>
            <p className="text-xs tracking-widest uppercase text-cream/40 mb-5 font-body">Contacto</p>
            <ul className="flex flex-col gap-3" role="list">
              {[
                { label: 'Teléfono', value: '70821793' },
                { label: 'Instagram', value: 'SaraDely Cakes' },
                { label: 'Email', value: '[Tu email]' },
              ].map(({ label, value }) => (
                <li key={label} className="text-sm">
                  <span className="text-cream/40 mr-2">{label}:</span>
                  <span
                    className={`font-display italic ${value.includes('[') ? 'text-cream/30' : 'text-cream/80'}`}
                  >
                    {value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-8">
          <p className="text-xs text-cream/30 font-body tracking-wide">
            © {new Date().getFullYear()} SaraDely Cakes. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2">
            <span className="block w-8 h-px bg-gold/30" aria-hidden="true" />
            <span className="font-display italic text-gold/50 text-xs">Bocados de Amor</span>
            <span className="block w-8 h-px bg-gold/30" aria-hidden="true" />
          </div>
        </div>
      </div>
    </footer>
  )
}
