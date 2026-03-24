import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Sidebar from './component/Sidebar/Sidebar'
import { Routes , Route ,Navigate } from 'react-router-dom'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'
import Add from './pages/Add/Add'
 import { ToastContainer } from 'react-toastify';

const App = () => {
  const url="http://localhost:4000"

  return (
    <>
    <ToastContainer />
    <Navbar />
    <hr />
    <div className='flex '>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Navigate to="/add" />} />
        <Route path="/add" element={<Add url={url} />} />
        <Route path="/list" element={<List url={url} />} />
        <Route path="/orders" element={<Orders url={url} />} />
      </Routes>
    </div>
    
    </>
  )
}

export default App