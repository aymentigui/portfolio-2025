"use client";
import { motion } from 'framer-motion';

const stairAnimation = {
    initial: { top: "0%" },
    animate: { top: '100%' },
    exit: { top: ["100%", '0%'] },
};

const reverseIndex = (index: number) => {
    const totaleSteps = 10;
    return totaleSteps - index - 1;
}

const Stairs = () => {
    return (
        <>
            {[...Array(10)].map((_, index) => (
                <motion.div
                    key={index}
                    variants={stairAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.5, ease: "easeInOut", delay: reverseIndex(index) * 0.1 }}
                    className={`h-full w-full relative bg-sky-400`}
                ></motion.div>
            ))}
        </>
    )
}

export default Stairs
