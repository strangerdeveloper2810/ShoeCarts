import React from 'react'
import Cart from './Cart'
import ProductItem from './ProductItem'

export default function Product(props) {
  return (
    <div className='container'>
        <h3>Shoes Shop</h3>
        <Cart/>

        <h3 className="mt-2">Product List</h3>

        <div className="row">
            <div className="col-4">
                <ProductItem/>
            </div>

            <div className="col-4">
                <ProductItem/>
            </div>

            <div className="col-4">
                <ProductItem/>
            </div>

            
        </div>
    </div>
  )
}
