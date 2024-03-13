import React from 'react'
import { technologies } from '../constants'
import { SectionWrapper } from '../hoc'
import { BallCanvas } from './canvas'

const Tech = () => {
  return (
    <>
      <h2 className="flex flex-row flex-wrap justify-center font-serif text-[28px] font-extrabold">Technologies I am Familiar with</h2>
      <hr className="my-4" />
      <div className="flex flex-row flex-wrap justify-center gap-10 ">
        {technologies.map((technology) => (
          <div className="w-28 h-28 " key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <p className="text-center font-semibold">{technology.name}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "")