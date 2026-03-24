import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExpMenu from '../../components/ExploreMenu/ExpMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'


const Home = () => {

    const [category,setCategory] = useState("All")
  return (
    <>
    <Header />
    <ExpMenu  category={category} setCategory={setCategory}/>
    <FoodDisplay category={category}/>
    <AppDownload />
    </>
  )
}

export default Home