import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Home from '../Home/Home'

export default function Bridage() {
  return (
  <><div className="row">
  <div className="col-md-3" style={{ position: 'relative' }}>
    <Navbar />
  </div>
  <div className="col-md-9" >
    <Outlet />
  </div>
</div>
</>
  )
}
