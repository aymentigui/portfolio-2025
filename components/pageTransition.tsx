"use client"
import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const PageTransition = ({ children }: any) => {
    const pathName = usePathname()

    return (
        <AnimatePresence>

            <div key={pathName}>
                <motion.div
                    className='h-screen w-screen fixed top-0 left-0 bg-[#012431] z-50 pointer-events-none'
                    initial={{ opacity: 1 }} animate={{ opacity: 0, transition: { delay: 1, duration: 2, ease: "easeInOut" } }}>
                </motion.div>
                {children}
            </div>
        </AnimatePresence>
    )
}

export default PageTransition
