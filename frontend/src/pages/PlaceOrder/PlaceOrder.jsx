import React, { useContext, useEffect, useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import { StoreContext } from '../../components/Context/StoreContext'
import axios from 'axios'

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url, clearCart  } = useContext(StoreContext)
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }

  const placeOrderHandler = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.forEach((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = { ...item };
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo)
      }
    })
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 29,
    }
    let response = await axios.post(url + "/api/order/place", orderData, { headers: { token } });
    if (response.data.success) {
      const options = {
        key: response.data.key,
        amount: response.data.amount,
        currency: "INR",
        name: "Food Delivery",
        description: "Order Payment",
        order_id: response.data.orderId,

        handler: async function () {

          const verifyResponse = await axios.post(
            url + "/api/order/verify",
            {
              success: "true",
              orderId: response.data.order_db_id
            }
          );

          if (verifyResponse.data.success) {

            await clearCart();   // ⭐ clear cart here

            alert("Payment Successful");

            window.location.href = "/myorders";
          }
        }
      };

      if (window.Razorpay) {
        const razor = new window.Razorpay(options);

        razor.on("payment.failed", function () {
          alert("Payment Failed");
        });

        razor.open();
      }

    } else {
      alert("Order API Error");
    }
  }

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/cart')
    }
    else if (getTotalCartAmount() === 0) {
      navigate('/cart')
    }
  }, [token])


  return (
    <>
      <form onSubmit={placeOrderHandler} className='px-36 flex flex-col lg:flex-row items-start justify-between gap-12 p-6 sm:px-10 md:px-16 lg:px-36 lg:mt-24 sm:mt-20 sm:mb-20 mb-16'>
        <div className='w-full lg:w-1/2 max-w-full lg:max-w-[500px] sm:py-5'>
          <p className='text-3xl sm:text-2xl font-bold mb-8 sm:mb-14'> Delivery Information</p>
          <div className=' flex gap-1  sm:flex-row'>
            <input required name='firstName' onChange={onChangeHandler} value={data.firstName} className='border-2  mb-2 w-full p-2 rounded-sm outline-orange-500' type="text" placeholder='First Name' />
            <input required name='lastName' onChange={onChangeHandler} value={data.lastName} className='border-2 mb-2 w-full p-2 rounded-sm outline-orange-500' type="text" placeholder='Last Name' />
          </div>
          <input required name='email' onChange={onChangeHandler} value={data.email} className='border-2 mb-2 w-full p-2 rounded-sm outline-orange-500' type="text" placeholder='Email address' />
          <input required name='street' onChange={onChangeHandler} value={data.street} className='border-2 mb-2 w-full p-2 rounded-sm outline-orange-500' type="text" placeholder='Street' />
          <div className=' flex gap-4  sm:flex-row'>
            <input required name='city' onChange={onChangeHandler} value={data.city} className='border-2 mb-2 w-full p-2 rounded-sm outline-orange-500' type="text" placeholder='City' />
            <input required name='state' onChange={onChangeHandler} value={data.state} className='border-2 mb-2 w-full p-2 rounded-sm outline-orange-500' type="text" placeholder='State' />
          </div>
          <div className=' flex gap-4  sm:flex-row'>
            <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} className='border-2 mb-2 w-full p-2 rounded-sm outline-orange-500' type="text" placeholder='Zip code' />
            <input required name='country' onChange={onChangeHandler} value={data.country} className='border-2 mb-2 w-full p-2 rounded-sm outline-orange-500' type="text" placeholder='Country' />
          </div>
          <input required name='phone' onChange={onChangeHandler} value={data.phone} className='border-2 mb-2 w-full p-2 rounded-sm outline-orange-500' type="text" placeholder='Phone' />
        </div>
        <div className='w-full lg:w-1/2 max-w-full lg:max-w-[500px]'>
          <div className=' flex flex-col gap-6'>
            <h2 className='font-bold text-2xl sm:text-3xl md:text-3xl'>Cart Total</h2>
            <div className='space-y-3 sm:space-x-3 lg:space-x-0'>
              <div className='flex justify-between text-gray-950 '>
                <p>Subtotal</p>
                <p>₹{getTotalCartAmount()}</p>
              </div>
              <hr className='h-0.5 my-[10px] bg-gray-200 border-none' />
              <div className='flex justify-between text-gray-950'>
                <p>Delivery Fee</p>
                <p>₹{getTotalCartAmount() === 0 ? 0 : 29}</p>
              </div>
              <hr className='h-0.5 my-[10px] bg-gray-200 border-none' />
              <div className=' flex justify-between text-gray-950'>
                <b>Total</b>
                <b>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 29}</b>
              </div>

            </div>
            <button type='submit' className='border-none text-white bg-orange-500 w-full py-3 sm:w-[250px] md:w-[280px] rounded-sm cursor-pointer mt-8'>PROCEED TO PAYMENT</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default PlaceOrder