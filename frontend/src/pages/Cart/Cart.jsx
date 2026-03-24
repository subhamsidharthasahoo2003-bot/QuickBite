import React, { useContext } from 'react'
import { StoreContext } from '../../components/Context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <>
      <div className='mt-28 lg:px-36 sm:px-8 md:px-16 mb-20 '>
        <div className=''>
          <div className='grid grid-cols-6 items-center text-gray-600 text-l md:text-base'>
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr className='h-0.5 bg-gray-200 border-none' />
          {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={item._id}>
                  <div className='grid grid-cols-6 items-center text-black text-l my-[10px] md:text-base'>
                    <img className='w-12 md:w-14' src={url+"/images/"+item.image} alt="" />
                    <p>{item.name}</p>
                    <p>₹{item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>₹{item.price * cartItems[item._id]}</p>
                    <p className='cursor-pointer ' onClick={() => removeFromCart(item._id)}>X</p>
                  </div>
                  <hr className='h-0.5 bg-gray-200 border-none' />
                </div>
              )
            }
          })}
        </div>
        <div className='mt-20 flex flex-col justify-between gap-10 lg:gap-20 md:flex-row'>
          <div className='flex-1 flex flex-col gap-4'>
            <h2 className='font-bold text-2xl sm:text-2xl md:text-3xl'>Cart Total</h2>
            <div className='space-y-3 sm:space-x-3 lg:space-x-0'>
              <div className='flex justify-between text-gray-950 '>
                <p>Subtotal</p>
                <p>₹{getTotalCartAmount()}</p>
              </div>
              <hr className='h-0.5 my-[10px] bg-gray-200 border-none'/>
              <div className='flex justify-between text-gray-950'>
                <p>Delivery Fee</p>
                <p>₹{getTotalCartAmount()===0?0:29}</p>
              </div>
              <hr className='h-0.5 my-[10px] bg-gray-200 border-none'/>
              <div className=' flex justify-between text-gray-950'>
                <b>Total</b>
                <b>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+29}</b>
              </div>

            </div>
            <button onClick={()=>navigate('/PlaceOrder')} className='border-none text-white bg-orange-500 w-[max(15vw,200px)] py-3 sm:w-[250px] md:w-[280px] rounded-sm cursor-pointer'>PROCEED TO CHECKOUT</button>
          </div>
          <div className='flex-1 '>
            <div>
              <p className='text-gray-950 sm:text-base'>If you have a promo code, Enter it here</p>
              <div className='mt-3 flex justify-between items-center bg-gray-200 rounded-md'>
                <input className='flex-1 bg-transparent border-none outline-none px-3 py-2' type="text" placeholder='promo code' />
                <button className='rounded-[4px] sm:px-6 cursor-pointer px-4 py-2 bg-orange-500 text-white'>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart