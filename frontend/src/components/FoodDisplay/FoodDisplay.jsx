import React, { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext'
import Fooditem from '../Fooditem/Fooditem'

const FoodDisplay = ({category}) => {

    const{food_list} = useContext(StoreContext)
  return (
    <>
    <div className=' mt-8 px-4 sm:px-6 md:px-12 ' id='food-display'>
      <h2 className='text-3xl font-semibold sm:text-2xl md:text-3xl'>Top dishes near you</h2>
      <div className='grid lg:grid-cols-4 mt-7 gap-4 md:gap-6 lg:gap-8 gap-y-8 gap-x-6 sm:grid-cols-2 md:grid-cols-3 '>
        {food_list.map((item,index)=>{
          if (category==="All" || category===item.category) {
            return <Fooditem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
          }
           
        })}
      </div>
    </div>
    </>
  )
}

export default FoodDisplay