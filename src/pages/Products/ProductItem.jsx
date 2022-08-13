import React from 'react'

export default function ProductItem(props) {
  return (
    <div className='card'>
        <img src="https://i.pravatar.cc?u=1" alt="item" width={50} />
        <div className="card-body">
            <h2>Product 1</h2>
            <p>1000</p>
            <button className='btn btn-info'>
                <i className="fa fa-cart-plus text-success"></i>
                 Add to cart
            </button>
        </div>
    </div>
  )
}
