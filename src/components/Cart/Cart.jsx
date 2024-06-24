import React, { useContext, useEffect, useState } from 'react'
import './Cart.css'
import { UserLoginContext } from '../../contexts/userLoginContext'
import { MdDeleteOutline } from "react-icons/md";
function Cart() {
  let {curr}=useContext(UserLoginContext)
  let [cartitems,setcart]=useState([])
  async function getcart(){
    let res=await fetch(`https://users-api-4bbh.onrender.com/user-cart?username=${curr?.username}`)
    let data=await res.json()
    setcart(data)
  }
  async function deleteitem(prodid){
    let res=await fetch(`https://users-api-4bbh.onrender.com/user-cart/${prodid}`,{method:"DELETE"})
    console.log(res);
    getcart()
  }
  useEffect(()=>{
    getcart()
  },[])
  return (
    <div>
      {
        cartitems.length===0?(<p className='text-center display-1 text-danger'>Cart is empty</p>)
      :(
      <table className="table text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Brand</th>
          </tr>
        </thead>
        <tbody>
          {
            cartitems.map((item)=>(
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.brand}</td>
                <button className="btn btn-danger"><MdDeleteOutline className='fs-4 text-danger' onClick={()=>deleteitem(item.id)}/></button>
              </tr>
            ))
          }
        </tbody>
      </table>
      )
    }
    </div>
  )
}

export default Cart