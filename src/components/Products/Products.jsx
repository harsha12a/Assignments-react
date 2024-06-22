import React, { useEffect } from 'react'
import './Products.css'
import { useState } from 'react'
import Product from '../Product/Product'
function Products() {
  let [prods,setprod]=useState([])
  async function getproducts(){
    let res=await fetch('http://localhost:3000/products')
    let data=await res.json()
    setprod(data)
  }
  useEffect(()=>{
    getproducts()
  },[])
  return (
    <div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {
          prods.map((prod)=>(
            <div className="col" key={prod.id}>
              <Product x={prod}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Products