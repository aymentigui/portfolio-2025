"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { BsArrowDownRight } from "react-icons/bs"

const services = [
  {
    num: "01",
    title: "Professional Website Development",
    href: "#website-development",
    description: "I build modern, fast, and secure websites tailored to your business. Perfect for companies, online services, and personal brands.",
    keywords: "website development, business website, modern web design"
  },
  {
    num: "02",
    title: "E-commerce Store Development",
    href: "#ecommerce-development",
    description: "Complete online stores with payment systems, inventory management, and delivery integration. Optimized to increase sales and customer trust.",
    keywords: "e-commerce development, online store, shopping cart"
  },
  {
    num: "03",
    title: "WordPress & WooCommerce Development",
    href: "#wordpress-development",
    description: "Custom WordPress websites, theme development, plugin creation, and advanced WooCommerce integrations for powerful online stores.",
    keywords: "WordPress development, WooCommerce, custom themes"
  },
  {
    num: "04",
    title: "Modern Front-End Development",
    href: "#frontend-development",
    description: "High-performance, responsive user interfaces built with React, Next.js, Vue.js, Tailwind, and clean UI/UX practices.",
    keywords: "React development, Next.js, Vue.js, frontend developer"
  },
  {
    num: "05",
    title: "Back-End & API Development",
    href: "#backend-development",
    description: "Secure and scalable APIs using Laravel and Next.js. User management, authentication, roles, permissions, payments, and custom business logic.",
    keywords: "API development, Laravel, backend developer, REST API"
  },
  {
    num: "06",
    title: "Mobile App Development (Flutter)",
    href: "#mobile-app-development",
    description: "Android and iOS mobile applications using Flutter. API integration, authentication, notifications, and Google Play deployment.",
    keywords: "Flutter development, mobile apps, Android, iOS"
  },
  {
    num: "07",
    title: "Database Design & Optimization",
    href: "#database-optimization",
    description: "MySQL, PostgreSQL, and MongoDB database architecture, optimization, security, and Prisma integration.",
    keywords: "database design, MySQL, PostgreSQL, MongoDB"
  },
  {
    num: "08",
    title: "Hosting, Deployment & Website Migration",
    href: "#hosting-deployment",
    description: "Server setup, cPanel configuration, DNS, Vercel deployment, SSL installation, backups, and full website migrations with no data loss.",
    keywords: "web hosting, website migration, deployment, SSL"
  },
  {
    num: "09",
    title: "SEO & Website Speed Optimization",
    href: "#seo-optimization",
    description: "Technical SEO improvements, Core Web Vitals optimization, faster loading speed, lazy loading, and structure enhancement for better rankings.",
    keywords: "SEO optimization, website speed, Core Web Vitals"
  },
  {
    num: "10",
    title: "High-Converting Landing Pages",
    href: "#landing-pages",
    description: "Landing pages optimized for marketing and sales with modern design, strong copywriting, and fast performance.",
    keywords: "landing page design, conversion optimization, marketing"
  },
  {
    num: "11",
    title: "Facebook & Instagram Advertising",
    href: "#social-media-ads",
    description: "Full management of advertising campaigns to increase sales, leads, messages, engagement, and brand visibility.",
    keywords: "Facebook ads, Instagram marketing, social media advertising"
  },
  {
    num: "12",
    title: "Automation & API Integrations",
    href: "#automation",
    description: "Business automation, external API integrations (payment, SMS, delivery, chatbot), and custom workflow solutions.",
    keywords: "business automation, API integration, workflow automation"
  },
  {
    num: "13",
    title: "Custom Plugin & Feature Development",
    href: "#custom-development",
    description: "Custom features and plugins for WordPress, Laravel, Next.js, or Node.js tailored exactly to your project requirements.",
    keywords: "custom plugin development, custom features, bespoke solutions"
  },
]

const Services = () => {
  return (
    <section aria-label="Professional Web Development Services">
      <div className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <div className="container mx-auto">
          {/* Main Heading for SEO */}
          <header className="mb-12 text-center hidden lg:block">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Professional Web Development Services
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Full-stack development solutions for businesses and brands. From website development to mobile apps, e-commerce stores, and digital marketing.
            </p>
          </header>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.5, ease: "easeInOut" } }}
          >
            {services.map((service, index) => (
              <article 
                key={index} 
                id={service.href.replace('#', '')}
                className="flex-1 flex flex-col justify-center gap-6 group"
                itemScope 
                itemType="https://schema.org/Service"
              >
                <div className="w-full flex justify-between items-center">
                  <div 
                    className="text-5xl font-extrabold text-outline text-transparent group-hover:text-sky-400 transition-all duration-500"
                    aria-hidden="true"
                  >
                    {service.num}
                  </div>
                  <Link
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-sky-400 transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                    href={service.href}
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <BsArrowDownRight className="text-[#012431] text-3xl" />
                  </Link>
                </div>
                
                <h2 
                  className="text-[42px] font-bold leading-none text-white group-hover:text-sky-400 transition-all duration-500"
                  itemProp="name"
                >
                  {service.title}
                </h2>
                
                <p className="text-white/40" itemProp="description">
                  {service.description}
                </p>
                
                <meta itemProp="serviceType" content={service.keywords} />
                
                <div className="border-b border-white/20 w-full" role="separator"></div>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services