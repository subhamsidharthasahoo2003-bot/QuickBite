import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { toast } from 'react-toastify';
import { assets } from "../../assets/assets"


const Orders = ({ url }) => {

  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data);
    }
    else {
      toast.error("Error")
    }
  }

  const statusHandler = async (event,orderId) => {
      const response = await axios.post(url+"/api/order/status",{
        orderId,
        status:event.target.value
      })
      if (response.data.success) {
        await fetchAllOrders();
      }
  }

  useEffect(() => {
    fetchAllOrders();
  }, [])

  return (
    <>
      <div className='p-10'>
        <h3 className="text-lg font-semibold">Order Page</h3>

        <div>
          {orders.map((order, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 
        items-start gap-6 border-2 border-orange-500 
        p-4 md:p-5 my-5 md:my-6 text-sm text-gray-700 rounded-xl"
            >
              {/* Image */}
              <img
                src={assets.parcel_icon}
                alt=""
                className="w-12 h-12 object-contain mx-auto md:mx-0"
              />

              {/* Order Info */}
              <div className="col-span-1 md:col-span-2 lg:col-span-2">
                <p className="font-semibold">
                  {order.items
                    ?.map((item) => `${item.name} x ${item.quantity}`)
                    .join(", ")}
                </p>

                <p className="font-semibold mt-4 mb-1">
                  {order.address.firstName + " " + order.address.lastName}
                </p>

                <div className="mb-2">
                  <p>{order.address.street},</p>
                  <p>
                    {order.address.city}, {order.address.state},{" "}
                    {order.address.country}, {order.address.zipcode}
                  </p>
                </div>

                <p>{order.address.phone}</p>
              </div>

              {/* Items Count */}
              <p className="text-center md:text-left">
                Items: {order.items?.length}
              </p>

              {/* Amount */}
              <p className="text-center md:text-left font-semibold">
                ₹{order.amount}
              </p>

              {/* Status */}
              <select
                className="bg-orange-200 border border-orange-500 
          w-full md:w-[150px] p-2 outline-none rounded-xl" onChange={(event)=>statusHandler(event,order._id)} value={order.status}>
                <option value="Food Processing">Food Processing</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Orders