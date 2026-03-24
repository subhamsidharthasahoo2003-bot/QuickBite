import React from 'react'
import { assets } from '../../assets/assets'

const Header = () => {
    return (
        <>
            <div className='relative  mt-5 w-full h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-[85vh] overflow-hidden rounded-2xl '>
                <img src={assets.header_img} alt="" className='absolute inset-0  object-cover  h-full w-full lg:px-36 ' />
                {/* <div className="absolute inset-0 bg-black/40 sm:rounded-xl z-10"></div> */}
                <div className="absolute z-10 w-full md:w-auto
                px-6 sm:px-10 md:px-0
                flex flex-col
                items-center sm:items-start
                text-center sm:text-left
                gap-3 lg:gap-8
                bottom-10 sm:bottom-16 md:bottom-20 lg:bottom-36
                md:left-20 lg:left-40 ">


                    <h2 className=' text-2xl sm:text-5xl md:text-5xl lg:text-7xl font-bold text-white leading-tight '>Order Your <br />Favourite Food Here</h2>
                    <p className='text-sm sm:text-xs md:text-lg text-white'>Choose from a diverse menu featureing a delectable array of dishes crafed with the finest<br /> ingredients and culinary experpise. Our mission is to satisfy your cravings and elevate your <br />dining experience, one delicious meal at a time. </p>
                    <button className='w-fit border border-white rounded-full px-4 py-2  text-sm sm:text-base text-white hover:bg-white hover:text-black transition duration-300 '>View Menu</button>
                </div>
            </div>
        </>
    )
}

export default Header