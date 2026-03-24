import React from 'react'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <>
    <div className='m-auto mt-[100px] text-4xl text-center font-semibold' id='app-download'>
      <p>For Better Experience Download<br/>QuickBite App</p>
      <div className='flex justify-center gap-[max(2vw,10px)]  mt-7'>
         <img className='w-[max(30vw,120px)] max-w-[180px] transition duration-300 cursor-pointer hover:scale-105' src={assets.play_store} alt="" />
         <img className='w-[max(30vw,120px)] max-w-[180px] transition duration-300 cursor-pointer hover:scale-105' src={assets.app_store} alt="" />
      </div>
    </div>
    </>
  )
}

export default AppDownload