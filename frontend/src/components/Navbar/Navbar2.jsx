import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'

import { StoreContext } from '../Context/StoreContext'




const Navbar2 = ({setShowLogin}) => {
       
    const [menu,setMenu] = useState("Menu")
    const {getTotalCartAmount, token, setToken}=useContext(StoreContext);
    const navigate = useNavigate();
    const logout= ()=>{
        localStorage.removeItem("token");
        setToken("");
        navigate("/")
    }

    return (
        <>

            <div className='sticky top-0 z-40  justify-between  bg-gray-200 backdrop-blur border-b border-gray-300 shadow-2xl flex h-16  p-5 lg:px-36 ' >
                <div className='  '>
                    <Link to='/'>
                <span className="inline-flex h-8 w-8  items-center justify-center rounded-full bg-orange-600 text-white font-bold">
                    Q
                </span>
                <span className="text-xl font-extrabold tracking-tight text-gray-900">
                    Quick<span className="text-gray-900">Bite</span>
                </span></Link>
                </div>
                
                <ul className='flex gap-4 text-black font-medium hidden md:flex '>
                    <Link to='/' onClick={()=>setMenu("Home")} className={` border-b-2  border-gray-200 hover:border-orange-500 duration-500 cursor-pointer  ${menu==="Home"?"active":""}`} >Home</Link>
                    <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={`border-b-2  hover:border-orange-500 border-gray-200 duration-500 cursor-pointer ${menu==="Menu"?"active":""}`}>Menu</a>
                    <a href='#app-download' onClick={()=>setMenu("Mobile-App")} className={`border-b-2  hover:border-orange-500 border-gray-200 duration-500 cursor-pointer ${menu==="Mobile-App"?"active":""}`}>Mobile-App</a>
                    <a href='#footer' onClick={()=>setMenu("Contact us")} className={`border-b-2  hover:border-orange-500 border-gray-200 duration-500 cursor-pointer ${menu==="Contact us"?"active":""}`}>Contact us</a>
                </ul>
                <div className='flex items-center gap-10'>
                    <img src={assets.search_icon} alt="" />
                    <div>
                       <Link to='/Cart'> <img src={assets.basket_icon} alt="" /></Link>
                    </div>
                    {!token?<button onClick={()=>setShowLogin(true)} className='inline-flex items-center rounded-full border border-gray-800 px-4 py-2 text-sm font-medium text-gray-800 hover:border-orange-500 hover:text-orange-600 transition transparent whitespace-nowrap cursor-pointer'>Sign in</button>
                    :<div className='relative group '>
                        <img src={assets.profile_icon} alt="" />
                        <ul className='absolute  hidden right-0 z-50 group-hover:flex flex-col gap-2.5 bg-pink-200 py-3 px-[25px] rounded-2xl border-2 border-red-400 outline-2 outline-white list-none w-35  '>
                            <li onClick={()=>navigate('/myorders')} className='flex items-center gap-2  cursor-pointer hover:text-red-500'><img src={assets.bag_icon} alt="" className='w-5' /><p>Orders</p></li>
                            <hr />
                            <li className='flex items-center gap-2 cursor-pointer hover:text-red-500' onClick={logout}><img src={assets.logout_icon} alt="" className='w-5' /><p>Logout</p></li>
                        </ul>
                        </div>}
                    
                </div>
            </div>

        </>
    )
}

export default Navbar2