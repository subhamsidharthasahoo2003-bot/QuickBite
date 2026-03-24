import React, {  useState } from 'react'
import { assets } from '../../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify';

const Add = ({url}) => {
    
    const [image,setImage]=useState(false);
    const [data,setData]=useState({
        name:"",
        description:"",
        price:"",
        category:"Salad"
    })
    const onChangeHandler =(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setData(data=>({...data,[name]:value}))
    }
    const onSubmitHandler = async (event)=>{
        event.preventDefault();
        const formData = new FormData();
        formData.append("name",data.name)
        formData.append("description",data.description)
        formData.append("price",Number(data.price))
        formData.append("category",data.category)
        formData.append("image", image)
        const response = await axios.post(`${url}/api/food/add`,formData);
        if (response.data.success){
            setData({
                name:"",
                description:"",
                price:"",
                category:"Salad"
            })
            setImage(false)
            toast.success(response.data.message)
        }
        else{
            toast.error(response.data.message)
        }
    }

  return (
    <>
    <div className='w-full md:w-[70%] lg:w-[60%] mx-auto mt-8  ml-[25%] md:mt-12 md:text-base text-gray-500 text-[16px] '>
        <form className='flex flex-col gap-4' onSubmit={onSubmitHandler} >
            <div className=''>
                <p className='mb-1'>Upload Image</p>
                <label htmlFor="image">
                    <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" className='w-24 md:w-28 cursor-pointer' />
                </label>
                <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
            </div>
            <div className='md:max-w-sm w-full flex-1'>
                <p>Product Name</p>
                <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' className='border-2 p-[10px] w-100 ' />
            </div>
            <div className='w-full md:max-w-md flex-1'>
                <p className='mb-1'>Product description</p>
                <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write content here' className='border-2 p-[10px] w-100 ' ></textarea>
            </div>
            <div className='flex flex-col md:flex-row gap-4 '>
                <div className=" flex-1">
                    <p className='mb-1'>Product category</p>
                    <select onChange={onChangeHandler} name="category" className='border-2 p-[10px] w-full md:w-40' >
                        <option value="Salad">Salad</option>
                        <option value="Rolls">Rolls</option>
                        <option value="Deserts">Deserts</option>
                        <option value="Sandwich">Sandwich</option>
                        <option value="Cake">Cake</option>
                        <option value="Pure veg">Pure veg</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Noodles">Noodles</option>
                    </select>
                </div>
                <div className=" flex-1">
                    <p className='mb-1'>Product price</p>
                    <input onChange={onChangeHandler} value={data.price} type="number" name='price' placeholder='₹199' className='border-2 w-fit p-2 md:w-40 ' />
                </div>
            </div>
            <button type='submit' className='border-2 w-full md:w-32 border-none p-[10px] bg-black text-white cursor-pointer '>ADD</button>
        </form>
    </div>
    </>
  )
}

export default Add