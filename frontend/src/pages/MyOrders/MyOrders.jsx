import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../components/Context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/assets';

const MyOrders = () => {

    const { url, token } = useContext(StoreContext);
    const [data, setData] = useState([]);

    const fetchOrders = async () => {
        const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } });
        setData(response.data.data);

    }

    useEffect(() => {
        if (token) {
            fetchOrders();
        }
    }, [token])


    return (
        <>
            <div className='px-4 sm:px-8 md:px-16 lg:px-36 mt-10'>
                <h2 className='text-lg font-semibold'>My Orders</h2>

                <div className='flex flex-col gap-3 mt-5'>
                    {data.map((order, index) => {
                        return (
                            <div
                                key={index}
                                className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 items-center gap-2 lg:gap-14 text-sm py-3 px-4 border-2 border-orange-500 rounded'
                            >

                                <img className='w-10' src={assets.parcel_icon} alt="" />

                                <p className='text-gray-700 '>
                                    {order.items.map((item, itemindex) => {
                                        if (itemindex === order.items.length - 1) {
                                            return item.name + " x " + item.quantity
                                        } else {
                                            return item.name + " x " + item.quantity + ", "
                                        }
                                    })}
                                </p>

                                <p>₹{order.amount}.00</p>

                                <p>Items: {order.items.length}</p>

                                <p className='text-gray-700'>
                                    <span className='text-orange-500'>&#x25cf;</span> <b>{order.status}</b>
                                </p>

                                <button className='py-2 px-3 border rounded bg-orange-400 text-white hover:bg-orange-500 transition' onClick={fetchOrders}>
                                    Track Order
                                </button>

                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default MyOrders