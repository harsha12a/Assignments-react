import React from 'react'
import './UserProfile.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import {UserLoginContext} from '../../contexts/userLoginContext'
import { AiFillProduct } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa6";
import {CiEdit} from "react-icons/ci"
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function UserProfile() {
  let {curr}=useContext(UserLoginContext)
  let navigate=useNavigate()
  function edituser(){
    navigate('../edit-user')
  }
  return (
    <div>
      <div className="text-end text-end mt-4">
        <img src={curr?.profile} alt="" width='100px' className='rounded-circle' />
        <p className='fs-3'>{curr?.username}<button onClick={edituser} className='btn btn-warning'><CiEdit className='text-white fs-3'/></button></p>
      </div>
      <ul className='nav fs-5 p-3 justify-content-around my-4'>
        <li className='nav-item'><Link className='nav-link text-info' to={'products'}><AiFillProduct className='mr-1 fs-3 text-warning' />Products</Link></li>
        <li className='nav-item'><Link className='nav-link text-info' to={'cart'}><FaCartPlus className='mr-1 fs-3 text-warning'/>Cart</Link></li>
      </ul>
      <Outlet/>
    </div>
  )
}

export default UserProfile