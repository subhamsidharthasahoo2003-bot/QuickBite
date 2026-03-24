import React, { useEffect, useState } from 'react'
import axios from "axios"
import {toast} from "react-toastify"

const List = ({url}) => {

  
  const [list,setList]=useState([])

  const fetchList=async()=>{
    const response = await axios.get(`${url}/api/food/list`);
    
    if (response.data.success) {
      setList(response.data.data);
    }
    else
    {
      toast.error("Error");
      
    }
  }

  const removeFood =async(foodId)=>{
    const response=await axios.post(`${url}/api/food/remove`,{id:foodId})
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message)
    }
    else{
      toast.error("Error");
    }
  }

  useEffect(()=>{
    fetchList();
  },[])

  return (
    <>
    <div className='list add flex-col '>
      <p>All Foods List</p>
      <div className='list table'>
        <div className='hidden md:grid grid grid-cols-3 items-center lg:gap-4 md:gap-3 md:py-3 md:px-4  py-[12px] px-[15px] border-2 border-gray-200 text-xl md:text-base lg:text-lg bg-gray-300 sm:grid-cols-3 md:grid-cols-5 '>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=>{
          return(
            <div key={index} className='grid grid-cols-3 items-center gap-[10px] py-[12px] px-[15px] border-2 border-gray-200 text-xl md:grid-cols-5 sm:grid-cols-3 md:gap-3 lg:gap-4 md:py-3 md:px-4 md:text-base lg:text-lg'>
              <img src={`${url}/images/`+item.image} alt="" className='w-10 md:w-12 lg:w-14  '  />
              <p>{item.name}</p>
              <p className=' sm:block'>{item.category}</p>
              <p className='md:block '>₹{item.price}</p>
              <p className=' md:block cursor-pointer text-red-500' onClick={()=>removeFood(item._id)}>X</p>
            </div>
          )
        })}
      </div>
    </div>
    </>
  )
}

export default List