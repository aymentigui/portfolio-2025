import { usePathname } from 'next/navigation'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from './ui/sheet'
import { CiMenuFries } from 'react-icons/ci'
import Link from 'next/link'

const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/resume", label: "Resume" },
    { href: "/work", label: "Work" },
    { href: "/contact", label: "Contact" },
]

const MobileNav = () => {
    const pathName = usePathname()

    return (
        <Sheet>
            <SheetTrigger>
                <CiMenuFries className='text-3xl text-sky-400 cursor-pointer' />
            </SheetTrigger>
            <SheetTitle className='text-white text-2xl font-semibold p-4'></SheetTitle>
            <SheetContent className='bg-[#012431] border-none flex justify-around flex-col'>
                <div className='text-center mt-20 text-2xl'>
                    <Link className='text-4xl font-semibold' href={"/"}>Aimen <span className='text-sky-400'>.</span></Link>
                </div>
                <nav className='mb-20'>
                    {links.map((link) => (
                        <div key={link.href} className='mb-8 text-center'>
                            <Link
                                href={link.href}
                                className={`text-2xl capitalize ${pathName === link.href ? 'text-sky-400 font-semibold' : 'text-white hover:text-sky-400'} `}
                            >
                                {link.label}
                            </Link>
                        </div>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav
