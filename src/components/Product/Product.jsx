import React from 'react'
import './Product.css'
import { useContext } from 'react'
import {UserLoginContext} from '../../contexts/userLoginContext'
function Product(props) {
  let prod=props.x
  let {curr}=useContext(UserLoginContext)
  async function addToCart(obj) {
    obj.username=curr?.username
    let res=await fetch('https://users-api-4bbh.onrender.com/user-cart', {
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(obj)
    })
    if(res.status===201) {
      alert('Product added to Cart')
    }
  }
  return (
    <div className='card text-center h-100 bg-light'>
      <div className="card-body d-flex flex-column justify-content-between">
        <p className="text-secondary fs-4">{prod.title}</p>
        <p className="fs-6 text-danger">{prod.brand}</p>
        <p className="lead">{prod.description}</p>
        <p className="fs-3 text-warning">${prod.price}</p>
        <button className="btn btn-success" onClick={()=>addToCart(prod)}>Add to Cart</button>
      </div>
    </div>
  )
}

export default Product