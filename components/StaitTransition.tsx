"use client"
import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import Stairs from './Stairs'

const StaitTransition = () => {
  const pathName = usePathname()

  return (
    <AnimatePresence mode='wait'>
      <div key={pathName}>
        <div className='h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-100 flex'>
          <Stairs></Stairs>
        </div>
        <motion.div className='h-screen w-screen fixed bg-[#221e1c] top-0 pointer-events-none' initial={{opacity:1}} animate={{opacity:0, transition:{delay:1, duration:0.5, ease:"easeInOut"}}} />
      </div>
    </AnimatePresence>
  )
}

export default StaitTransition
