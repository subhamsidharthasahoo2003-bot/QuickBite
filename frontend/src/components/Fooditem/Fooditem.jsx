import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../Context/StoreContext'

const Fooditem = ({id,name,price,description,image}) => {

     const{cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);

  return (
    <>
    <div className='w-full m-auto rounded-[15px] shadow transition-all hover:scale-105 duration-300  '>
        <div className='relative'>
            <img  className='w-full rounded-[15px]' src={url+"/images/"+image} alt="" />
         
            {!cartItems[id]
                ?<img  className='w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer border-2 border-white rounded-full hover:border-orange-500' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=''/>
                :<div className='absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px]  rounded-[50px] bg-white '>
                  <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=''/>
                  <p>{cartItems[id]}</p>
                  <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=''/>
                </div>
            }
        </div>
        <div className='p-[30px]'>
            <div className='flex justify-between items-center mb-[10px]'>
                <p className='font-semibold  text-black'>{name}</p>
                <img src={assets.rating_starts} alt="" className='w-16' />
            </div>
            <p className='text-gray-600 text-xs'>{description}</p>
            <p className='text-orange-600 text-2xl font-bold mt-2 mb-0'>₹{price}</p>
        </div>
    </div>
    </>
  )
}

export default Fooditem