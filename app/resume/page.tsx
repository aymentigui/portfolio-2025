import type { Metadata } from 'next'
import Resume from './resume'

// SEO Metadata
export const metadata: Metadata = {
  title: 'Aimen Tighiouart - Full Stack Developer Resume | React, Next.js, Laravel, Flutter',
  description: 'Full Stack Developer with 3+ years of experience in React, Next.js, Laravel, Flutter, and WordPress. Master\'s degree in Distributed Networks and Systems. Available for freelance projects.',
  keywords: [
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Laravel Developer',
    'Flutter Developer',
    'WordPress Developer',
    'Web Developer Algeria',
    'Freelance Developer',
    'JavaScript Developer',
    'PHP Developer',
    'Mobile App Developer',
    'Frontend Developer',
    'Backend Developer',
    'Aimen Tighiouart',
    'USTHB Graduate'
  ],
  authors: [{ name: 'Tighiouart Aimen Abdelghafour' }],
  openGraph: {
    title: 'Aimen Tighiouart - Full Stack Developer Resume',
    description: 'Experienced Full Stack Developer specializing in React, Next.js, Laravel, Flutter, and WordPress development. 3+ years of professional experience.',
    type: 'profile',
    locale: 'en_US',
    url: 'https://aimen-blog.com/resume',
    siteName: 'Aimen Tighiouart Portfolio',
    images: [
      {
        url: 'https://aimen-blog.com/ana.png',
        width: 1200,
        height: 630,
        alt: 'Aimen Tighiouart - Full Stack Developer',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aimen Tighiouart - Full Stack Developer Resume',
    description: 'Full Stack Developer with expertise in React, Next.js, Laravel, Flutter, and WordPress',
    images: ['https://aumen-blog.com/ana.png'],
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
    canonical: 'https://aimen-blog.com/resume',
  },
}

// JSON-LD Structured Data for Person/Professional
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Tighiouart Aimen Abdelghafour',
  jobTitle: 'Full Stack Developer',
  description: 'Full Stack Developer specializing in web and mobile application development',
  url: 'https://aimen-blog.com',
  email: 'aymentigui@gmail.com',
  telephone: '+213-540-67-26-22',
  nationality: 'Algerian',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'DZ',
    addressLocality: 'Algiers'
  },
  knowsLanguage: ['Arabic', 'French', 'English'],
  alumniOf: [
    {
      '@type': 'EducationalOrganization',
      name: 'University of Science and Technology Houari Boumediene',
      description: 'Master in Distributed Networks and Systems'
    }
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'DJAMAIYA LILNAKL OUA EL KHADAMAT'
  },
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Full Stack Developer',
    skills: [
      'React.js',
      'Next.js',
      'Laravel',
      'Flutter',
      'WordPress',
      'Node.js',
      'JavaScript',
      'PHP',
      'MySQL',
      'MongoDB',
      'PostgreSQL',
      'Tailwind CSS',
      'Vue.js',
      'Express.js',
      'WooCommerce',
      'Git',
      'Docker',
      'Prisma',
      'Firebase'
    ],
    experienceRequirements: '3+ years'
  },
  sameAs: [
    'https://github.com/aymentigui',
    'https://www.linkedin.com/in/aimen-abdelghafour-tighiouart-7866a725b',
  ]
}

const Page = () => {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Resume />
    </>
  )
}

export default Page