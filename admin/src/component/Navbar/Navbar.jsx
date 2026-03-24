import React from 'react'
import {assets} from '../../assets/assets'

const navbar = () => {
  return (
    <>
    <div className='flex justify-between gap-3 items-center p-2  '>
    <div className='  '>
                    
                <span className="inline-flex h-8 w-8  items-center justify-center rounded-full bg-orange-600 text-white font-bold">
                    Q
                </span>
                <span className="text-xl font-extrabold tracking-tight text-gray-900">
                    Quick<span className="text-gray-900">Bite</span>
                </span>
                </div>
    <img src={assets.profile_image} alt="" className='w-40px' />
    </div>
    </>
  )
}

export default navbar