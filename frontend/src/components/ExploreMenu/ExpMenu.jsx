import React from 'react'
import { menu_list } from '../../assets/assets'

const ExpMenu = ({ category, setCategory }) => {

  return (
    <>
      <div className='flex flex-col gap-4 mt-5 lg:px-36 sm:px-8 md:px-16  ' id='explore-menu'>
        <h1 className='text-3xl font-semibold'>Explore our menu</h1>
        <p className='max-w-full sm:max-w-[80%] md:max-[60%]: text-black font-semibold'>Choose from a diverse menu featureing a delectable array of dishes. Our mission is to satisfy your <br />cravings and elevate your dining experience, one delicious meal at a time.</p>
        <div className='flex justify-between items-center gap-6 text-center my-[20px] overflow-x-auto scroll-smooth'>
          {menu_list.map((item, index) => {
            return (
              <div className='flex-shrink-0'
                onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
                key={index}
              >
                <img
                  className={`w-[7.5vw] min-w-[80px] cursor-pointer transition-all 
          ${category === item.menu_name ? "border-2 border-orange-600 p-[2px] rounded-full" : ""}`}
                  src={item.menu_image}
                  alt=''
                />

                <p className='mt-2 text-lg cursor-pointer'>{item.menu_name}</p>
              </div>
            )
          })}
        </div>
        <hr className='m-[10px,0px] h-2 bg-gray-400 border-none' />
      </div>
    </>
  )
}

export default ExpMenu