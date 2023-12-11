import React from 'react'
import images from '../assets/images/images'
import TrialCard from './TrialCard'
import CardObject from '../assets/utils/CardObject'

const Cards = () => {
  return (
    <div className='w-full py-20 px-8 bg-white'>
        <div className='max-w-[1240px] mx-auto my-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <TrialCard CardObject={new CardObject(images.single,"Single", "149", "500 GB", "1", "2 GB")}/>
            <TrialCard CardObject={new CardObject(images.double,"Double", "199", "1 TB", "3", "10 GB")}/>
            <TrialCard CardObject={new CardObject(images.triple,"Triple", "299", "5 TB", "10", "50 GB")}/>
        </div>
    </div>
  )
}

export default Cards