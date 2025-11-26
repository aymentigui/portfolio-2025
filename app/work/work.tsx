"use client"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion"
import Link from "next/link";
import { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import Image from "next/image";
import WrorkSliderBtns from "@/components/WrorkSliderBtns";

const projects = [
    {
        num: "01",
        category: "Enterprise Platform – Fullstack",
        title: "Central Command & Operations Platform – EL DJAMIYA",
        description:
            "A large-scale enterprise platform for the biggest bus company in Africa. Manages drivers, buses, check-ins/out, regions, supervisors, controllers, devices, roles, trips, and advanced analytics for operational efficiency and traceability.",
        stack: [
            { name: "Next.js" },
            { name: "Node.js" },
            { name: "MySQL" },
            { name: "TailwindCSS" }
        ],
        image: "/projects/pccdnk.webp",
        live: null,
        github: null
    },
    {
        num: "02",
        category: "Flutter Mobile App",
        title: "QR Code Scanning App for Controllers",
        description:
            "A Flutter application for bus controllers to scan QR codes with a simple and clean interface.",
        stack: [
            { name: "Flutter" },
            { name: "Dart" }
        ],
        image: "/projects/supervisorapp.webp",
        live: null,
        github: null
    },
    {
        num: "03",
        category: "Flutter Mobile App",
        title: "Supervisor Mobile App",
        description:
            "A Flutter app for supervisors to manage their stations, controllers, buses, and drivers efficiently using a modern and intuitive UI.",
        stack: [
            { name: "Flutter" },
            { name: "Dart" }
        ],
        image: "/projects/appscan.webp",
        live: null,
        github: null
    },
    {
        num: "04",
        category: "Fullstack – Next.js + Prisma",
        title: "IATF Bus Attendance Automation Platform",
        description:
            "An innovative platform built to automate the entire bus attendance process during the IATF event in Algeria. The system auto-creates agent accounts, allows users to enter and validate check-ins, enables supervisors to approve bus attendance for hotels, and lets the admin export final reports. The platform was developed in less than 24 hours to manage attendance during the final days of the event.",
        stack: [
            { name: "Next.js" },
            { name: "TypeScript" },
            { name: "Prisma" },
            { name: "TailwindCSS" }
        ],
        image: "/projects/iatf_pointage.webp",
        live: null,
        github: null
    },
    {
        num: "05",
        category: "Frontend + Backend – Next.js",
        title: "Official Transport Platform – IATF Algeria",
        description:
            "A modern and multilingual showcase website for the official transport service of the IATF event in Algeria. Includes contact forms, online bus requests, animated UI/UX, and an admin dashboard to manage messages and reservations.",
        stack: [
            { name: "Next.js" },
            { name: "TypeScript" },
            { name: "TailwindCSS" }
        ],
        image: "/projects/iatf_website.webp",
        live: null,
        github: null
    },
    {
        num: "06",
        category: "CMS Development",
        title: "Advanced Multilingual Blog CMS",
        description:
            "A complete blog CMS with multilingual content editing, role management, SEO optimization, and an interactive drag-and-drop content builder.",
        stack: [
            { name: "Next.js" },
            { name: "Prisma" },
            { name: "TypeScript" },
            { name: "TailwindCSS" }
        ],
        image: "/projects/blog.webp",
        live: null,
        github: null
    },
    {
        num: "07",
        category: "WordPress Plugin",
        title: "Cash-on-Delivery Optimization Plugin",
        description:
            "A custom WooCommerce plugin that removes the classic cart and checkout steps to simplify cash-on-delivery purchases, making the buying process faster and more efficient.",
        stack: [
            { name: "PHP" },
            { name: "WordPress" },
            { name: "WooCommerce" }
        ],
        image: "/projects/form_wordpress.webp",
        live: null,
        github: null
    },
    {
        num: "08",
        category: "E-commerce – WordPress",
        title: "Perfume Store – COD E-commerce",
        description:
            "A modern perfume e-commerce store built for the Algerian market. Includes a custom design, COD payments, SEO optimization, and Facebook Pixel for tracking and advertising.",
        stack: [
            { name: "WordPress" },
            { name: "WooCommerce" },
            { name: "PHP" }
        ],
        image: "/projects/monparffum.webp",
        live: null,
        github: null
    },
    {
        num: "09",
        category: "E-commerce – WordPress",
        title: "Multi-category Online Store",
        description:
            "An e-commerce website built using Porto theme with advanced brand/category filtering, Facebook Pixel integration, and strong SEO indexing on Google Search.",
        stack: [
            { name: "WordPress" },
            { name: "WooCommerce" },
            { name: "PHP" }
        ],
        image: "/projects/pacha.webp",
        live: null,
        github: null
    },
    {
        num: "10",
        category: "E-commerce – WordPress",
        title: "Perfume Store (Custom Design)",
        description:
            "A fully customized perfume shop built with WooCommerce, optimized for SEO and advertising. Features a modern design tailored to client expectations.",
        stack: [
            { name: "WordPress" },
            { name: "WooCommerce" },
            { name: "PHP" }
        ],
        image: "/projects/crescent.webp",
        live: null,
        github: null
    },
    {
        num: "11",
        category: "Showcase Website – WordPress",
        title: "RMO ACN Corporate Website",
        description:
            "A professional and modern WordPress showcase website for RMO ACN, a tech services company in Algeria and the Maghreb.",
        stack: [
            { name: "WordPress" },
            { name: "PHP" }
        ],
        image: "/projects/rmo.webp",
        live: null,
        github: null,
    },
    {
        num: "12",
        category: "Showcase + Training",
        title: "Training School Website",
        description:
            "A professional WordPress website for a training school with course and event management, modern UI, and optimized UX.",
        stack: [
            { name: "WordPress" },
            { name: "PHP" }
        ],
        image: "/projects/formation.webp",
        live: null,
        github: null
    },
    {
        num: "13",
        category: "Showcase – WordPress",
        title: "Maritime Safety Consulting Website",
        description:
            "A professional showcase website for a maritime consulting company offering inspection, expertise, and safety services.",
        stack: [
            { name: "WordPress" },
            { name: "PHP" }
        ],
        image: "/projects/babor.webp",
        live: null,
        github: null
    },
    {
        num: "14",
        category: "Fullstack – Next.js",
        title: "Ministry of Transport Registration Platform",
        description:
            "A web application for the Ministry of Transport enabling companies to register easily in the official national database.",
        stack: [
            { name: "Next.js" },
            { name: "TypeScript" },
            { name: "TailwindCSS" }
        ],
        image: "/projects/ministere.webp",
        live: null,
        github: null
    },
    {
        num: "15",
        category: "E-commerce – WordPress",
        title: "Women's Clothing Store",
        description:
            "A stylish e-commerce site for women's fashion, built with BeTheme. Includes SEO optimization, multiple payment options, and Facebook Pixel.",
        stack: [
            { name: "WordPress" },
            { name: "WooCommerce" }
        ],
        image: "/projects/demereenfille.webp",
        live: null,
        github: null
    },
    {
        num: "16",
        category: "E-commerce – WordPress",
        title: "Pharmacy E-commerce Platform",
        description:
            "An advanced pharmacy e-commerce site built with Porto theme, designed for doctors and patients. Pixel-enabled, SEO optimized, and indexed on Google.",
        stack: [
            { name: "WordPress" },
            { name: "WooCommerce" }
        ],
        image: "/projects/almart.webp",
        live: null,
        github: null
    },
    {
        num: "17",
        category: "WordPress Plugin",
        title: "Product Landing Page Image Plugin",
        description:
            "A custom plugin allowing admins to add a landing page image above WooCommerce product pages with a single click to boost conversions.",
        stack: [
            { name: "PHP" },
            { name: "WordPress" },
            { name: "WooCommerce" }
        ],
        image: "/projects/landingpagewordpress.webp",
        live: null,
        github: null
    },
    {
        num: "18",
        category: "Web App – Next.js",
        title: "Auto PDF Event Registration Tool",
        description:
            "A simple Next.js form that generates formatted event registration PDFs automatically without requiring any Word or manual editing.",
        stack: [
            { name: "Next.js" },
            { name: "TypeScript" }
        ],
        image: "/projects/pdf.webp",
        live: null,
        github: null
    },
];

const Work = () => {
    const [project, setProject] = useState(projects[0])

    const handleSlideChange = (swiper: any) => {
        const currentIndex = swiper.activeIndex
        setProject(projects[currentIndex])
    }

    return (
        <motion.section
            className="flex flex-col justify-center py-12 xl:py-0 min-h-[80vh]"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.5, ease: "easeInOut" } }}
            aria-label="Portfolio projects"
        >
            <div className="container mx-auto">
                {/* SEO Header */}
                <header className="mb-12 text-center xl:text-left hidden lg:block">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Portfolio - Professional Web Development Projects
                    </h1>
                    <p className="text-lg text-white/60 max-w-3xl mx-auto xl:mx-0">
                        Explore 18+ completed projects including enterprise platforms, e-commerce stores, mobile applications, WordPress sites, and custom solutions. Built with Next.js, React, Laravel, Flutter, and WordPress.
                    </p>
                </header>

                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    {/* Project Details */}
                    <article 
                        className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none"
                        itemScope 
                        itemType="https://schema.org/CreativeWork"
                    >
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            <div>
                                <div 
                                    className="text-8xl leading-none font-extrabold text-transparent text-outline"
                                    aria-label={`Project number ${project.num}`}
                                >
                                    {project.num}
                                </div>
                            </div>
                            
                            <span className="text-2xl text-sky-400 capitalize" itemProp="genre">
                                {project.category}
                            </span>
                            
                            <h2 
                                className="text-[42px] font-bold leading-none text-white group-hover:text-sky-400"
                                itemProp="name"
                            >
                                {project.title}
                            </h2>
                            
                            <p className="text-white/60" itemProp="description">
                                {project.description}
                            </p>
                            
                            <div>
                                <h3 className="text-sm text-white/40 mb-2">Technologies Used:</h3>
                                <ul className="flex flex-wrap gap-4" itemProp="keywords">
                                    {project.stack.map((item, index) => (
                                        <li key={index} className="text-xl text-sky-400">
                                            {item.name}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="border border-white/20" role="separator"></div>
                            
                            <div className="flex items-center gap-4">
                                {project.live ? (
                                    <Link href={project.live} target="_blank" rel="noopener noreferrer">
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger 
                                                    className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group"
                                                    aria-label="View live project"
                                                >
                                                    <BsArrowUpRight className="text-white text-3xl group-hover:text-sky-400 group-hover:rotate-45 transition-all duration-500" />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Live project</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                ) : (
                                    <div className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center opacity-50 cursor-not-allowed" aria-label="Live project not available">
                                        <BsArrowUpRight className="text-white text-3xl" />
                                    </div>
                                )}
                                
                                {project.github ? (
                                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger 
                                                    className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group"
                                                    aria-label="View GitHub repository"
                                                >
                                                    <BsGithub className="text-white text-3xl group-hover:text-sky-400 transition-all duration-500" />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>GitHub repository</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                ) : (
                                    <div className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center opacity-50 cursor-not-allowed" aria-label="GitHub repository not available">
                                        <BsGithub className="text-white text-3xl" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </article>
                    
                    {/* Project Image Slider */}
                    <div className="w-full xl:w-[50%]">
                        <Swiper 
                            spaceBetween={30} 
                            slidesPerView={1} 
                            className="xl:h-[520px] mb-12" 
                            onSlideChange={handleSlideChange}
                            aria-label="Project gallery"
                        >
                            {projects.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <figure className="h-[460px] relative group flex justify-center items-center bg-021f2a">
                                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                        <div className="relative h-full w-full">
                                            <Image 
                                                src={item.image} 
                                                alt={`${item.title} - ${item.category} project screenshot`}
                                                fill 
                                                className="object-contain" 
                                                loading={index === 0 ? "eager" : "lazy"}
                                                quality={85}
                                            />
                                        </div>
                                    </figure>
                                </SwiperSlide>
                            ))}
                            <WrorkSliderBtns
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-_22px)] xl:bottom-0 z-20 justify-between w-full xl:w-max xl:justify-none"
                                btnStyles="bg-sky-400 hover:bg-sky-600 text-[#012431] text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all duration-500"
                            />
                        </Swiper>
                    </div>
                </div>

                {/* Portfolio Summary Section for SEO */}
                <section className="mt-16 text-center" aria-label="Portfolio summary">
                    <h2 className="text-3xl font-bold text-white mb-6">Project Categories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        <div className="bg-[#021f2a] p-6 rounded-xl">
                            <h3 className="text-2xl font-bold text-sky-400 mb-2">6+</h3>
                            <p className="text-white/60">E-commerce Stores</p>
                        </div>
                        <div className="bg-[#021f2a] p-6 rounded-xl">
                            <h3 className="text-2xl font-bold text-sky-400 mb-2">5+</h3>
                            <p className="text-white/60">Enterprise Platforms</p>
                        </div>
                        <div className="bg-[#021f2a] p-6 rounded-xl">
                            <h3 className="text-2xl font-bold text-sky-400 mb-2">3+</h3>
                            <p className="text-white/60">Mobile Applications</p>
                        </div>
                        <div className="bg-[#021f2a] p-6 rounded-xl">
                            <h3 className="text-2xl font-bold text-sky-400 mb-2">2+</h3>
                            <p className="text-white/60">Custom Plugins</p>
                        </div>
                    </div>
                </section>
            </div>
        </motion.section>
    )
}

export default Work