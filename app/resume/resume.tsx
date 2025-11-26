"use client"

import { FaAd, FaCss3Alt, FaDatabase, FaFigma, FaHtml5, FaJava, FaNode, FaPhotoVideo, FaPhp, FaReact, FaVuejs, FaWordpress } from "react-icons/fa"
import { IoCodeSharp } from "react-icons/io5"
import { SiCpanel, SiDocker, SiElementor, SiExpress, SiFirebase, SiFlutter, SiGit, SiJavascript, SiLaravel, SiMongodb, SiMysql, SiNextdotjs, SiPhp, SiPostgresql, SiPrisma, SiSass, SiTailwindcss, SiVercel, SiWoocommerce } from "react-icons/si"
import { motion } from "framer-motion"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const about = {
    title: "About me",
    description: "I am a web developer passionate about innovation and optimizing development processes. I started with personal projects and am now involved in professional projects that use Next.js, React.js, Laravel and Flutter",
    info: [
        {
            filedName: "Name",
            filedValue: "Tighiouart Aimen Abdelghafour"
        },
        {
            filedName: "Phone",
            filedValue: "+213 (0) 540 67 26 22"
        },
        {
            filedName: "Email",
            filedValue: "aymentigui@gmail.com"
        },
        {
            filedName: "Experience",
            filedValue: "+3 years"
        },
        {
            filedName: "Nationality",
            filedValue: "Algerian"
        },
        {
            filedName: "Freelance",
            filedValue: "Available"
        },
        {
            filedName: "Languages",
            filedValue: "Arabic, French, English"
        },
    ]
}

const experience = {
    icon: "",
    title: "My Professional Experience",
    description: "Full Stack Developer with expertise in modern web and mobile technologies",
    items: [
        {
            company: "DJAMAIYA LILNAKL OUA EL KHADAMAT",
            position: "Full Stack Developer",
            duration: "2024 - Present"
        }
    ]
}

const education = {
    icon: "/edu.png",
    title: "My Education",
    description: "Academic training in information systems and distributed networks from USTHB",
    items: [
        {
            institution: "University of Science and Technology Houari Boumediene (USTHB)",
            degree: "Master's Degree in Distributed Networks and Systems",
            duration: "2021 - 2024"
        },
        {
            institution: "University of Science and Technology Houari Boumediene (USTHB)",
            degree: "Bachelor's Degree in Information Systems and Software Engineering",
            duration: "2017 - 2021"
        },
        {
            institution: "High School",
            degree: "High School Diploma - Mathematics",
            duration: "2016 - 2017"
        }
    ]
}

const skills = {
    title: "My Technical Skills",
    description: "Technologies and tools I use in my daily work as a Full Stack Developer",
    skillsList: [
        // Front-end
        { icon: <FaHtml5 />, name: "HTML5", category: "Frontend" },
        { icon: <FaCss3Alt />, name: "CSS3", category: "Frontend" },
        { icon: <SiSass />, name: "Sass", category: "Frontend" },
        { icon: <SiJavascript />, name: "JavaScript", category: "Frontend" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS", category: "Frontend" },
        { icon: <FaReact />, name: "React.js", category: "Frontend" },
        { icon: <SiNextdotjs />, name: "Next.js", category: "Frontend" },
        { icon: <FaVuejs />, name: "Vue.js", category: "Frontend" },

        // Back-end
        { icon: <FaPhp />, name: "PHP", category: "Backend" },
        { icon: <SiLaravel />, name: "Laravel", category: "Backend" },
        { icon: <FaNode />, name: "Node.js", category: "Backend" },
        { icon: <SiExpress />, name: "Express.js", category: "Backend" },

        // Mobile
        { icon: <SiFlutter />, name: "Flutter", category: "Mobile" },
        { icon: <FaJava />, name: "Java", category: "Mobile" },

        // Databases
        { icon: <SiMysql />, name: "MySQL", category: "Database" },
        { icon: <SiPostgresql />, name: "PostgreSQL", category: "Database" },
        { icon: <SiMongodb />, name: "MongoDB", category: "Database" },
        { icon: <SiFirebase />, name: "Firebase", category: "Database" },
        { icon: <FaDatabase />, name: "Convex", category: "Database" },
        { icon: <SiPrisma />, name: "Prisma ORM", category: "Database" },

        // CMS & WordPress
        { icon: <FaWordpress />, name: "WordPress Development", category: "CMS" },
        { icon: <SiWoocommerce />, name: "WooCommerce", category: "CMS" },
        { icon: <SiElementor />, name: "Elementor Pro", category: "CMS" },
        { icon: <SiPhp />, name: "WordPress Plugins", category: "CMS" },

        // Tools & DevOps
        { icon: <SiGit />, name: "Git & GitHub", category: "Tools" },
        { icon: <SiCpanel />, name: "cPanel", category: "Tools" },
        { icon: <SiVercel />, name: "Vercel", category: "Tools" },
        { icon: <SiDocker />, name: "Docker", category: "Tools" },

        // State Management & Auth
        { icon: <IoCodeSharp />, name: "Zustand", category: "State Management" },
        { icon: <IoCodeSharp />, name: "Redux", category: "State Management" },
        { icon: <IoCodeSharp />, name: "NextAuth", category: "Authentication" },
        { icon: <IoCodeSharp />, name: "Clerk", category: "Authentication" },
        { icon: <IoCodeSharp />, name: "Laravel Sanctum", category: "Authentication" },

        // Design & Marketing
        { icon: <FaAd />, name: "Facebook & Instagram Ads", category: "Marketing" },
        { icon: <FaFigma />, name: "UI/UX Design (Figma)", category: "Design" },
        { icon: <FaPhotoVideo />, name: "Content Creation", category: "Marketing" },
    ]
}

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.2, ease: "easeInOut" } }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                {/* Main heading for SEO */}
                <header className="mb-8 text-center xl:text-left hidden">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                        Aimen Tighiouart - Full Stack Developer
                    </h1>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto xl:mx-0">
                        Professional web and mobile developer with expertise in React, Next.js, Laravel, Flutter, and WordPress
                    </p>
                </header>

                <Tabs defaultValue="skills" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6" role="navigation" aria-label="Resume sections">
                        <TabsTrigger value="experience" aria-label="View professional experience">Experience</TabsTrigger>
                        <TabsTrigger value="education" aria-label="View education background">Education</TabsTrigger>
                        <TabsTrigger value="skills" aria-label="View technical skills">Skills</TabsTrigger>
                        <TabsTrigger value="about" aria-label="View about me">About me</TabsTrigger>
                    </TabsList>
                    
                    <div className="min-h-[70vh] w-full">
                        {/* Experience Section */}
                        <TabsContent value="experience" className="w-full">
                            <section className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h2 className="text-4xl font-bold">{experience.title}</h2>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]" itemScope itemType="https://schema.org/ItemList">
                                        {experience.items.map((item, index) => (
                                            <li 
                                                key={index} 
                                                className="bg-[#021f2a] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                itemScope 
                                                itemType="https://schema.org/OrganizationRole"
                                            >
                                                <time className="text-sky-400" itemProp="startDate">{item.duration}</time>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left" itemProp="roleName">
                                                    {item.position}
                                                </h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-sky-400" aria-hidden="true"></span>
                                                    <p className="text-white/60" itemProp="organization">{item.company}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </section>
                        </TabsContent>

                        {/* Education Section */}
                        <TabsContent value="education" className="w-full">
                            <section className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h2 className="text-4xl font-bold">{education.title}</h2>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]" itemScope itemType="https://schema.org/ItemList">
                                        {education.items.map((item, index) => (
                                            <li 
                                                key={index} 
                                                className="bg-[#021f2a] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                itemScope 
                                                itemType="https://schema.org/EducationalOccupationalCredential"
                                            >
                                                <time className="text-sky-400" itemProp="dateCreated">{item.duration}</time>
                                                <h3 className="text-sm md:text-lg min-h-[60px] text-center lg:text-left" itemProp="name">
                                                    {item.degree}
                                                </h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-sky-400" aria-hidden="true"></span>
                                                    <p className="text-white/60" itemProp="recognizedBy">{item.institution}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </section>
                        </TabsContent>

                        {/* Skills Section */}
                        <TabsContent value="skills" className="w-full h-full pb-14">
                            <section className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h2 className="text-4xl font-bold">{skills.title}</h2>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 xl:gap-[30px]" itemScope itemType="https://schema.org/ItemList">
                                    {skills.skillsList.map((skill, index) => (
                                        <li key={index} itemScope itemType="https://schema.org/Thing">
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger 
                                                        className="w-full h-[150px] bg-[#021f2a] rounded-xl flex justify-center items-center group"
                                                        aria-label={`${skill.name} skill`}
                                                    >
                                                        <div className="text-6xl group-hover:text-sky-400 transition-all duration-300" aria-hidden="true">
                                                            {skill.icon}
                                                        </div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className="capitalize" itemProp="name">{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </TabsContent>

                        {/* About Section */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <section className="flex flex-col gap-[30px]" itemScope itemType="https://schema.org/Person">
                                <h2 className="text-4xl font-bold">{about.title}</h2>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0" itemProp="description">
                                    {about.description}
                                </p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => (
                                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                            <span className="text-white/60">{item.filedName}</span>
                                            <span className="text-xl" itemProp={item.filedName.toLowerCase().replace(' ', '')}>
                                                {item.filedValue}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume