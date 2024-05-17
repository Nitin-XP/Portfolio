import { motion } from 'framer-motion'
import React from 'react'
import { footers } from "../constants/index.js"
import { styles } from '../styles.js'
const Footer = () => {
    return (
        <footer>
            <div className=' bg-black text-white flex flex-col items-center justify-center p-4'>
                <motion.h1 initial={{ y: -200 }} animate={{ y: 0 }} transition={{ duration: 3 }} className={`${styles.heroHeadText} mb-3`}>Relevant Links</motion.h1>
                <div className='text-white flex flex-wrap gap-8 my-5 p-4'>
                    {
                        footers.map((footer) => (
                            <motion.a
                                initial={{ scale: 1 }}
                                animate={{ scale: 1.3 }}
                                transition={{ duration: 1 }}
                                key={footer.id} href={`${footer.link}`} className='gap-3 mx-3 flex flex-col items-center justify-center mt-8' target="_blank" rel="noopener noreferrer" >
                                <img src={footer.icon} alt={footer.name} className='w-[35px] h-[35px] hover:text-white' />
                                <h2 className=' text-gray-200 hover:text-yellow-200'>{footer.name}</h2>
                            </motion.a>
                        ))
                    }
                </div>
                <div className={`${styles.heroSubText}`}> &copy;2024 | NITIN KUMAR. All Rights Reserved!</div>

            </div>
        </footer>
    )
}

export default Footer