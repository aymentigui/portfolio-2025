import type { Metadata } from 'next'
import Contact from './contact'

// SEO Metadata
export const metadata: Metadata = {
  title: 'Contact Me - Hire Full Stack Developer | Web Development Services',
  description: 'Get in touch for professional web development services. Available for website development, e-commerce stores, WordPress, React, Next.js, Laravel, Flutter apps, and digital solutions. Free consultation.',
  keywords: [
    'hire full stack developer',
    'web development services',
    'contact web developer',
    'freelance developer Algeria',
    'hire React developer',
    'hire Next.js developer',
    'hire Laravel developer',
    'hire Flutter developer',
    'website development quote',
    'e-commerce development services',
    'WordPress developer for hire',
    'mobile app development',
    'web developer Algiers',
    'freelance web developer'
  ],
  authors: [{ name: 'Tighiouart Aimen Abdelghafour' }],
  openGraph: {
    title: 'Contact Aimen Tighiouart - Full Stack Developer',
    description: 'Hire a professional Full Stack Developer for your web and mobile projects. React, Next.js, Laravel, Flutter, WordPress development services.',
    type: 'website',
    locale: 'en_US',
    url: 'https://aimen-blog.com/contact',
    siteName: 'Aimen Tighiouart Portfolio',
    images: [
      {
        url: 'https://aimen-blog.com/ana.png',
        width: 1200,
        height: 630,
        alt: 'Contact Aimen Tighiouart - Full Stack Developer',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Aimen Tighiouart - Full Stack Developer',
    description: 'Get in touch for professional web development services',
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
    canonical: 'https://aimen-blog.com/contact',
  },
}

// JSON-LD Structured Data for Contact Page
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  mainEntity: {
    '@type': 'Person',
    name: 'Tighiouart Aimen Abdelghafour',
    jobTitle: 'Full Stack Developer',
    url: 'https://aimen-blog.com',
    email: 'aymentigui@gmail.com',
    telephone: '+213-540-67-26-22',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '34 Belkacem Belkadi, Kouba',
      addressLocality: 'Algiers',
      addressCountry: 'DZ'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+213-540-67-26-22',
      contactType: 'Customer Service',
      email: 'aymentigui@gmail.com',
      availableLanguage: ['English', 'French', 'Arabic'],
      areaServed: 'Worldwide'
    }
  },
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
        name: 'Contact',
        item: 'https://aimen-blog.com/contact'
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
      <Contact />
    </>
  )
}

export default Page