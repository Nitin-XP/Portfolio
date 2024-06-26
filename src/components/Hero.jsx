import { motion } from 'framer-motion'
import React from 'react'
import { styles } from '../styles'

const Hero = () => {
  return (
    // in section h-[screen] changed to h-full
    <section className="relative w-full h-[60vh] mx-auto">

      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

        <div className="flex flex-col justify-center items-center mt-5">

          <div className="w-5 h-5 rounded-full bg-[#915eff]" />

          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="mb-2">
          <h1 className={`${styles.heroHeadText} text-white`}>Hey, I'm <span className=" text-yellow-400" >NITIN</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 italic`}>Turning Ideas into Beautiful Websites!</p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className="relative xs:bottom-2 bottom-32 w-full my-8 flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[50px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div animate={{ y: [0, 24, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }} className="w-3 h-3 rounded-full bg-secondary mb-1" />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero