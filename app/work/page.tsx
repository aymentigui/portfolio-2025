import type { Metadata } from 'next'
import Work from './work'

// SEO Metadata
export const metadata: Metadata = {
  title: 'Portfolio - Web Development Projects | React, Next.js, Laravel, Flutter, WordPress',
  description: 'Explore my portfolio of 18+ professional projects including enterprise platforms, e-commerce stores, mobile apps, WordPress sites, and custom plugins. Specializing in Next.js, React, Laravel, Flutter, and WooCommerce development.',
  keywords: [
    'web development portfolio',
    'React projects',
    'Next.js portfolio',
    'Laravel projects',
    'Flutter mobile apps',
    'WordPress development',
    'WooCommerce projects',
    'full stack developer portfolio',
    'enterprise platform development',
    'e-commerce development',
    'custom plugin development',
    'mobile app portfolio',
    'web developer work',
    'Algeria web developer',
    'professional web projects'
  ],
  authors: [{ name: 'Tighiouart Aimen Abdelghafour' }],
  openGraph: {
    title: 'Portfolio - Professional Web Development Projects',
    description: 'View 18+ completed projects: enterprise platforms, e-commerce stores, mobile apps, WordPress sites, and custom solutions.',
    type: 'website',
    locale: 'en_US',
    url: 'https://aimen-blog.com/work',
    siteName: 'Aimen Tighiouart Portfolio',
    images: [
      {
        url: 'https://aimen-blog.com/ana.png',
        width: 1200,
        height: 630,
        alt: 'Web Development Portfolio - Aimen Tighiouart',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio - Professional Web Development Projects',
    description: 'Explore 18+ web development projects: Next.js, React, Laravel, Flutter, WordPress',
    images: ['https://aimen-blog.com/ana.png'],
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
    canonical: 'https://aimen-blog.com/work',
  },
}

// JSON-LD Structured Data for Portfolio/CreativeWork
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Web Development Portfolio',
  description: 'Portfolio showcasing professional web development projects including enterprise platforms, e-commerce stores, mobile applications, and WordPress sites',
  url: 'https://aimen-blog.com/work',
  author: {
    '@type': 'Person',
    name: 'Tighiouart Aimen Abdelghafour',
    jobTitle: 'Full Stack Developer',
    url: 'https://aimen-blog.com'
  },
  hasPart: [
    {
      '@type': 'CreativeWork',
      name: 'Central Command & Operations Platform – EL DJAMIYA',
      description: 'Enterprise platform for the biggest bus company in Africa',
      keywords: 'Next.js, Node.js, MySQL, Enterprise Platform',
      image: 'https://aimen-blog.com/projects/pccdnk.webp'
    },
    {
      '@type': 'SoftwareApplication',
      name: 'QR Code Scanning App for Controllers',
      description: 'Flutter application for bus controllers',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Android, iOS',
      keywords: 'Flutter, Mobile App, QR Code',
      image: 'https://aimen-blog.com/projects/supervisorapp.webp'
    },
    {
      '@type': 'WebSite',
      name: 'Official Transport Platform – IATF Algeria',
      description: 'Multilingual showcase website for IATF event transport service',
      keywords: 'Next.js, TypeScript, Event Platform',
      image: 'https://aimen-blog.com/projects/iatf_website.webp'
    }
  ],
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://aimen-blog.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Portfolio',
        item: 'https://aimen-blog.com/work'
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
      <Work />
    </>
  )
}

export default Page