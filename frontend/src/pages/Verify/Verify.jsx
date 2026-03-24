import React, { useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../components/Context/StoreContext'
import axios from 'axios'

const Verify = () => {

  const [searchParam] = useSearchParams();
  const success = searchParam.get("success");
  const orderId = searchParam.get("orderId");

  const { url } = useContext(StoreContext);
  const navigate = useNavigate();

  const verifyPayment = async () => {
    const response = await axios.post(url + "/api/order/verify", {
      success,
      orderId
    });

    if (response.data.success) {
      navigate("/myorders");
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    if (orderId) {
      verifyPayment();
    }
  }, [orderId]);

  return (
    <div className='min-h-[60vh] grid'>
      <div className='w-[100px] h-[100px] place-self-center border-[5px] border-[#bdbdbd] border-t-orange-500 rounded-full animate-spin'>
      </div>
    </div>
  )
}

export default Verify