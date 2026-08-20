import { useState } from 'react'
import { images } from '@/lib/images'

interface BrandLogoProps {
  variant?: 'dark' | 'light'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function BrandLogo({
  variant = 'dark',
  size = 'md',
  className = '',
}: BrandLogoProps) {
  const [error, setError] = useState(false)

  const src = variant === 'light' ? images.logoMark : images.logo

  // Tamaños aumentados un 50%
  const imgHeights = {
    sm: 'h-18',
    md: 'h-[90px]',
    lg: 'h-[106px]',
  }

  const textColor =
    variant === 'dark' ? 'text-brown-dark' : 'text-cream'

  const accentColor =
    variant === 'dark' ? 'text-brand' : 'text-gold'

  // Tamaños de texto aumentados un 50%
  const textSizes = {
    sm: 'text-[21px]',
    md: 'text-2xl',
    lg: 'text-[30px]',
  }

  if (!error) {
    return (
      <img
        src={src}
        alt="SaraDely Cakes"
        className={`${imgHeights[size]} w-auto object-contain ${className}`}
        onError={() => setError(true)}
      />
    )
  }

  return (
    <div
      className={`font-display leading-none ${textSizes[size]} ${className}`}
    >
      <div
        className={`tracking-[0.2em] font-light uppercase ${textColor}`}
      >
        Sara<span className="italic font-normal">Dely</span>
      </div>

      <div
        className={`text-[0.6em] tracking-[0.5em] uppercase mt-0.5 ${accentColor}`}
      >
        Cakes
      </div>
    </div>
  )
}