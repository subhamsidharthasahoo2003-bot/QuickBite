import React, {  useState } from 'react'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext'
import axios from "axios"

const Login = ({setShowLogin}) => {

    const {url,setToken} = useContext(StoreContext)
     
    const[currState,setCurrState] = useState("Login")
    const [data,setData]= useState({
        name:"",
        email:"",
        password:""
    })

    const onChangeHandler =(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const onLogin = async (event) =>{
        event.preventDefault()
        let newUrl = url;
        if (currState==="Login") {
            newUrl +="/api/user/login"
            
        }
        else{
            newUrl += "/api/user/register"
        }

        const response = await axios.post(newUrl,data);

        if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token);
            setShowLogin(false)
        }
        else{
            alert(response.data.message)
        }

    }




  return (
    <>
    <div className='absolute z-20 w-full h-full bg-black/50 grid '>
        <form onSubmit={onLogin} className='place-self-center w-[max(23vw,330px)] text-gray-500 bg-white flex flex-col gap-6 p-[25px_30px] rounded-lg text-[14px] animate-fadeIn duration-200'>
            <div className='flex justify-between items-center text-black font-bold text-2xl'>
                <h2>{currState}</h2>
                <img className='w-5 cursor-pointer' onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className='flex flex-col gap-3 '>
                {currState==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} className='outline-none  rounded-sm p-2 border-2' type="text" placeholder='Your name' required />}
                
                <input name='email' onChange={onChangeHandler} value={data.email} className='border-2 p-2 outline-none  rounded-sm ' type="email" placeholder='Your email' required />
                <input name='password' onChange={onChangeHandler} value={data.password} className='border-2 p-2 outline-none  rounded-sm ' type="password" placeholder='Password' required />
            </div>
            <button type='submit' className='border-2 text-white bg-orange-600 text-sm cursor-pointer p-[10px]   rounded-xl '>{currState==="Sign up"?"Create account":"Login"}</button>
            <div className='flex items-start gap-1.5'>
                <input className='mt-1.5' type="checkbox" required />
                <p>By continuing i agree to the terms of use & privacy policy.</p>
            </div>
            {currState==="Login"
            ?<p>Create a new account? <span className='text-orange-500 font-semibold cursor-pointer' onClick={()=>setCurrState("Sign up")}>Click here</span></p>
            : <p>Already have an account?<span className='text-orange-500 font-semibold cursor-pointer' onClick={()=>setCurrState("Login")}>Login here</span></p>
            }
           
        </form>
    </div>
    </>
  )
}

export default Login