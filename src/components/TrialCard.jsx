import React from 'react'

const TrialCard = ({CardObject}) => {
    return (
        <div className='w-full flex flex-col rounded-lg shadow-xl p-4 my-8 hover:scale-105 duration-300'>
            <img className='w-24 bg-white mx-auto mt-[-3rem]' src={CardObject.image} alt="" />
            <h2 className='text-2xl font-bold text-center py-8'>{`${CardObject.user} User`}</h2>
            <p className='text-center font-bold text-4xl'>{`$${CardObject.pay}`}</p>
            <div className='text-center font-medium'>
                <p className='py-2 mx-10 border-b border-t mt-10'>{`${CardObject.storage} Storage`}</p>
                <p className='py-2 mx-10 border-b'>{`${CardObject.grantedUser} Granted User`}</p>
                <p className='py-2 mx-10 border-b'>{`Send up to ${CardObject.sendUp}`}</p>
            </div>
            <button className='bg-[#00df9a] text-[#000300] font-medium w-28 md:w-36 lg:w-48 rounded-md my-6 mx-auto py-2'>Start Trial</button>
        </div>
    )
}

export default TrialCard