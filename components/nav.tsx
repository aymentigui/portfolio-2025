"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/resume", label: "Resume" },
    { href: "/work", label: "Work" },
    { href: "/contact", label: "Contact" },
]

const Nav = () => {
    const pathName = usePathname()

    return (
        <nav className='flex gap-8'>
            {links.map((link) => (
                <Link key={link.href} href={link.href} className={`${link.href===pathName&& "text-sky-400 border-b-2 border-sky-400"} capitalize font-medium hover:text-sky-400 transition-all`}>
                    {link.label}
                </Link>
            ))}
        </nav>
    )
}

export default Nav
