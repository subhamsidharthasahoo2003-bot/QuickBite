import React from 'react'
import {assets} from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const sidebar = () => {
  return (
    <>
   <div className='w-[18%] min-h-[100vh] border-2 border-solid border-gray-500 border-t-0 '> 
    <div className='pt-[50px] pl-[20%] flex flex-col gap-4 '> 
        <NavLink to='/add' className='flex items-center gap-2 border-2 border-solid border-gray-500 border-r-1 p-2 cursor-pointer focus:bg-orange-200 focus:border-orange-600 ' > 
        <img src={assets.add_icon} alt="" /> 
        <p className='hidden md:flex '>Add iteam</p> 
        </NavLink> 
        <NavLink to='/list' className='flex items-center gap-2 border-2 border-solid border-gray-500 border-r-1 p-2 cursor-pointer focus:bg-orange-200 focus:border-orange-600 '> 
        <img src={assets.order_icon} alt="" /> 
        <p className='hidden md:flex'>List Items</p> 
        </NavLink> 
        <NavLink to='/orders' className='flex items-center gap-2 border-2 border-solid border-gray-500 border-r-1 p-2 cursor-pointer focus:bg-orange-200 focus:border-orange-600 '> 
        <img src={assets.order_icon} alt="" /> 
        <p className='hidden md:flex'>Order</p> 
        </NavLink> 
        </div> 
        </div>
    </>
  )
}

export default sidebar