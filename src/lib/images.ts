import textLogo from '@/imports/TextLogo.png'
import logoMark from '@/imports/Sd.png'
import heroImage from '@/imports/accent-rose-cake.png'
import galleryCorona from '@/imports/gallery-corona-negra.jpg'
import galleryCobre from '@/imports/gallery-cobre-flores.jpg'
import galleryComunion from '@/imports/gallery-comunion.jpg'
import galleryCorazon from '@/imports/gallery-corazon-rosa.jpg'
import galleryChocolate from '@/imports/gallery-chocolate.jpg'

export const images = {
  logo: textLogo,
  logoMark: logoMark,

  hero: heroImage,

  gallery: [
    galleryCorona,
    galleryCobre,
    galleryComunion,
    galleryCorazon,
    galleryChocolate,
  ],

  moments: [
    galleryComunion,
    galleryCobre,
    galleryCorazon,
  ],
} as const
