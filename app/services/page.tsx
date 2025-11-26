import type { Metadata } from 'next'
import Services from './services'

// SEO Metadata
export const metadata: Metadata = {
  title: 'Professional Web Development Services | Full Stack Developer',
  description: 'Expert web development services including website development, e-commerce stores, WordPress, React, Next.js, Flutter mobile apps, API development, SEO optimization, and digital marketing solutions.',
  keywords: [
    'web development services',
    'e-commerce development',
    'WordPress development',
    'React developer',
    'Next.js development',
    'Flutter mobile apps',
    'API development',
    'SEO optimization',
    'full stack developer',
    'landing page design',
    'database optimization',
    'website migration',
    'Facebook advertising',
    'Instagram marketing'
  ],
  authors: [{ name: 'Tighiouart aimen' }],
  openGraph: {
    title: 'Professional Web Development Services | Full Stack Developer',
    description: 'Expert web development services including website development, e-commerce stores, WordPress, React, Next.js, Flutter mobile apps, and more.',
    type: 'website',
    locale: 'en_US',
    url: 'https://aimen-blog.com/services',
    siteName: 'Tighiouart aimen',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Web Development Services',
    description: 'Expert web development services for businesses and brands',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://aimen-blog.com/services',
  },
}

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Tighiouart Aimen',
  description: 'Professional web development and digital services',
  url: 'https://aimen-blog.com/services',
  serviceType: 'Web Development',
  areaServed: 'Worldwide',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Development Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Professional Website Development',
          description: 'Modern, fast, and secure websites tailored to your business'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'E-commerce Store Development',
          description: 'Complete online stores with payment systems and inventory management'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Mobile App Development',
          description: 'Android and iOS mobile applications using Flutter'
        }
      }
    ]
  }
}

const Page = () => {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Services />
    </>
  )
}

export default Page