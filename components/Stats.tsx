"use client"
import React from 'react'
import CountUp from 'react-countup'

const stats = [
  {
    num: 3,
    text: "Years of experiences"
  },
  {
    num: 20,
    text: "Projects completed"
  },
  {
    num: 31,
    text: "Technologies mastered"
  },
  {
    num: 500,
    text: "Code commits"
  },
]

const Stats = () => {
  return (
    <section className='pt-4 pb-12 xl:pt-0 xl:pb-0'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap gap-6 mx-auto max-w-[80wv] xl:max-w-none'>
          {stats.map((s, i) => {
            return <div className='flex-1 flex gap-4 items-center justify-center xl:justify-start' key={i}>
              <CountUp
                end={s.num}
                duration={5}
                delay={2.5}
                className='text-4xl xl:text-6xl font-extrabold'
              />
              <p className={`${s.text.length<15? "max-w-[100px]":"max-w-[150px]"} leading-snug text-white/80`}>{s.text}</p>
            </div>
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats
