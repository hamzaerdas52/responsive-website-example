import React from 'react'
import TrialCard from './TrialCard'
import CardObject from '../utils/CardObject'

const Cards = () => {
  return (
    <div className='w-full py-20 px-8 bg-white'>
      <div className='max-w-[1240px] mx-auto my-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {CardObject.map((card, index) => (
          <TrialCard key={index} CardObject={card} />
        ))}
      </div>
    </div>
  )
}

export default Cards